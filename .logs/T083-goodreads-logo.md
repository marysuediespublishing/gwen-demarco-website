# T083 - FIX: Replace incorrect Goodreads logo in "Readers Love These Books" section

## Attempt 1

**Approach:** Replace the current inline SVG Goodreads logo (which uses a complex "G" lettermark path) with the correct Goodreads brand logo: a tan/beige circle with a brown lowercase "g" in the center. Created an SVG file at `public/images/goodreads-logo.svg` and updated both the homepage and footer to reference it.

**Result:** Success

**Details:**
- Created `public/images/goodreads-logo.svg` with tan circle (#E8D5B7) and brown lowercase "g" (#553B08) matching the official Goodreads brand
- Replaced the incorrect inline SVG in `src/pages/index.astro` (Readers Love These Books section, Goodreads stats card)
- Also replaced the same incorrect SVG in `src/components/Footer.astro` (social links)
- Both locations now use `<img src="/images/goodreads-logo.svg">` for consistency
- Build passes cleanly with 63 pages, no errors
- Logo file confirmed present in dist/images/
