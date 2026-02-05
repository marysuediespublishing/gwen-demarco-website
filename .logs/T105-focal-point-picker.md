# T105 - Add focal point picker for artwork thumbnail cropping

## Attempt 1

**Approach:**
1. Add `focal_x` and `focal_y` fields to artwork collection in Decap CMS config (public/admin/config.yml)
2. Update Astro content schema in src/content.config.ts to include these fields
3. The task mentions using these values for CSS object-position when displaying artwork thumbnails

**Result:** Success

**Details:**
- Added `focal_x` and `focal_y` number fields to artwork collection in config.yml
  - Both range 0-100, default 50 (center)
  - Includes hint text explaining usage (0=left/top, 50=center, 100=right/bottom)
- Updated artwork schema in src/content.config.ts to include both fields with proper validation
- Build passes successfully (90 pages built)

**Note:** The task spec mentions using these values for CSS `object-position: {focal_x}% {focal_y}%` when displaying artwork thumbnails. No artwork display pages exist yet, so actual rendering implementation will be part of creating an artwork gallery/display page in a future task.
