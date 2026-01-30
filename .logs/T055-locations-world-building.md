# T055 - Add locations/world-building page

## Attempt 1

**Approach:**
1. Create locations content collection entries for key settings from Gwen DeMarco's books:
   - San Francisco Morgue (Sophie Feegle series)
   - San Francisco (urban setting)
   - Kingdom of Erishum (fantasy realm from trilogy)
   - The Dying Wilds (wilderness from Kingdom trilogy)
   - Auras & Embers World (supernatural underground setting)
2. Create `/locations` listing page following the same pattern as `/species` page
3. Create `/locations/[slug].astro` individual page template following the species template pattern
4. The CMS already has the locations collection configured in config.yml
5. Update book entries to reference the correct location slugs (the books already have a `setting` field for locations)

**Result:** Success

**Details:**
- Created 5 location content entries in `src/content/locations/`:
  - `san-francisco-morgue.md` - The Sophie Feegle series main setting
  - `san-francisco.md` - The urban backdrop for urban fantasy series
  - `kingdom-of-erishum.md` - The fantasy kingdom setting
  - `the-dying-wilds.md` - The dangerous wilderness frontier
  - `auras-and-embers-world.md` - The supernatural underground setting
- Created `/locations` listing page at `src/pages/locations.astro` with:
  - Hero section with gradient text
  - Location cards grid showing emoji icons, descriptions, and book counts
  - CTA section linking to series, books, and species pages
- Created individual location page template at `src/pages/locations/[slug].astro` with:
  - Hero section with location name and environment type badge
  - Description section with image placeholder
  - Related books list (books set in this location)
  - MDX body content rendering
  - Navigation section with links to explore more
- Updated all book content files to use correct location slugs:
  - Sophie Feegle books: `san-francisco`, `san-francisco-morgue`
  - Kingdom of Erishum books: `kingdom-of-erishum`
  - The Dying Wilds: Added `the-dying-wilds` location
  - Auras & Embers books: `auras-and-embers-world`, `san-francisco`
- Build completed successfully
