# T093 - FIX: Auras & Embers series missing book cover images on /series page

## Attempt 1

**Approach:** The root cause is the book-to-series matching logic in `src/pages/series.astro` (line 48) and `src/pages/series/[slug].astro`. The normalization `toLowerCase().replace(/\s+/g, '-')` converts `"Auras & Embers"` to `"auras-&-embers"`, which doesn't match the series slug `"auras-and-embers"`. Need to also replace `&` with `and` (or strip non-alphanumeric chars) in the normalization step. Same fix needed in both series.astro and series/[slug].astro.

Cover images exist on disk:
- `/public/images/gideon-bean-ebook.jpg` (Gideon Bean)
- `/public/images/danegriggs-ebook-1-.jpg` (Spirit Marked)

Both books have correct `cover:` and `series: Auras & Embers` fields.

**Result:** Success

**Details:** The bug was in the series matching normalization logic. When a book has `series: Auras & Embers`, the normalization `toLowerCase().replace(/\s+/g, '-')` produced `"auras-&-embers"` which didn't match the series slug `"auras-and-embers"`. Fixed by adding `.replace(/&/g, 'and')` before the space-to-hyphen replacement in both `src/pages/series.astro` (line 48) and `src/pages/series/[slug].astro` (line 39). Build passes, both book covers (gideon-bean-ebook.jpg and danegriggs-ebook-1-.jpg) now appear in the built series listing page.
