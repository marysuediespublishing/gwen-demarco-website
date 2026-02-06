# T141 - FIX: Remove Latest Releases and move Explore My Series on Books page

## Attempt 1

**Approach:**
1. Remove the "Latest Releases" section (lines 171-231) from books.astro
2. Move the "Explore My Series" / Series CTA section to appear after "Complete Book Collection"
3. Remove unused `latestReleases` and `sixMonthsAgo` variables from frontmatter

**Result:** Success

**Details:**
- Removed the entire "Latest Releases" section and its conditional rendering
- Removed `sixMonthsAgo` and `latestReleases` variables from the frontmatter (no longer referenced)
- Moved "Explore My Series" section from before "Complete Book Collection" to after it
- Final page section order: Hero > Featured Books > Complete Book Collection > Explore My Series > Newsletter CTA
- Build passes successfully (94 pages)
