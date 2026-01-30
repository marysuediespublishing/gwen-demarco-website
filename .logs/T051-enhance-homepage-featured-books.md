# T051 - Enhance homepage with featured books section

refs: D002, D004

## Attempt 1

**Approach:** Add a featured books section to the homepage between the hero and the Featured Series section. Will:
1. Query books collection for featured books
2. Add a new section with a grid of 3-4 BookCard components
3. Include section title "Featured Books" and a description
4. Add "View All Books" link button

**Result:** Success

**Details:**
- Updated `src/pages/index.astro` to query featured books from the books collection
- Added helper function `getSeriesDisplay()` to show series names on book cards
- Inserted new "Featured Books" section between Hero and Featured Series sections
- Grid displays up to 4 featured books with:
  - Book cover placeholder with gradient and emoji
  - Series badge (when applicable)
  - Book title with hover color transition
  - Description (2 lines max)
  - Rating stars and price/KU badge
  - Hover effects including glow and border color changes
- Added "View All Books" button linking to /books page
- Build verified successfully with `npm run build`
