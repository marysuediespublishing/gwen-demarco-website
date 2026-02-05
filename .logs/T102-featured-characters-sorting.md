# T102 - Featured characters not sorting to top within series groups

## Attempt 1

**Approach:** Debug why featured characters (Sophie Feegle, Mac Volpes) aren't sorting before non-featured (Ace) within their series group.

Found the root cause: The characters collection schema in `src/content.config.ts` was missing the `featured` field. While T101 added the field to Decap CMS config and some character markdown files have `featured: true`, Astro's Zod schema validation strips unknown fields. So `character.data.featured` was always undefined.

Fix: Added `featured: z.boolean().default(false)` to the characters collection schema in `src/content.config.ts` line 95.

**Result:** Success

**Details:**
- Added `featured: z.boolean().default(false)` to characters collection schema
- Build completed successfully (85 pages)
- Verified in generated HTML that featured characters (Mac Volpes, Sophie Feegle) now appear before non-featured (Ace) in the Sophie Feegle series section
- Featured characters also have the "Featured" badge and ember-orange border styling
