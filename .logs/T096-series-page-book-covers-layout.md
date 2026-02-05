# T096 - Series Page Book Covers Layout

## Attempt 1

**Approach:** Revert the Book Cover Display section in src/pages/series.astro to use a large stacked/fanned layout with:
- Large container with aspect-[2/3] and max-w-sm
- Absolute positioned covers stacked on top of each other
- Slight rotation per book using transform rotate/translate
- Large cover images (w-full h-full object-cover)
- Cap at 3 books max using .slice(0, 3)
- Rotation math: (bookIndex - 1) * 3 degrees for centering the middle book
- Dark overlay on hover with book title and "View Book" link
- No "+N" badge

**Result:** Success

**Details:**
- Replaced the side-by-side small thumbnail layout (140px width) with large stacked/fanned layout
- Container uses `aspect-[2/3] max-w-sm` to fill the right column at full height
- Covers are absolute positioned and stacked on top of each other
- Applied rotation: `(bookIndex - 1) * 6` degrees and translation: `(bookIndex - 1) * 15px` for a fanned effect
- z-index decreases (3, 2, 1) so first book appears on top
- Large cover images use `w-full h-full object-cover` to fill container
- Capped at 3 books per series with `.slice(0, 3)`
- Dark overlay on hover shows book title, series order, and "View Book" link
- Wrapped each cover in an anchor tag for direct navigation to book page
- Added group hover classes for proper interaction
- Build passes with 63 pages
