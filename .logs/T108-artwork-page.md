# T108 - Create Artwork page with series grouping, hover preview, and overflow pages

## Attempt 1

**Approach:**
1. Create src/pages/artwork.astro - main artwork gallery page
2. Add "Artwork" link to Navigation.astro and MobileMenu.astro between "Locations" and "Blog"
3. Implement series grouping by resolving artwork.book -> books.series -> series
4. Create hover lightbox preview for full images
5. Add thumbnail limit (8 per series) with "More..." button linking to per-series pages
6. Create src/pages/artwork/[...slug].astro for per-series overflow pages
7. Use focal_point data for thumbnail object-position
8. Handle artwork without book assignment in "Other Artwork" section

**Result:** Success

**Details:**
- Created `src/pages/artwork.astro` - main gallery page with:
  - Hero section with gradient background
  - Artwork grouped by book series (resolves artwork.book -> books.series -> series)
  - Smaller thumbnails (6 per row on desktop) with focal point cropping
  - Hover overlay showing title and "Featured" badge
  - Lightbox modal for viewing full images (click to open, ESC/click-outside/X to close)
  - Thumbnail limit of 8 per series with "More..." button linking to per-series page
  - "Other Artwork" section for artwork not assigned to any book
  - Featured artwork sorted first within each group

- Added "Artwork" link to navigation between "Locations" and "Blog":
  - Updated `src/components/Navigation.astro`
  - Updated `src/components/MobileMenu.astro`

- Created `src/pages/artwork/[...slug].astro` - per-series overflow pages with:
  - Breadcrumb navigation back to /artwork
  - All artwork for the specified series
  - Same lightbox functionality as main page
  - CTA to view series and return to gallery

- Build produces 94 pages (up from 63), including:
  - /artwork/
  - /artwork/kingdom-of-erishum/
  - /artwork/auras-and-embers/
  - /artwork/sophie-feegle/
