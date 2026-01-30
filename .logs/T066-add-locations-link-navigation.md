# T066 - Add Locations Link to Main Navigation

## Attempt 1

**Approach:** Add "Locations" link to both Navigation.astro (desktop) and MobileMenu.astro (mobile) after "Species" in the nav order.

**Result:** Success

**Details:**

1. **Navigation.astro (desktop)** - Added HeaderLink for /locations after Species:
   ```astro
   <HeaderLink
     href="/locations"
     class="nav-link"
     data-testid="locations-link"
   >
     Locations
   </HeaderLink>
   ```

2. **MobileMenu.astro (mobile)** - Added HeaderLink for /locations after Species:
   ```astro
   <HeaderLink
     href="/locations"
     class="block px-4 py-3 text-moon-silver hover:text-ember-orange hover:bg-midnight-purple/50 rounded-md transition-colors min-h-[44px] flex items-center"
     data-testid="mobile-locations-link"
   >
     Locations
   </HeaderLink>
   ```

3. **Verified /locations page exists** at src/pages/locations.astro with dynamic [slug].astro for individual location pages

4. **Build verification passed** - `npm run build` completes successfully

Nav order is now: Home | Books | Series | Reading Order | Species | **Locations** | Blog | About | Contact
