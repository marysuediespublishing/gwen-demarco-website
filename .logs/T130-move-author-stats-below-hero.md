# T130 - Move author stats row below hero section on homepage

## Attempt 1

**Approach:**
1. Added a new "Author Stats Row" section directly after the hero section (after both the main hero and fallback hero)
2. Stats displayed: Books Published, Pages Read, Reader Ratings, Series
3. Styled with midnight-purple background, border-y with mystic-violet, alternating ember-orange and mystic-teal colors
4. Simplified the fallback hero: removed tagline, author bio text, and "Explore My Books" / "Meet the Author" buttons — now just shows "Gwen DeMarco" with "Paranormal Romance Author" subtitle
5. Removed the duplicate "Aggregate Stats Row" from the "Readers Love These Books" section (Books Published, Average Rating, Total Reviews, Series were duplicated)
6. No down arrow scroll indicator existed in the current version — nothing to remove
7. Page section order is now: Hero → Stats Row → Featured Books → Start Reading CTA → Featured Series → Why Readers Love → Testimonials → Readers Love Social Proof → Blog → Newsletter

**Result:** Success

**Details:**
- Build passes cleanly: 94 pages built, no errors
- Stats row uses CMS-managed values from siteConfig with sensible defaults
- Fallback hero reduced to a clean branded header for when no book with hero_image exists
