# T125 - Add Languages Available field to Book admin with URL per language

## Attempt 1

**Approach:** Add a languages field to the books collection using a list widget with nested fields (language dropdown + URL input). Update both Decap CMS config and Astro content schema.

1. In public/admin/config.yml - add languages field to books collection with list widget containing:
   - language: select widget with alphabetical language options
   - url: string widget for purchase URL
2. In src/content.config.ts - add languages field to books schema as an array of objects with language and url properties

**Result:** Success

**Details:**
- Added languages field to public/admin/config.yml with list widget containing:
  - language: select dropdown with 30 language options in alphabetical order
  - url: string input with hint for purchase link
- Added languages field to src/content.config.ts books schema as optional array of objects
- Build passes with 94 pages generated
- In /admin, the Languages field will appear on book entries allowing multiple language/URL pairs to be added
