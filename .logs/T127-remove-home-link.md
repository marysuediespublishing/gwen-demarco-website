# T127 - Remove Home link from navigation, make site logo/name link to homepage

## Attempt 1

**Approach:** Remove "Home" link from desktop nav (Navigation.astro), mobile menu (MobileMenu.astro), and footer Quick Links (Footer.astro). The site logo/name already links to "/" in Header.astro (lines 12-19) - confirmed, no changes needed there.

**Result:** Success

**Details:**
- Removed Home HeaderLink from Navigation.astro (desktop nav)
- Removed Home HeaderLink from MobileMenu.astro (mobile hamburger menu)
- Removed Home link from Footer.astro Quick Links section
- Kept breadcrumb "Home" links on book/series detail pages (those are breadcrumb nav, not main nav)
- Logo "GD" badge + "Gwen DeMarco" text already wrapped in `<a href="/">` - no change needed
- Build passes: 94 pages, no errors
