# T092 - Display stacked book covers on series listing page

## Attempt 1

**Approach:** Replace the placeholder gradient/emoji book visualization in src/pages/series.astro (lines 194-201) with actual book cover images from each book's `cover` frontmatter field. Use plain `<img>` tags per project memory (CMS paths are `/images/filename.jpg` which Astro's image() can't resolve). Keep the gradient placeholder as fallback for books without cover images.

**Result:** Success

**Details:**
- Replaced the placeholder `<div>` containing emoji + gradient with a conditional: if `book.data.cover` exists, render an `<img>` tag with `object-cover` for proper aspect ratio; otherwise fall back to the original gradient placeholder.
- Build passes cleanly (63 pages).
- Verified in built HTML that actual cover image paths render (e.g., `/images/mudlark_ebook.jpg`, `/images/gutter-shrike-ebook-2.jpg`, etc.).
- Kingdom of Erishum (3 books), Sophie Feegle (4 of 5 shown + "+1" badge), and Witches of Kirra Cross (1 book) all render with actual covers.
- **Pre-existing bug noted:** Auras & Embers series title is `"Auras & Embers Series"` in the series content file, but books have `series: "Auras & Embers"` — the matching logic doesn't find these books. This is not introduced by T092 and should be a separate todo to fix.
