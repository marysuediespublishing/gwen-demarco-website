# T109 - Delete Reading Order page and remove from navigation

## Attempt 1

**Approach:** Remove Reading Order from:
1. Desktop navigation (src/components/Navigation.astro lines 27-33)
2. Mobile navigation (src/components/MobileMenu.astro lines 48-54)
3. Homepage links (src/pages/index.astro - two links found at lines 305 and 608)
4. Delete the page file (src/pages/reading-order.astro)
5. Run build to verify no broken links

**Result:** Success

**Details:**
- Removed Reading Order link from desktop navigation (Navigation.astro)
- Removed Reading Order link from mobile navigation (MobileMenu.astro)
- Replaced two /reading-order links on homepage with /series links ("Explore Series" text)
- Deleted src/pages/reading-order.astro page file
- Verified no remaining references in src/ directory
- Build successful: 93 pages built, no errors
