# T138 - Darken hero text gradient and update series title hover style

## Attempt 1

**Approach:**
1. Increase opacity values in the radial gradient on line 124 of index.astro (from 0.85/0.7/0.4/0.1 to 0.95/0.85/0.6/0.2)
2. Update series badge link on line 128 to add hover:text-white hover:bg-ember-orange with padding and rounded corners, plus transition

**Result:** Success

**Details:**
1. Darkened radial gradient opacities from 0.85/0.7/0.4/0.1 to 0.95/0.85/0.6/0.2 for better text readability
2. Added `hover:text-white hover:bg-ember-orange rounded-md transition-all` to series badge link for orange background hover effect
3. Build passes cleanly (94 pages, no errors)
