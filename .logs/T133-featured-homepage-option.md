# T133 - ENHANCE: Add "Featured on Homepage" option with text field to Book admin

## Attempt 1

**Approach:**
1. Add `featured_homepage` (boolean) and `featured_text` (text) fields to `public/admin/config.yml` books collection, directly below the existing `featured` field
2. Add both fields to `src/content.config.ts` books schema
3. Update `src/pages/index.astro` hero section to prioritize books with `featured_homepage: true` and display `featured_text` instead of truncated description

**Result:** Success

**Details:**
- Added `featured_homepage` (boolean, default false) and `featured_text` (text, optional) to CMS config with hints
- Added `featured_homepage: z.boolean().default(false)` and `featured_text: z.string().optional()` to Astro content schema
- Updated homepage hero book selection: `featured_homepage: true` > `hero_image` set > latest published
- Updated teaser text to use `featured_text` when available, falling back to first 2 sentences of description
- Build passes cleanly with 94 pages, no errors
