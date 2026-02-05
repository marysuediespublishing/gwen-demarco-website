# T094 - FIX: Sophie Feegle series cover image quality issue on /series page

## Attempt 1

**Approach:** Investigate image quality and naming issues for Sophie Feegle covers on /series page.

Investigation findings:
- All 6 Sophie Feegle book images checked (ebook.jpg, portents-and-oddities-ebook-front.jpg, danegriggs-ebook.jpg, front.jpg, danegriggs-front.jpg, boxset.jpg)
- All images are high resolution (~1575x2400, 300 DPI) — no actual quality/resolution differences
- All images are correct Gwen DeMarco book covers (verified visually)
- The stacking code shows first 4 books (slice(0,4)) sorted by seriesOrder, with Book 1 on top (highest zIndex)
- The "top image" is `ebook.jpg` (Sophie and The Odd Ones, Book 1)

Issues found:
1. `ebook.jpg` — generic filename, should be named after the book
2. `front.jpg` — generic filename (Against All Odds, Book 4)
3. `danegriggs-ebook.jpg` — wrong author prefix! (Odd Times, Book 3)
4. `danegriggs-front.jpg` — wrong author prefix! (Odds and Ends, Book 5)

Plan: Rename all poorly-named files to consistent convention (book-slug-ebook.jpg) and update frontmatter references.

**Result:** Success

**Details:**
- All images are high-res (~1575x2400) and correct covers — no actual quality issue found
- Renamed 4 poorly-named image files to consistent book-slug convention:
  - `ebook.jpg` → `sophie-and-the-odd-ones-ebook.jpg`
  - `danegriggs-ebook.jpg` → `odd-times-for-sophie-feegle-ebook.jpg`
  - `front.jpg` → `against-all-odds-ebook.jpg`
  - `danegriggs-front.jpg` → `odds-and-ends-ebook.jpg`
- Updated frontmatter `cover` field in 4 book markdown files to match new filenames
- Build passes cleanly (63 pages, no errors)
- Built HTML references new filenames correctly, no old filenames remain
