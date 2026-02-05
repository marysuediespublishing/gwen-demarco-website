# T082 - Fix ratings and review counts in "Readers Love These Books" section

## Attempt 1

**Approach:** Update Amazon and Goodreads stats in both `src/content/settings/site-config.md` (primary source) and fallback values in `src/pages/index.astro`:
- Amazon reviews: "320+" → "13K+"
- Amazon average rating: "4.5" → "4.6"
- Goodreads ratings: "180+" → "9K+"
- Goodreads average rating: "4.3" → "4.5"

**Result:** Success

**Details:**
- Updated 4 values in `site-config.md` frontmatter (lines 18-21)
- Updated 4 fallback values in `index.astro` (Amazon rating, Amazon review count, Goodreads rating, Goodreads review count)
- Build passes cleanly: 63 pages generated, no errors
- Star display SVGs (4 filled + 1 gray) remain appropriate for both 4.5 and 4.6 ratings
