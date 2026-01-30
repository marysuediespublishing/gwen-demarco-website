# T031 - Create Individual Series Page Template

## Attempt 1

**Approach:** Create `src/pages/series/[slug].astro` by adapting the dane-griggs-website reference implementation with the urban fantasy theme from gwen-demarco-website.

Key adaptations:
1. Use the urban fantasy color scheme (shadow-black, mystic-violet, ember-orange, etc.)
2. Match the existing Layout.astro structure (imports Header/Footer)
3. Use existing helper functions pattern from books/[slug].astro
4. Include: hero section, series info card, world building, reading order, books in series grid, related series, and newsletter CTA
5. Match the Image handling pattern from books/[slug].astro

**Result:** Success

**Details:** Created `src/pages/series/[slug].astro` with the following features:
- Hero section with breadcrumb navigation, series info card, and series description
- Series stats card showing book count, status, rating, total ratings, word count, start/completion dates
- Featured creatures/species badges with links to species pages
- World building section from series markdown
- Reading order section with numbered list linking to book pages
- CTA buttons for starting the series and buying on Amazon
- Markdown content rendering from series files
- Books in series grid with cover images, book numbers, ratings, and KU badges
- Related series section (matching by species)
- Newsletter CTA section

Build verification: `npm run build` completed successfully.
