# T076 - FIX: Book cover images not displaying on /books listing page

## Attempt 1

**Approach:** The `/books` listing page (src/pages/books.astro) hardcoded placeholder 📖 icons in all three sections (Featured & Fan Favorites, Latest Releases, Complete Book Collection) instead of using `book.data.cover` from frontmatter. The individual book page ([slug].astro) already correctly uses `book.data.cover` with `<img>` tags and fallbacks. Updated all three sections to conditionally render `<img src={book.data.cover}>` when a cover exists, falling back to the placeholder icon when it doesn't.

**Result:** Success

**Details:**
- All three card sections in books.astro now check `book.data.cover` and render an `<img>` tag with the cover path (e.g., `/images/gideon-bean-ebook.jpg`)
- Fallback placeholder (gradient + 📖 emoji) preserved for books without covers
- Images use `object-cover` with `aspect-[2/3]` to maintain consistent card proportions
- `loading="lazy"` added for performance
- Build passes cleanly (63 pages, no errors)
