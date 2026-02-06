# T117 - Remove asterisk/star indicator from featured characters on book pages

## Attempt 1

**Approach:** Remove the star indicator from the Characters section in the Book Details card on individual book pages. The featured characters will still be sorted first, but will no longer have any visual distinction.

**Result:** Success

**Details:**
- Found the star indicator at line 333-335 in `src/pages/books/[slug].astro`
- The code displayed a `★` symbol with "Main Character" title for featured characters
- Removed the featured indicator conditional block entirely
- Also removed the `inline-flex items-center gap-1` classes from the link since they were only needed for the star
- Featured characters are still sorted first in the list (per the sort logic at lines 68-76), they just no longer have visual distinction
- Build passes with 94 pages generated
