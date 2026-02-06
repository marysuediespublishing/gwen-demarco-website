# T126 - Replace Share links with "Available In" languages section

## Attempt 1

**Approach:**
1. Find the "Social Sharing" section in src/pages/books/[slug].astro (lines 440-483)
2. Remove the Twitter/X, Facebook, and Pinterest share links entirely
3. Replace with an "Available In:" section that displays languages from book.data.languages
4. Each language with a URL should be a clickable link opening in new tab
5. Languages without URLs display as plain text
6. Hide section entirely if no languages are defined
7. Style consistently with the Book Details section (badge style)

**Result:** Success

**Details:**
- Removed the "Social Sharing" section with Twitter/X, Facebook, and Pinterest share links
- Replaced with "Available In:" section that displays languages from book.data.languages
- Languages with URLs render as clickable badges (badge-secondary) that open in new tabs
- Languages without URLs render as plain badges (badge-outline)
- Section is conditionally rendered - only appears if book has languages defined
- Style matches the existing Book Details section with badge components
- Hover effect on clickable links: hover:bg-ember-orange/25 hover:text-ember-orange
- Build passes (94 pages built successfully)
