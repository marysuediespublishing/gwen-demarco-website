# T084 - FIX: Replace incorrect Amazon logo in "Readers Love These Books" section

## Attempt 1

**Approach:** Create a proper Amazon logo SVG (white "amazon" text with orange arrow smile) for dark backgrounds. Replace the inline SVG in index.astro with an `<img>` tag referencing the new file, matching the pattern used for Goodreads in T083.

**Result:** Success

**Details:**
- Created `/public/images/amazon-logo.svg` with white "amazon" text and orange curved arrow smile (matching Amazon's brand mark for dark backgrounds)
- Replaced the inline SVG (which was just the Amazon "a" marketplace icon) in the Amazon Stats Card on the homepage
- Used `<img>` tag pattern matching the Goodreads logo approach from T083
- Container uses `bg-shadow-black` for the dark background behind the logo
- Build passes with 63 pages, no errors
