# T111 - Replace artwork count text with click hint

## Attempt 1

**Approach:**
1. In `src/pages/artwork.astro`, replace the artwork count text under each series heading with "Click on any thumbnail to see full image"
2. Apply the same change to the "Other Artwork" section
3. Remove the global "Hint Note" section (lines 154-164) since each section will now have its own hint
4. Keep the text styling consistent with the rest of the page (text-fog-gray, text-lg)

**Result:** Success

**Details:**
- Removed the global "Hint Note" section below the hero (lines 154-164)
- Replaced artwork count text in series groups with "Click on any thumbnail to see full image"
- Applied the same change to the "Other Artwork" section
- Build passes with 93 pages generated
