# T136 - Replace Featured Text with first 2 sentences of book description on homepage hero

## Attempt 1

**Approach:** Update the hero section teaser text (line 139 of index.astro) to extract the first 2 sentences from the book's `description` field using a proper sentence-matching regex, instead of using `featured_text`. The `featured_text` field remains in use for the orange badge on line 223. Added a `getFirstTwoSentences()` helper function that uses `description.match(/[^.!?]*[.!?]/g)?.slice(0, 2).join(' ').trim()`.

**Result:** Success

**Details:**
- Added `getFirstTwoSentences()` helper in frontmatter that handles `.`, `!`, `?` sentence endings
- Replaced hero teaser from `featured_text || description.split(...)` to `getFirstTwoSentences(description)`
- Wrapped in conditional so text area hides if description is empty
- `featured_text` still used in the orange badge (line ~223)
- Build passes: 94 pages, no errors
