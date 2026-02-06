# T140 - Homepage Dynamic Stats

## Attempt 1

**Approach:** Replace hardcoded "Books Published" and "Series" stats with dynamic counts from `allBooks` and `allSeries` collections (already fetched in index.astro). Keep "Pages Read" and "Reader Ratings" as CMS-managed values since they come from external platforms and can't be calculated from content collections.

**Result:** Success

**Details:**
- Changed `siteConfig.stats?.booksPublished || 11` to `allBooks.length` (now shows 12)
- Changed `siteConfig.stats?.seriesComplete || 4` to `allSeries.length` (now shows 4)
- "Pages Read" and "Reader Ratings" left as CMS-managed since they're external platform metrics
- Build passes successfully (94 pages)
- Verified counts match actual content files (12 books, 4 series)
