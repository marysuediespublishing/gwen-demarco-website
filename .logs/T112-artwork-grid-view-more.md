# T112 - Update artwork page thumbnail grid and "View More" button

## Attempt 1

**Approach:** Update src/pages/artwork.astro with the following changes:
1. Change `THUMBNAIL_LIMIT` from 8 to 18
2. Update grid to 6 columns on desktop (already has `xl:grid-cols-6` via responsive classes)
3. Update the "More..." button text to "View All ## Artworks →" format
4. Remove the "+# more" secondary text from the button
5. The arrow is already present in the button via SVG

Looking at the current code:
- Line 126: `const THUMBNAIL_LIMIT = 8;` → change to 18
- Lines 209-221: "More" button has both "View All {count} Artworks" and "+{remainingCount} more" text
  - Need to remove the "+{remainingCount} more" span
  - Keep the arrow SVG

**Result:** Success

**Details:**
- Changed THUMBNAIL_LIMIT from 8 to 18
- Simplified the "More" button to show "View All {count} Artworks →" with arrow character
- Removed the redundant SVG arrow and "+remainingCount more" span
- Grid already had responsive classes up to xl:grid-cols-6 for 6 columns on desktop
- Build passed with 93 pages generated
