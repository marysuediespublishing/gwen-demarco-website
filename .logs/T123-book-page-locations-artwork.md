# T123 - ENHANCE: Add Locations section and Artwork sample to individual book pages

## Attempt 1

**Approach:** Add two new sections to the individual book page template:

1. **Locations section in Book Details card:**
   - Similar to how Settings are already displayed but link to location pages
   - Currently the book page already has a "Setting" section with locations displayed as badges
   - The existing code already links settings to /locations/ pages (lines 355-369)
   - This part may already be complete - need to verify

2. **Artwork sample section below "More from this Series":**
   - Fetch artwork collection, filter for artwork matching this book
   - Show up to 5 thumbnails with focal point positioning
   - Include click-to-view lightbox behavior matching /artwork page
   - Add "View All Artwork" link to the series artwork page
   - Hide section if no artwork exists for this book

Implementation steps:
1. Add artwork collection fetch and filter logic
2. Add artwork section HTML after "Similar Books" section
3. Add lightbox modal and JavaScript (copy from series page)
4. Test and verify build passes

**Result:** Success

**Details:**
1. **Locations section:** Already existed in the book page template. The "Setting" section (lines 355-369) displays locations as badges linking to `/locations/[slug]` pages. No changes needed here.

2. **Artwork sample section:** Added successfully with:
   - Artwork collection fetch and filtering by book ID
   - Focal point parsing helper function (same pattern as series page)
   - Up to 5 thumbnails displayed with focal point positioning
   - Click-to-view lightbox modal with close button, backdrop click, and ESC key support
   - "View All [Series Name] Artwork" link to series artwork page
   - Section hidden if no artwork exists for the book

3. **Build verification:** 94 pages built successfully with no errors
