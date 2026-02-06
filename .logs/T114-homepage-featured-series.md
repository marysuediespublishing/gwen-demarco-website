# T114 - Fix Homepage Featured Series section to only show series marked as featured

## Attempt 1

**Approach:** Replace the hardcoded series cards in the "Featured Series" section with a dynamic loop over the `featuredSeries` variable that already correctly filters series by `featured: true`.

The code already queries `featuredSeries` at line 38-39 but the section at lines 330-380 uses hardcoded cards. Updated to iterate over `featuredSeries` and render cards dynamically.

**Result:** Success

**Details:**
- The homepage already had `const featuredSeries = allSeries.filter(s => s.data.featured)` but wasn't using it
- Replaced the 3 hardcoded series cards (Sophie Feegle, Kingdom of Erishum, Auras & Embers) with a dynamic `.map()` over `featuredSeries`
- Section is now wrapped in `{featuredSeries.length > 0 && (...)}` to hide if no series are featured
- Dynamic rendering includes:
  - Alternating color schemes for visual variety
  - Dynamic icons based on series name keywords
  - Badge showing "Trilogy", "X Books", or "Ongoing" based on completionStatus
  - Truncated description to 2 sentences
  - Responsive grid that adjusts columns based on number of featured series
  - Last item spans 2 columns on small screens if odd count (for centering)
- Build successful with 94 pages generated
