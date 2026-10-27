// Landing pages show small copies of the covers, made here from the covers in
// public/images at the start of every `astro dev` / `astro build`, so a new cover
// reaches the landing pages with nothing else to remember. The copies go to
// public/images/landing/, which is not in git; a copy newer than its cover (and
// than this file) is left alone.
//
//   /images/<cover>.jpg  ->  landing/<cover>-400.jpg     every book and series cover (doors, box-set list)
//   /images/<cover>.png  ->  landing/<cover>-400.webp    (webp keeps a box set's transparency)
//   hero covers          ->  landing/<cover>-640.webp    books with a `landing:` block, box-set series
//   share images         ->  landing/<slug>-og.jpg        1200x630, books with a `landing:` block
//                            landing/<series>-box-set-og.jpg   series with a box-set page
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import sharp from 'sharp';

const SELF = fileURLToPath(import.meta.url);
const OG = { width: 1200, height: 630 };

/** "/images/foo.jpg" -> { name: "foo", ext: "jpg" }; anything else -> undefined. */
export const coverName = (src) => {
  const m = typeof src === 'string' && src.match(/^\/images\/([^/]+)\.(jpe?g|png)$/i);
  return m ? { name: m[1], ext: m[2].toLowerCase() } : undefined;
};

const frontmatter = (dir) =>
  existsSync(dir)
    ? readdirSync(dir)
        .filter((f) => /\.mdx?$/.test(f))
        .map((f) => ({ slug: f.replace(/\.mdx?$/, ''), data: matter(readFileSync(join(dir, f), 'utf8')).data }))
    : [];

/** Every copy the landing pages can ask for: [{ out, src, kind, width? }], out relative to landing/. */
export const plan = (root) => {
  const books = frontmatter(join(root, 'src/content/books'));
  const series = frontmatter(join(root, 'src/content/series'));
  const jobs = new Map();
  const add = (out, src, kind, width) => {
    if (existsSync(join(root, 'public', src))) jobs.set(out, { out, src, kind, width });
  };
  const small = (cover) => {
    const c = coverName(cover);
    if (c) add(`${c.name}-400.${c.ext === 'png' ? 'webp' : 'jpg'}`, cover, 'cover', 400);
  };
  const hero = (cover) => {
    const c = coverName(cover);
    if (c) add(`${c.name}-640.webp`, cover, 'cover', 640);
  };

  for (const { data } of [...books, ...series]) small(data.cover);
  for (const { slug, data } of books) {
    if (!data.landing || !coverName(data.cover)) continue;
    hero(data.cover);
    add(`${slug}-og.jpg`, data.cover, 'og');
  }
  for (const { slug, data } of series) {
    if (!existsSync(join(root, 'src/pages/series', slug, 'box-set.astro')) || !coverName(data.cover)) continue;
    hero(data.cover);
    add(`${slug}-box-set-og.jpg`, data.cover, 'og');
  }
  return [...jobs.values()];
};

// A cover with transparency (a 3D box set) loses its empty margins first.
const source = async (file) => {
  const { hasAlpha } = await sharp(file).metadata();
  return { hasAlpha, buffer: hasAlpha ? await sharp(file).trim().png().toBuffer() : readFileSync(file) };
};

const cover = async (file, out, width) => {
  const { buffer } = await source(file);
  const img = sharp(buffer).resize({ width, withoutEnlargement: true });
  await (out.endsWith('.webp') ? img.webp({ quality: 82 }) : img.jpeg({ quality: 82, mozjpeg: true })).toFile(out);
};

// The cover centred over a blurred, darkened copy of itself; a transparent cover
// sits on a midnight-purple glow instead.
const og = async (file, out) => {
  const { hasAlpha, buffer } = await source(file);
  const front = await sharp(buffer)
    .resize({ height: hasAlpha ? 560 : 590, width: 1100, fit: 'inside' })
    .png()
    .toBuffer();
  const back = hasAlpha
    ? sharp(
        Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${OG.width}" height="${OG.height}">` +
            '<defs><radialGradient id="g" cx="50%" cy="50%" r="70%">' +
            '<stop offset="0" stop-color="#2d1b4e"/><stop offset="1" stop-color="#0a0a0f"/>' +
            '</radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>',
        ),
      )
    : sharp(await sharp(buffer).resize(OG.width, OG.height, { fit: 'cover' }).blur(28).modulate({ brightness: 0.45 }).toBuffer());
  await back
    .composite([{ input: front, gravity: 'centre' }])
    .flatten({ background: '#0a0a0f' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(out);
};

/** Makes the copies that are missing or older than their cover; returns { made, fresh }. */
export const makeLandingCovers = async (root) => {
  const dir = join(root, 'public/images/landing');
  mkdirSync(dir, { recursive: true });
  const self = statSync(SELF).mtimeMs;
  const made = [];
  let fresh = 0;
  for (const job of plan(root)) {
    const src = join(root, 'public', job.src);
    const out = join(dir, job.out);
    const since = Math.max(statSync(src).mtimeMs, self);
    if (existsSync(out) && statSync(out).mtimeMs > since) {
      fresh++;
      continue;
    }
    await (job.kind === 'og' ? og(src, out) : cover(src, out, job.width));
    made.push(job.out);
  }
  return { made, fresh };
};

export default function landingCovers() {
  return {
    name: 'landing-covers',
    hooks: {
      'astro:config:setup': async ({ config, logger }) => {
        const { made, fresh } = await makeLandingCovers(fileURLToPath(config.root));
        logger.info(`${made.length} made${made.length ? ` (${made.join(', ')})` : ''}, ${fresh} up to date`);
      },
    },
  };
}
