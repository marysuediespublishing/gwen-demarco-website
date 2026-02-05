# T099: Create Characters page matching Species page layout, add to navigation

## Attempt 1

**Approach:**
1. Create `src/pages/characters.astro` based on the existing species.astro template
2. Create `src/pages/characters/[slug].astro` for individual character detail pages based on species/[slug].astro
3. Add "Characters" link to Navigation.astro (between Species and Locations)
4. Add "Characters" link to MobileMenu.astro (same position)
5. Run build to verify

Key adaptations from species to characters:
- Query 'characters' collection instead of 'species'
- Show books and cameos associations instead of species-series associations
- Display character species as a badge/link
- Adjust copy/descriptions for character context
- Use character emoji fallback: 👤

**Result:** Success

**Details:**
- Created `src/pages/characters.astro` listing page with:
  - Hero section with gradient background
  - Grid of character cards with images, names, descriptions
  - Species badges on cards
  - Book count and cameo count stats
  - Hover effects consistent with species page
  - CTA section at bottom

- Created `src/pages/characters/[slug].astro` for individual character detail pages with:
  - Character profile hero section
  - Species link badge
  - Character image or placeholder
  - Main book appearances list
  - Cameo appearances list
  - Species info section
  - Navigation to explore more characters

- Added "Characters" link to Navigation.astro (between Species and Locations)
- Added "Characters" link to MobileMenu.astro (same position)

- Build successful: 85 pages generated including 22 individual character pages and 1 characters listing page
