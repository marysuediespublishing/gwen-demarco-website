# T131 - Adjust homepage hero layout, gradient, and add title links

## Attempt 1

**Approach:**
1. Shift text content right by changing grid from 2-column to 3-column layout (2fr_3fr_2fr) with text in col-start-2 and book cover in col-start-3, leaving the first column empty to expose more hero image
2. Narrow the gradient overlay: changed from full left-to-right dark sweep to a centered gradient (lg:from-transparent lg:via-shadow-black/85 lg:to-shadow-black/50) so the far left shows more hero image while text area stays readable
3. Made book title an `<a>` linking to `/books/{slug}` with hover:text-ember-orange, and series badge an `<a>` linking to `/series/{slug}` with hover styling

**Result:** Success

**Details:**
- Changed grid from `lg:grid-cols-2` to `lg:grid-cols-[2fr_3fr_2fr]` — the 2fr left column is empty, pushing text toward center
- Text column uses `lg:col-start-2`, book cover uses `lg:col-start-3`
- Gradient on lg: transparent on left edge → dark in the middle (behind text) → medium-dark on right
- Top gradient reduced from shadow-black/60 to shadow-black/50
- Book title `<h1>` wraps an `<a>` tag with hover:text-ember-orange transition
- Series badge changed from `<span>` to `<a>` with hover:bg-ember-orange hover:border-ember-orange
- Build passes cleanly (94 pages, no errors)
