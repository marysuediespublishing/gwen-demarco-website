# T121 - Add Characters, Locations, and Artwork sections to individual series pages

## Attempt 1

**Approach:** Add three new sections to src/pages/series/[slug].astro:
1. Characters section in the Series Stats Card (right sidebar) - below Featured Creatures
2. Locations section below Characters in the same card
3. Artwork sample section with up to 5 thumbnails between hero and "Books In This Series"

The approach:
- Fetch characters, locations, and artwork collections
- Filter characters by matching their books to the current series
- Filter locations by matching book settings to locations
- Filter artwork by book -> series relationship (like artwork.astro does)
- Display Characters and Locations as linked badges (matching species styling)
- Display artwork thumbnails with focal point support and lightbox on click
- Add "View All Artwork" link to /artwork/[series-slug]

**Result:** Success

**Details:**
- Added Characters section to Series Stats Card (right sidebar), below Featured Creatures
- Added Locations section below Characters in Series Stats Card
- Added Artwork sample section between Series Content and "Books In This Series"
- Characters filtered by matching their books array to series books, sorted featured first
- Locations filtered by matching book settings to location slugs
- Artwork filtered by book -> series relationship, limited to 5 thumbnails with focal point support
- Added lightbox modal with click-to-view-full-image behavior matching /artwork page
- Added "View All X Artworks" link to /artwork/[series-slug]
- All sections hidden when no matching content exists
- Build verified: 94 pages generated successfully
