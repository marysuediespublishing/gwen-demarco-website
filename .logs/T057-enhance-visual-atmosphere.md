# T057: Enhance Visual Atmosphere with Urban Fantasy Effects

refs: D002, D013

## Attempt 1

**Approach:** Enhance the visual atmosphere of the site with urban fantasy effects:
1. Create a city skyline SVG silhouette as a decorative element for the footer
2. Enhance the hero section fog/mist overlay effect
3. Add FogBackground component to Layout for subtle global atmosphere
4. Enhance purple glow effects on card hover states
5. Ensure all animations respect prefers-reduced-motion

The site already has:
- FogBackground.tsx component with fog and ember particles
- Tailwind animations (mystic-glow, ember-pulse, float, fog-drift, flicker)
- Gradient backgrounds and glow box-shadows
- Animated fog layer in hero section

Will add:
- City skyline SVG for footer decoration
- Enhanced fog overlays
- Global FogBackground integration
- Improved hover glow transitions

**Result:** Success

**Details:**
1. Created `src/components/ui/CitySkyline.astro` - A three-layer city skyline SVG silhouette with:
   - Background, middle, and foreground building layers
   - Scattered window lights in ember orange and mystic violet
   - SVG glow filter for window lights
   - Subtle float animation that respects prefers-reduced-motion

2. Added city skyline to Footer with `opacity-40` for subtle effect

3. Enhanced hero section in `index.astro` with:
   - Multiple fog drift layers at different speeds
   - Top mist layer for depth
   - Radial glow background at center

4. Added to `tailwind.config.mjs`:
   - `radial-glow` background gradient
   - `fog-drift-slow` animation (35s vs 20s)
   - `glow-pulse` keyframes for animated glow effects
   - Enhanced box shadows with double glow effect

5. Enhanced card and button hover states:
   - `.card-hover` now uses `scale-[1.02]` and `violet-glow` shadow
   - `.btn-primary` uses `ember-glow` shadow on hover
   - `.btn-secondary` uses `violet-glow` shadow on hover
   - `.btn-outline` uses `ember-glow` shadow on hover
   - All use smooth cubic-bezier transitions

6. Added FogBackground component to Layout with reduced counts (5 fog layers, 12 embers) at `opacity-50` for subtle global atmosphere

Build passes successfully.
