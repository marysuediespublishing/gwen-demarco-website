// node --test tests/landing-covers.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { makeLandingCovers } from '../src/integrations/landing-covers.mjs';

const solid = (file, color) =>
  sharp({ create: { width: 800, height: 1200, channels: 3, background: color } }).jpeg().toFile(file);

// A box set: a square on a transparent page, as the 3D box-set PNGs are.
const boxSet = async (file) => {
  const square = await sharp({ create: { width: 500, height: 500, channels: 3, background: '#0000ff' } }).png().toBuffer();
  await sharp({ create: { width: 800, height: 1200, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: square, gravity: 'centre' }])
    .png()
    .toFile(file);
};

const site = async () => {
  const root = mkdtempSync(join(tmpdir(), 'landing-covers-'));
  for (const dir of ['public/images', 'src/content/books', 'src/content/series', 'src/pages/series/box']) {
    mkdirSync(join(root, dir), { recursive: true });
  }
  writeFileSync(join(root, 'src/content/books/hero.md'), '---\ncover: /images/hero.jpg\nlanding:\n  hook: x\n---\n');
  writeFileSync(join(root, 'src/content/books/plain.md'), '---\ncover: /images/plain.jpg\n---\n');
  writeFileSync(join(root, 'src/content/series/box.md'), '---\ncover: /images/box.png\n---\n');
  writeFileSync(join(root, 'src/pages/series/box/box-set.astro'), '');
  await solid(join(root, 'public/images/hero.jpg'), '#ff0000');
  await solid(join(root, 'public/images/plain.jpg'), '#00ff00');
  await boxSet(join(root, 'public/images/box.png'));
  return root;
};

const landing = (root, name) => join(root, 'public/images/landing', name);
const firstPixel = async (file) => {
  const { data } = await sharp(file).extract({ left: 0, top: 0, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
  return [...data.slice(0, 3)];
};

test('makes every copy, then leaves fresh ones alone', async () => {
  const root = await site();
  const first = await makeLandingCovers(root);
  assert.deepEqual(first.made.sort(), [
    'box-400.webp', 'box-640.webp', 'box-box-set-og.jpg',
    'hero-400.jpg', 'hero-640.webp', 'hero-og.jpg', 'plain-400.jpg',
  ]);
  assert.deepEqual(await sharp(landing(root, 'hero-og.jpg')).metadata().then((m) => [m.width, m.height]), [1200, 630]);
  assert.equal((await sharp(landing(root, 'hero-400.jpg')).metadata()).width, 400);
  assert.equal((await sharp(landing(root, 'hero-640.webp')).metadata()).width, 640);
  // the box set loses its transparent margins
  assert.deepEqual(await sharp(landing(root, 'box-400.webp')).metadata().then((m) => [m.width, m.height]), [400, 400]);

  const again = await makeLandingCovers(root);
  assert.deepEqual(again, { made: [], fresh: 7 });
});

test('a cover change produces new copies of that cover', async () => {
  const root = await site();
  await makeLandingCovers(root);
  const before = readFileSync(landing(root, 'hero-400.jpg'));
  assert.ok((await firstPixel(landing(root, 'hero-400.jpg')))[0] > 200);

  await solid(join(root, 'public/images/hero.jpg'), '#0000ff');
  const later = new Date(Date.now() + 5000);
  utimesSync(join(root, 'public/images/hero.jpg'), later, later);

  const { made } = await makeLandingCovers(root);
  assert.deepEqual(made.sort(), ['hero-400.jpg', 'hero-640.webp', 'hero-og.jpg']);
  assert.notDeepEqual(readFileSync(landing(root, 'hero-400.jpg')), before);
  const [r, , b] = await firstPixel(landing(root, 'hero-400.jpg'));
  assert.ok(b > 200 && r < 50, `new copy is the new (blue) cover, got r=${r} b=${b}`);
});
