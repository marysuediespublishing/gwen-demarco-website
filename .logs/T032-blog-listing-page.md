# T032 - Create Blog Listing Page

refs: D004

## Attempt 1

**Approach:** Create the blog listing page by adapting the dane-griggs-website reference implementation with the urban fantasy theme. Will create:
1. FormattedDate component (needed for date display)
2. src/pages/blog/index.astro with urban fantasy styling

Key adaptations:
- Replace cosmic/starfield theme with urban fantasy fog/mystic theme
- Use existing Tailwind classes from gwen-demarco-website (shadow-black, midnight-purple, mystic-violet, ember-orange, etc.)
- Apply card styles that match other pages
- Sort posts by date descending
- Featured post (first) spans full width on desktop

**Result:** Success

**Details:**
- Created `src/components/FormattedDate.astro` - date formatting component with validation
- Created `src/pages/blog/index.astro` with:
  - Urban fantasy themed hero section with fog effects
  - Category filtering with interactive buttons
  - Blog post cards with gradient overlays, category badges, tags
  - First post spans full width on desktop (featured)
  - Reading time display
  - Newsletter CTA section
  - Responsive design matching existing pages
- Build passes successfully
