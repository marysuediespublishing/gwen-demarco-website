# T079 - FIX: Testimonials on homepage showing book slug instead of book title

## Attempt 1

**Approach:**
- The `bookTitle` field in testimonials stores the book slug (e.g., `gideon-bean`) since T070 changed it to a relation widget with `value_field: "{{slug}}"`
- Homepage `index.astro` displays `testimonial.data.bookTitle` directly, showing the slug instead of a readable title
- Book page `[slug].astro` filters testimonials by comparing `t.data.bookTitle === book.data.title`, which will never match since bookTitle is a slug, not a title
- Fix:
  1. On homepage, created a `bookTitleMap` from `allBooks` and a `getBookTitle()` helper to resolve slugs to readable titles
  2. On book page, changed filter from `t.data.bookTitle === book.data.title` to `t.data.bookTitle === book.id` (comparing slug to slug)

**Result:** Success

**Details:**
- Added `bookTitleMap` and `getBookTitle()` helper in `src/pages/index.astro` frontmatter
- Updated testimonial attribution display to use `getBookTitle(testimonial.data.bookTitle)` instead of raw `testimonial.data.bookTitle`
- Fixed `src/pages/books/[slug].astro` line 94 to compare `bookTitle` against `book.id` (the slug) instead of `book.data.title`
- Build passes: 63 pages, no new warnings
