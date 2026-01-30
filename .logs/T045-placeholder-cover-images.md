# T045 - Add placeholder cover images

## Attempt 1

**Approach:** Create SVG placeholder book covers for all 11 books. Each SVG will have:
- Dark purple/black gradient background matching the urban fantasy theme
- Book title text
- Series name
- Urban fantasy themed decorative elements

Then update each book's frontmatter to reference the cover image using Astro's image() schema.

**Result:** Success

**Details:**
- Created 11 SVG placeholder cover images in `src/assets/covers/`
- Each cover follows the urban fantasy color scheme (Shadow Black #0a0a0f, Midnight Purple #2d1b4e, Mystic Violet #6b46c1, Ember Orange #ff6b35, Mystic Teal #2dd4bf)
- Sophie Feegle series books use purple/violet accents
- Kingdom of Erishum trilogy uses teal accents
- Auras & Embers series uses orange/ember accents
- All book markdown files updated with `cover: ../../assets/covers/{book-slug}.svg` field
- Build completes successfully

**Files created:**
- src/assets/covers/sophie-and-the-odd-ones.svg
- src/assets/covers/portents-and-oddities.svg
- src/assets/covers/odd-times-for-sophie-feegle.svg
- src/assets/covers/against-all-odds.svg
- src/assets/covers/odds-and-ends.svg
- src/assets/covers/sophie-feegle-box-set.svg
- src/assets/covers/the-mudlark.svg
- src/assets/covers/the-gutter-shrike.svg
- src/assets/covers/the-dying-wilds.svg
- src/assets/covers/gideon-bean.svg
- src/assets/covers/spirit-marked.svg
