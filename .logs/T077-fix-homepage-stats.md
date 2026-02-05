# T077 - Fix homepage stats to reflect accurate numbers

## Attempt 1

**Approach:** Update stats in three locations:
1. `src/content/settings/site-config.md` - source of truth for stats
2. `src/pages/index.astro` - fallback values in hero stats and Readers Love section, plus label change
3. `src/pages/about.astro` - fallback values for stats display

Changes:
- pagesRead: "1M+" → "32M+"
- readerRatings: "500+" → "13K+"
- seriesComplete: 2 → 4
- Label: "Series Complete" → "Series" (index.astro hero and Readers Love section)

**Result:** Success

**Details:** Updated stats in three files:
- `src/content/settings/site-config.md`: pagesRead "1M+" → "32M+", readerRatings "500+" → "13K+", seriesComplete 2 → 4
- `src/pages/index.astro`: Updated fallback values + changed "Series Complete"/"Complete Series" labels to "Series"
- `src/pages/about.astro`: Updated fallback values for pagesRead and readerRatings

Build passes with 63 pages, no errors.
