# T135 - FIX: Move hero text back to the left, adjust gradient to darken 20-45% of screen

## Attempt 1

**Approach:**
1. Changed grid from `lg:grid-cols-[1fr_3fr_2fr]` with `lg:col-start-2` back to `lg:grid-cols-2` — removes the rightward text shift from T131/T132
2. Removed `lg:col-start-3` from the book cover column
3. Replaced the Tailwind utility gradient (`from-shadow-black/30 via-shadow-black/90 to-shadow-black/50`) with a targeted multi-stop CSS linear-gradient that darkens specifically the 20-45% band:
   - 0-15%: near-transparent, lets hero image show
   - 20-45%: dark band (0.8-0.85 opacity) behind text
   - 55-65%: fades back to transparent for book cover area
4. Kept the vertical gradient (from-shadow-black bottom) unchanged

**Result:** Success

**Details:**
- Build passes cleanly (94 pages, 6.73s)
- Text content is back on the left side in a standard 2-column grid
- Gradient creates a targeted dark band behind the text area while allowing the hero image to show through on both far left and right sides
