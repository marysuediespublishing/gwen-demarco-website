# T046 - Test all pages render correctly

## Attempt 1

**Approach:** Run `npm run build` to verify all pages render correctly. Fix any TypeScript errors, build errors, or missing content issues that arise.

**Result:** Success

**Details:**
1. Initial build succeeded but dynamic routes (books, series, blog, species) were returning 404 errors.
2. Root cause: The content configuration file was using the legacy Astro content collection pattern (`type: 'content'`) at `src/content/config.ts` instead of the Astro 5 glob loader pattern at `src/content.config.ts`.
3. Fixed by:
   - Creating new `src/content.config.ts` using the glob loader pattern (matching dane-griggs-website reference)
   - Removing old `src/content/config.ts`
   - Fixing `src/pages/species/[slug].astro` to use the new `render()` function from `astro:content` instead of `species.render()`
4. All routes verified working:
   - All static routes return 200 (/, /about, /books, /series, /blog, /species, /contact, /search, /privacy-policy, /cookie-policy, /admin)
   - All dynamic book routes return 200
   - All dynamic series routes return 200
   - All dynamic blog routes return 200
   - All dynamic species routes return 200
   - 404 handling works correctly (redirects to /404 with proper 404 status)
