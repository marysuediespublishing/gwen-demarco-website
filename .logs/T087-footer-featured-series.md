# T087 - FIX: Footer featured series list should dynamically pull from CMS

## Attempt 1

**Approach:**
- Footer.astro had hardcoded series links (Sophie Feegle, Kingdom of Erishum, Auras & Embers)
- Series content files already have `featured: true/false` frontmatter field
- Content schema already has `featured: z.boolean().default(false)` on series collection
- CMS config already has the `featured` boolean widget for series
- Added `getCollection('series')` import, filtered by `featured === true`, sorted alphabetically by title
- Replaced hardcoded `<li>` elements with dynamic `.map()` rendering using `s.id` for URL and `s.data.title` for display

**Result:** Success

**Details:**
- Build passes cleanly (63 pages, no errors)
- Footer now dynamically shows 3 featured series: Auras & Embers, Sophie Feegle, Witches of Kirra Cross
- Kingdom of Erishum correctly excluded (featured: false)
- Toggling featured on/off in CMS will automatically update the footer
