# T059 - Improve book card hover interactions

refs: D002

## Attempt 1

**Approach:** Enhance the BookCard component with improved hover interactions:
1. Add scale transform on hover (currently has `hover:-translate-y-2`, will enhance with scale)
2. Add glowing border effect (animated glow pulse on hover)
3. Ensure smooth transitions with proper easing
4. Show series badge more prominently on hover

The current component already has some hover effects:
- `hover:-translate-y-2` on the container
- `hover:shadow-mystic` on the container
- `group-hover:shadow-violet-glow` on the cover
- `group-hover:border-mystic-violet/50` on the cover
- `group-hover:scale-105` on the image

Will enhance by:
- Adding a unified glowing border animation on hover
- Improving scale transform on the entire card
- Adding a "Quick View" overlay that appears on hover
- Making transitions smoother with cubic-bezier easing

**Result:** Success

**Details:**
- Added `hover:scale-[1.02]` to the main card container for subtle scale effect
- Used `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy, smooth transitions
- Enhanced cover border to 2px and added multi-layered glowing box-shadow on hover: `0_0_25px_rgba(107,70,193,0.5),0_0_50px_rgba(107,70,193,0.2),0_8px_32px_rgba(0,0,0,0.4)`
- Increased image scale from 105% to 110% on hover for more dramatic effect
- Added "Quick View" badge that appears centered with scale animation
- Action buttons now slide up with translate animation for polished feel
- Title now gains ember-orange glow on hover using inline event handlers
- All transitions use proper easing curves for smooth, professional feel

Build verified successfully.
