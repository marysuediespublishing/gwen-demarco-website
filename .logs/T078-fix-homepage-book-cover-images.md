# T078 - FIX: Book cover images not displaying on homepage featured books section

## Attempt 1

**Approach:** The homepage (src/pages/index.astro) had two sections with hardcoded placeholder icons (📖) instead of actual book cover images:
1. Featured Books section (grid of 4 books) — used emoji placeholder instead of `book.data.cover`
2. Start Reading CTA section (Sophie and The Odd Ones) — used emoji placeholder instead of the book's cover

Applied the same fix pattern as T076: conditionally render `<img src={book.data.cover}>` when a cover exists, fall back to the placeholder when it doesn't. For the Start Reading CTA, added a `sophieBook` lookup variable to get Sophie and The Odd Ones from the books collection and use its cover.

**Result:** Success

**Details:**
- Featured Books section now renders `<img>` with `object-cover` when `book.data.cover` is set, with fallback to gradient+emoji placeholder
- Start Reading CTA section looks up `sophie-and-the-odd-ones` from the books collection and uses its `cover` field
- Both sections preserve fallback behavior for books without covers
- Build passes cleanly (63 pages, no errors)
