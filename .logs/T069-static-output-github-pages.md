# T069 - Switch to static output and configure GitHub Pages deployment

refs: D001, D015

## Attempt 1

**Approach:**
1. Update astro.config.mjs:
   - Remove @astrojs/node import and adapter config
   - Change output from 'server' to 'static'
   - Keep site URL as gwendemarco.com
2. Remove @astrojs/node from package.json dependencies
3. Create .github/workflows/deploy.yml (copy from dane-griggs-website)
4. Contact page already uses mailto links (no form), so no changes needed there
5. Run npm run build to verify clean static output

**Result:** Success

**Details:**
- Removed @astrojs/node adapter from astro.config.mjs and package.json
- Changed output mode from 'server' to 'static'
- Created GitHub Actions workflow at `.github/workflows/deploy.yml` for automated build and deploy
- Fixed all 5 dynamic route pages to use `getStaticPaths()` for static generation:
  - `src/pages/blog/[slug].astro`
  - `src/pages/books/[slug].astro`
  - `src/pages/series/[slug].astro`
  - `src/pages/species/[slug].astro`
  - `src/pages/locations/[slug].astro`
- Build completed successfully with 46 pages generated
- Admin folder included in dist output (config.yml + index.html)
- Sitemap generated at dist/sitemap-index.xml
