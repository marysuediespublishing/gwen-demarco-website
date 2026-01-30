# T044 - Create SpeciesCard Component

refs: D002, D007

## Attempt 1

**Approach:** Create a SpeciesCard component following the pattern of existing BookCard.tsx and SeriesCard.tsx. The component will:
- Accept species data from the 'species' collection
- Support 'standard', 'compact', and 'featured' variants
- Display species emoji, name, description
- Show series tags where species appears
- Include urban fantasy styling with hover glow effects
- Link to individual species page on click

Key features:
- Mystical background pattern with fog gradient
- Species-specific emoji icons
- Hover overlay with "Learn More" button
- Species badge coloring matching existing pattern
- Responsive design for all variants

**Result:** Success

**Details:** Created SpeciesCard.tsx component at src/components/ui/SpeciesCard.tsx with:
- Three variants: standard, compact, featured
- Species-specific emoji icons (wolf for shifters, vampire for vampires, fairy for fae, etc.)
- Mystical background pattern with fog gradient
- Species badge with color coding matching existing pattern
- Series tags showing where species appears
- Hover overlay with "Learn More" button
- Full urban fantasy styling with glow effects
- TypeScript types using Astro's CollectionEntry
- Build verification passed
