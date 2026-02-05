# T100 - Group characters by book series on Characters page

## Attempt 1

**Approach:**
1. Fetch series collection alongside characters and books
2. For each character, find their first book's series field
3. Create a mapping of series slug -> series data -> characters array
4. Sort series groups (featured first, then by start date) to match /series page order
5. Within each group, sort characters by name
6. Add an "Other Characters" section for characters with no series
7. Update the template to render grouped sections with series headings that link to /series/[slug]

**Result:** Success

**Details:**
- Modified src/pages/characters.astro to group characters by their associated series
- Fixed series matching logic to handle cases where:
  - Book has `series: "Auras & Embers"` but series title is `"Auras & Embers Series"`
  - Needed to normalize and compare slugs as well as check prefix matching
- Characters are now grouped under three series headings:
  - Auras & Embers Series (8 characters)
  - Kingdom of Erishum Trilogy (2 characters)
  - Sophie Feegle Series (12 characters)
- Each series heading links to the corresponding /series/[slug] page
- Includes series completion status badges (Complete/Ongoing)
- Shows character count per series
- Empty "Other Characters" section is hidden when no ungrouped characters exist
- Build passes with 85 pages generated
