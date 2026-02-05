# T081 - FIX: Update social links and stats in "Readers Love These Books" homepage section

## Attempt 1

**Approach:** Update three values in `src/content/settings/site-config.md`:
1. Goodreads link: change to `https://www.goodreads.com/gwen_demarco`
2. Amazon link: change to `https://www.amazon.com/stores/Gwen-DeMarco/author/B08CHLX2TB`
3. Total reviews stat: change from `"500+"` to `"13K+"`

All three values are stored in site-config.md frontmatter and used by `src/pages/index.astro` via siteConfig.socialLinks and siteConfig.stats.

**Result:** Success

**Details:** Updated all three values in `src/content/settings/site-config.md`. The homepage reads these from the settings collection at build time. Build passes cleanly with 63 pages.
