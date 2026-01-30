# T052 - Add recent blog posts preview to homepage

## Attempt 1

**Approach:** Add a "Latest from the Blog" section to the homepage between the "Why Readers Love" section and the "Newsletter" section. Will:
1. Import and query the blog collection for the latest 3 posts sorted by pubDate
2. Create a responsive grid layout with post cards showing title, date, excerpt, and category
3. Add "View All Posts" link to the blog page
4. Use consistent urban fantasy styling matching other sections

**Result:** Success

**Details:**
- Added `FormattedDate` component import to `src/pages/index.astro`
- Added query for recent blog posts (latest 3 by pubDate)
- Created new "Latest from the Blog" section with:
  - Responsive 3-column grid (1 column on mobile)
  - Each post card shows: category badge, title, description excerpt, date, and reading time
  - Consistent card styling with hover effects
  - "View All Posts" button linking to /blog
- Section placed between "Why Readers Love" and "Newsletter" sections
- Build verification passed successfully
