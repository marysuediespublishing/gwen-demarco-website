# T119 - Add Characters section to individual species pages

## Attempt 1

**Approach:** Add a "Characters" section to the species detail page that:
1. Fetches the characters collection
2. Filters characters whose `species` field matches the current species id
3. Sorts with featured characters first, then alphabetically by name
4. Displays character names as links to /characters/[slug]
5. Hides the section if no characters match
6. Styles consistently with the existing Books section

**Result:** Success

**Details:**
- Added `allCharacters` collection fetch to the page
- Implemented `speciesCharacters` filter that handles both string and array species fields
- Sorts featured characters first, then alphabetically by name
- Added Characters section HTML below Books section with:
  - Person icon (mystic-teal color to differentiate from Books icon)
  - Character count in header
  - Scrollable list with max-h-48
  - Links to /characters/[slug] with hover effects
- Verified build passes (94 pages built)
- Tested on /species/ogres (1 character: Burg)
- Tested on /species/fae (5 characters: Sophie Feegle featured first, then 4 others alphabetically)
- Tested on /species/vampires (section hidden when no characters)
