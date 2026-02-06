# T142 - FIX: Sort Main Appearances by book publication date on character pages

## Attempt 1

**Approach:** Add `.sort()` calls on `mainBooks` and `cameoBooks` arrays in `src/pages/characters/[slug].astro` to sort by `pubDate` (oldest to newest). The books schema uses `pubDate` as a `z.coerce.date()` field.

**Result:** Success

**Details:** Added `.sort((a, b) => new Date(a.data.pubDate).getTime() - new Date(b.data.pubDate).getTime())` to both `mainBooks` and `cameoBooks` arrays. Verified on Sophie Feegle's character page that books appear in correct chronological order. Build passes with 94 pages.
