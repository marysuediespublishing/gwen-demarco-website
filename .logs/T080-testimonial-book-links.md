# T080 - Make testimonial book titles clickable links to book pages

## Attempt 1

**Approach:** On the homepage testimonials section, wrap the book title `<span>` in an `<a>` tag linking to `/books/{bookTitle}` (where bookTitle stores the slug from the relation widget). Applied Mystic Teal color with hover transition to Ember Orange, plus an underline decoration. Checked the book detail page testimonials — they don't display book titles (since you're already on that book's page), so no change needed there.

**Result:** Success

**Details:**
- Changed `<span>` to `<a>` with href to `/books/${testimonial.data.bookTitle}`
- Added hover color transition (mystic-teal → ember-orange)
- Added subtle underline decoration that transitions on hover
- Build passes cleanly (63 pages)
