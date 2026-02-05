# T075 - FIX: Broken images on homepage at localhost:4321

## Attempt 1

**Approach:**
The build fails with `[ImageNotFound] Could not load /images/asphalt-coven-ebook-cover.jpg`. Root cause:

1. Decap CMS uploads to `public/images/` and saves paths as `/images/filename.jpg`
2. Content schema in `src/content.config.ts` uses Astro's `image()` validator for cover fields
3. Astro's `image()` can't resolve web-style `/images/...` paths — it needs relative paths to files in `src/`
4. All book/character/species content files use `/images/...` paths from CMS
5. Additionally, Layout.astro defaults og:image to `/images/og-image.jpg` which doesn't exist

Fix plan:
- Change `cover: image()` to `cover: z.string()` in content.config.ts for all collections (books, series, blog, characters, species, locations)
- Remove `getImage()` calls and `Image` component imports from page templates
- Replace `<Image>` components with plain `<img>` tags in books/[slug].astro and series/[slug].astro
- Simplify book processing in search.astro to pass cover string directly as coverUrl
- Make og:image/twitter:image meta tags conditional in Layout.astro (only render when image is provided)

**Result:** Success

**Details:**
Files modified:
- `src/content.config.ts` — Changed all `image()` validators to `z.string()` for 6 collections (books, series, blog, characters, species, locations). Removed `({ image })` schema factory syntax where no longer needed.
- `src/pages/books/[slug].astro` — Removed `Image, getImage` import. Replaced `getImage()` processing with direct string pass-through. Replaced 3 `<Image>` components with `<img>` tags.
- `src/pages/series/[slug].astro` — Removed `Image, getImage` import. Replaced `getImage()` processing with direct string mapping. Replaced 2 `<Image>` components with `<img>` tags.
- `src/pages/search.astro` — Removed `getImage` import. Replaced async image processing with direct string mapping.
- `src/layouts/Layout.astro` — Removed broken default `/images/og-image.jpg`. Made og:image and twitter:image meta tags conditional.

Build result: 63 pages built successfully, no errors.
