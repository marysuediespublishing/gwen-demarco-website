# T137 - Attach dark gradient overlay to hero text container instead of fixed position

## Attempt 1

**Approach:** Remove the fixed percentage-based linear-gradient overlay on the hero image (line 112 of index.astro). Replace it with a soft radial gradient that emanates from behind the text container element itself using an absolutely positioned div with negative inset values. The gradient automatically follows the text regardless of screen size. Keep the existing top-to-bottom gradient for edge fading.

**Result:** Success

**Details:**
- Removed the fixed `linear-gradient(to right, ...)` overlay div that darkened the 20-45% band of the screen
- Kept the vertical `bg-gradient-to-t from-shadow-black via-transparent to-shadow-black/50` gradient for top/bottom fading
- Added `relative` to the text container div (`.text-center.lg:text-left.space-y-6`)
- Added a new child div with `position: absolute; inset: -40% -30%; z-index: -1; pointer-events: none` and a `radial-gradient(ellipse at center, ...)` that fades from 85% opacity at center to transparent at edges
- The gradient now follows the text container on all screen sizes instead of being tied to fixed screen percentages
- Build passes cleanly (94 pages, no errors)
