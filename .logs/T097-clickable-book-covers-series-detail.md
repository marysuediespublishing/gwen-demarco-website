# T097 - Make book cover images clickable on series detail pages

## Attempt 1

**Approach:** Enhance the existing book card hover effects on the series detail page. The cards are already wrapped in `<a>` tags linking to book pages, so the images are technically clickable. However, need to add visual feedback (scale transform, cursor) to make it clear images are clickable.

**Result:** Success

**Details:**
- Book cards in `src/pages/series/[slug].astro` were already wrapped in `<a>` tags linking to `/books/${book.slug}`
- Added `cursor-pointer` and `group-hover:scale-105 transition-transform duration-300` to the cover image
- Added `group-hover:scale-105 transition-all duration-300 cursor-pointer` to the placeholder div (for books without covers)
- Build verified: 63 pages built successfully
