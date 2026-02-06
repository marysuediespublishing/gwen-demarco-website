# T115 - Make book page Settings link to individual location pages

## Attempt 1

**Approach:** Update src/pages/books/[slug].astro to make settings/locations clickable links similar to species. The code already has the infrastructure (getLocationName function, slug data in book.data.setting), just need to:
1. Create settingsData array with both slug and name (mirroring speciesData pattern)
2. Update the Settings section template to use <a> tags instead of <span> tags
3. Link to /locations/{slug} with the same hover styling as species links

**Result:** Success

**Details:**
1. Changed `settingNames` (array of strings) to `settingsData` (array of {slug, name} objects) at line 114-118
2. Updated the Setting section template (lines 324-336) to:
   - Iterate over `settingsData` instead of `settingNames`
   - Use `<a>` tags with `href={/locations/${setting.slug}}` instead of `<span>` tags
   - Added `hover:bg-ember-orange/25 transition-colors` for hover effect matching species links
3. Build passes: 94 pages generated
4. Verified in dist/books/gideon-bean/index.html - "Gulf Breeze" now links to /locations/gulf-breeze
