# T068 - Fix Decap CMS Admin Not Working

## Context
The Decap CMS admin page at /admin is not functioning during local development when running `npm run dev` + `npx decap-server`.

## Attempt 1

**Approach:** Investigate the admin/index.html for JavaScript errors. The preview template registration code uses `CMS.registerPreviewTemplate()` with a function that returns a template literal string, but Decap CMS expects a React component. This pattern works in some versions but may cause issues. Will simplify by removing custom preview templates to isolate the issue, and ensure proper CMS initialization.

**Result:** Incomplete - session ended before completing

---

## Attempt 2

**Approach:** Identified multiple issues:
1. There were TWO admin pages: `public/admin/index.html` AND `src/pages/admin/index.astro`. The Astro page was taking precedence and getting Vite/dev toolbar scripts injected before Decap CMS could load.
2. The Decap CMS version was outdated (`^3.0.0` vs `^3.8.2` in reference implementation).
3. In Astro SSR mode, `/admin/` doesn't auto-resolve to `/admin/index.html`.

**Changes Made:**
1. Deleted the old `src/pages/admin/index.astro` that was serving its own HTML
2. Updated `public/admin/index.html`:
   - Changed Decap CMS version from `^3.0.0` to `^3.8.2`
   - Added custom preview templates for books, series, and blog (matching reference implementation with urban fantasy styling)
3. Created new `src/pages/admin/index.astro` that simply redirects to `/admin/index.html`

**Result:** Success

**Verification:**
- `/admin/` now correctly redirects (302) to `/admin/index.html`
- The static admin HTML loads without Vite/Astro dev toolbar interference
- `config.yml` is accessible at `/admin/config.yml`
- `npx decap-server` runs on port 8081
- `npm run build` completes successfully
