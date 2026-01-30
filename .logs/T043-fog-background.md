# T043 - Create StarfieldBackground or FogBackground Component

refs: D002

## Attempt 1

**Approach:** Create a FogBackground React component (more appropriate for urban fantasy than starfield) that:
- Uses canvas-based fog/mist animation with purple undertones
- Has subtle ember particles floating through the fog
- Uses the urban fantasy color palette (midnight purple, mystic violet)
- Supports reduced motion preference
- Has parallax effect on mouse movement
- Is subtle and not distracting per the requirements

**Result:** Success

**Details:** Created `src/components/ui/FogBackground.tsx` with:
- Canvas-based fog layers using radial gradients in midnight purple, mystic violet, and mystic teal
- Floating ember particles in ember orange (#ff6b35) that rise and flicker
- Mouse parallax effect for subtle interactivity
- Reduced motion support (pauses animation when user prefers reduced motion)
- Responsive ember count (fewer on mobile)
- Proper cleanup of animation frames and event listeners

Build passed successfully.
