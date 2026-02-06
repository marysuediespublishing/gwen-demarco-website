# T128 - Add hero image field to Book admin

## Attempt 1

**Approach:**
1. Add `hero_image` field to the books collection in `public/admin/config.yml` (image widget, optional, with hint text)
2. Add `hero_image` to the books schema in `src/content.config.ts` as `z.string().optional()`
3. Run build to verify

**Result:** Success

**Details:**
- Added `hero_image` image widget field to books collection in CMS config, placed after `languages` field and before `body`
- Field is optional with hint: "Wide banner image for use as homepage hero background when this book is featured"
- Added `hero_image: z.string().optional()` to books schema in content.config.ts
- Build passes cleanly (94 pages, no errors)
