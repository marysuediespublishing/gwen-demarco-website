# T004 - Create base layout and components

refs: D002, D004

## Attempt 1

**Approach:** Create base layout and navigation components adapted from dane-griggs-website with urban fantasy styling:
1. Create consts.ts with site title/description
2. Create HeaderLink.astro for navigation links with active state
3. Create Navigation.astro with desktop nav links
4. Create MobileMenu.astro with hamburger menu
5. Create Header.astro with navigation and urban fantasy styling
6. Create Footer.astro with author info and links
7. Update Layout.astro to include Header and Footer
8. Run build to verify

**Result:** Success

**Details:**
- Created `src/consts.ts` with SITE_TITLE and SITE_DESCRIPTION
- Created `src/components/HeaderLink.astro` with active state styling using ember-orange color
- Created `src/components/Navigation.astro` with urban fantasy nav styles (mystic hover effects)
- Created `src/components/MobileMenu.astro` with hamburger toggle and urban fantasy colors
- Created `src/components/Header.astro` with:
  - Gradient background (shadow-black to midnight-purple)
  - GD logo with mystic glow
  - Desktop navigation with newsletter CTA
  - Mobile menu toggle
  - Mystical glow overlay effect
- Created `src/components/Footer.astro` with:
  - Author info and tagline
  - Social links (Amazon, Goodreads, Email)
  - Quick links and Featured Series
  - Privacy/Cookie policy links
  - Urban fantasy color scheme
- Updated `src/layouts/Layout.astro` to:
  - Import and render Header and Footer
  - Apply dark theme body classes
  - Add skip-link for accessibility
  - Add focus management script
- Updated `src/pages/index.astro` with:
  - Hero section with fog effects
  - Featured series preview cards
  - Newsletter CTA section
  - All using urban fantasy theme

Build verification passed with no errors.
