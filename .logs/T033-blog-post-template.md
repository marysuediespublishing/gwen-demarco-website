# T033 - Create individual blog post template

## Attempt 1

**Approach:** Create the blog post template following the reference implementation from dane-griggs-website:
1. Create `src/pages/blog/[slug].astro` - Dynamic route for blog posts
2. Create `src/layouts/BlogPost.astro` - Blog post layout adapted for urban fantasy theme

Key features implemented:
- Hero section with title, category badge, date, and reading time
- Hero image display with clickable book link if bookSlug is present
- Prose content rendering with urban fantasy styled typography
- Previous/Next post navigation with card styling
- Tags display section
- "Back to Blog" CTA section
- Full urban fantasy styling (dark theme, purple gradients, mystic accents)

**Result:** Success

**Details:**
- Created `src/layouts/BlogPost.astro` with complete urban fantasy styling including prose styles for markdown content, navigation cards, and gradient overlays
- Created `src/pages/blog/[slug].astro` dynamic route that fetches posts by slug and calculates prev/next posts chronologically
- Build passes successfully with no errors
