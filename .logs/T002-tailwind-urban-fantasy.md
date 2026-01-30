# T002 - Set up Tailwind CSS with urban fantasy theme

refs: D002

## Attempt 1

**Approach:**
1. Update tailwind.config.mjs with urban fantasy color palette from D002 (Shadow Black, Midnight Purple, Mystic Violet, Ember Orange, Mystic Teal, Fog Gray, Moon Silver, Bone White)
2. Add Cinzel and Inter fonts from Google Fonts
3. Create custom component classes (btn, card, badge) with purple glow effects
4. Add glow effects and gradient definitions
5. Update global.css with urban fantasy styling based on dane-griggs-website but adapted for dark theme

**Result:** Success

**Details:**
- Created tailwind.config.mjs with:
  - All urban fantasy colors from D002 (shadow-black, midnight-purple, mystic-violet, ember-orange, mystic-teal, fog-gray, moon-silver, bone-white)
  - Dark mode surface colors (dark-bg, dark-surface, dark-border)
  - Species colors for supernatural creatures (shifter, ogre, vampire, fae, auramancer, human)
  - Semantic text/bg/border color groups
  - Font families: Cinzel (primary/headers), Inter (secondary/body), JetBrains Mono (accent)
  - Mystical glow box shadows (mystic, ember, teal, violet-glow, ember-glow)
  - Urban fantasy gradients (gradient-mystic, gradient-ember, gradient-fog, gradient-night, gradient-card)
  - Mystical animations (mystic-glow, ember-pulse, float, fog-drift, flicker)
  - Custom component classes: btn variants, card variants, input-mystic, badge variants

- Created global.css with:
  - Google Fonts import for Cinzel, Inter, JetBrains Mono
  - CSS custom properties for all theme colors
  - Dark urban fantasy base styles (dark background, light text)
  - Typography with Cinzel for headings, Inter for body
  - Link styles with mystic-teal color and ember-orange hover
  - Reduced motion support
  - Animation keyframes and utility classes
  - City fog background pattern
  - Fog overlay effect
  - Prose styling for blog content
  - High contrast mode support
  - Button component styles
  - Text glow effects
  - Print styles

- Build verification: `npm run build` completed successfully
