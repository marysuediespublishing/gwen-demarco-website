# T116 - Add Characters section to individual book pages under Book Details

## Attempt 1

**Approach:**
1. Fetch the characters collection in the book page template
2. Filter characters whose `books` array includes the current book slug
3. Sort with featured characters first, then by name
4. Add a "Characters" section above the "Species" section in the Book Details card
5. Style links consistently with how Species links are displayed (as badges)
6. Add "Main Character" badge for featured characters

**Result:** Success

**Details:**
- Added `allCharacters` collection fetch and filtering logic to find characters whose `books` array includes the current book slug
- Sorted characters with featured first, then alphabetically by name
- Added "Characters" section above "Species" in the Book Details card at line 311-325
- Each character name is a clickable link to `/characters/{slug}`
- Featured characters show a star (★) indicator with "Main Character" tooltip
- Styled consistently with Species badges (badge-primary with hover effect)
- Build passes with 94 pages generated
