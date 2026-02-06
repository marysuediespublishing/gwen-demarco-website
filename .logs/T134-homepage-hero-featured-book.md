# T134 - FIX: Homepage hero uses Featured on Homepage book and custom badge text

## Attempt 1

**Approach:**
1. Verified the hero section already has correct book selection logic (lines 58-67) that prioritizes `featured_homepage: true` books, then falls back to books with `hero_image`, then latest published. No changes needed here.
2. Replaced the hardcoded "New Release" badge text (line 222) with dynamic `latestBook.data.featured_text || "New Release"` so it uses the admin-configured text.
3. Added `whitespace-nowrap` to the badge to handle varying text lengths gracefully.

**Result:** Success

**Details:**
- The book selection logic was already implemented correctly in T133 — `featuredHomepageBook` is found first, cascading to `latestHeroBook` then `latestBook`.
- The only missing piece was the badge text, which was still hardcoded as "New Release" instead of using `featured_text` from the book data.
- Verified asphalt-coven.md has `featured_homepage: true` and `featured_text: "New Release!"` — the hero correctly renders this book with its custom badge text.
- Build passes cleanly: 94 pages, no errors.
