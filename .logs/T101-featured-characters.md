# T101 - Add featured toggle for characters, display featured first

## Attempt 1

**Approach:**
1. Add `featured` field to the characters collection in `public/admin/config.yml`
2. Update `src/pages/characters.astro` to:
   - Include `featured` in the character stats
   - Sort featured characters to the top within each series group
   - Add a visual "Featured" badge with mystic-violet/ember-orange styling
   - Make featured cards slightly more prominent

**Result:** Success

**Details:**
- Added `featured` boolean field (default: false) to characters collection in CMS config (line 212)
- Updated characters.astro to track `isFeatured` status for each character
- Modified sorting logic to put featured characters first within each series group (and in Other Characters section)
- Added visual distinction for featured characters:
  - Orange "Featured" badge in top-left corner of card image
  - Ember-orange highlighted border with subtle glow ring
  - Both series group cards and "Other Characters" cards support featured styling
- Build passes with 85 pages generated
