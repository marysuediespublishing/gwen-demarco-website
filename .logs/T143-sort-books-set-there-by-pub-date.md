# T143 - FIX: Sort "Books Set There" by publication date on location pages

## Attempt 1

**Approach:** Change the sort on `relatedBooks` in `src/pages/locations/[slug].astro` line 24 from alphabetical (`title.localeCompare`) to chronological by `pubDate` (oldest to newest), matching T142's approach.

**Result:** Success

**Details:** Changed `.sort((a, b) => a.data.title.localeCompare(b.data.title))` to `.sort((a, b) => new Date(a.data.pubDate).getTime() - new Date(b.data.pubDate).getTime())`. Verified on San Francisco location page (6 books) that books appear in correct chronological order from Sophie and The Odd Ones (2020) through Sophie Feegle Box Set (2023). Build passes with 94 pages.
