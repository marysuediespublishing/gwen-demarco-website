# T103 - Change "Featured" label to "Main Character" on characters page

## Attempt 1

**Approach:** Find all instances of "Featured" badge text in src/pages/characters.astro and replace with "Main Character". The underlying CMS field stays as `featured: true`.

**Result:** Success

**Details:** Changed both instances of "Featured" badge text to "Main Character" in src/pages/characters.astro (lines 221 and 329). Also updated the HTML comment from "Featured Badge" to "Main Character Badge" for consistency. Build passes successfully with 86 pages generated.
