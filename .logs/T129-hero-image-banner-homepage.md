# T129 - ENHANCE: Add hero image/banner to homepage featuring latest book

## Attempt 1

**Approach:** Redesign the homepage hero section to feature the latest book (Asphalt Coven) with its hero_image as background. Create a full-width hero with:
- Background: hero_image from latest book with dark gradient overlay for text readability
- Left side: Book title, teaser text, CTA buttons (Buy Now, Learn More)
- Right side: Book cover image with 3D tilt/shadow effect
- Dynamic: query books collection, sort by pubDate desc, find first with hero_image
- Fallback: use current hero design if no book has hero_image
- Responsive: side-by-side on desktop, stacked on mobile

**Result:** Success

**Details:**
- Redesigned homepage hero section in `src/pages/index.astro`
- Dynamically queries books collection for latest published book with `hero_image` set
- Falls back to latest published book without hero_image, then to generic author-focused hero
- Currently features "Asphalt Coven" (pubDate 2025-11-28) with `/images/asphalt-coven-hero-image.jpeg` as background
- Layout: full-width background image with dark gradient overlays for readability
  - Left side: series badge, book title, author, teaser text, star rating, Buy Now + Learn More CTAs, KU badge
  - Right side: book cover with subtle 3D tilt effect (rotateY -5deg), hover scale, shine effect, "New Release" badge
- Responsive: stacked on mobile (cover on top, text below), side-by-side on desktop
- Buy Now links to Amazon URL, Learn More links to book detail page
- Fallback hero (no books at all) maintains simple centered author branding
- Build passes cleanly (94 pages)
