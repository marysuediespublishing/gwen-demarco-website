# T104 - Create Artwork collection in Decap CMS admin

## Attempt 1

**Approach:**
1. Add artwork collection to public/admin/config.yml with fields: title, image, description, book (relation), featured
2. Add artwork collection schema to src/content.config.ts matching the CMS config
3. Create src/content/artwork/ folder for storing entries

**Result:** Success

**Details:**
- Added artwork collection to public/admin/config.yml (lines 304-322) with fields:
  - title (string, required)
  - image (image, required)
  - description (text, optional)
  - book (relation to books collection, optional)
  - featured (boolean, default false)
  - body (markdown, optional)
- Added artwork collection schema to src/content.config.ts matching the CMS config
- Created src/content/artwork/ directory for storing entries
- Build successful: 90 pages in 2.94s
- Empty "pages" collection warning is expected (per MEMORY.md)
