# T139 - FIX: Remove visible edge lines on hero text gradient

## Attempt 1

**Approach:** Fix the radial gradient behind hero text to eliminate visible edge lines by:
1. Adding more intermediate gradient stops (10 stops instead of 5) for a smoother transition
2. Increasing the inset from `-40% -30%` to `-60% -50%` so the gradient has more room to fade before hitting container bounds
3. Ensuring the final stop reaches full transparency (`rgba(10,10,15,0)`) at 95% instead of `transparent` at 100%

**Result:** Success

**Details:** Updated the radial gradient overlay div in `src/pages/index.astro` line 124:
- Old: 5 gradient stops with jumps (0.95 → 0.85 → 0.6 → 0.2 → transparent), inset -40% -30%
- New: 10 gradient stops with smooth decay (0.95 → 0.92 → 0.85 → 0.75 → 0.6 → 0.42 → 0.25 → 0.12 → 0.04 → 0), inset -60% -50%
- The larger inset ensures the gradient doesn't clip at container edges
- The additional stops prevent banding and visible edge artifacts
- Build passes: 94 pages built successfully
