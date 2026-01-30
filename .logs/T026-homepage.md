# T026 - Create homepage (index.astro)

## Attempt 1

**Approach:** Enhance the existing index.astro to match the dane-griggs-website reference structure while applying the urban fantasy theme. Will:

1. Import and use Header/Footer from Layout (already included via Layout)
2. Fetch site settings from CMS to use dynamic content
3. Create a full-featured hero section with:
   - Author name with gradient text effect
   - Dynamic tagline from CMS
   - Stats section (books, pages read, ratings, series)
   - CTA buttons for books and newsletter
4. Add a "Why Readers Love" section with urban fantasy styled cards
5. Add newsletter section with benefits list
6. Apply urban fantasy theme colors and effects throughout
7. Keep the Featured Series section (already exists, may need minor tweaks)

Key differences from dane-griggs:
- Replace space/cosmic theme with urban fantasy (fog, night, purple glows)
- Use Gwen's colors: shadow-black, midnight-purple, mystic-violet, ember-orange
- Applied existing Tailwind component classes (btn, card, badge)

**Result:** Success

**Details:**
Created a fully featured homepage with:
- Hero section with gradient author name, dynamic tagline, animated fog effects, stats grid, CTA buttons, author bio snippet, and scroll indicator
- Featured Series section with three hardcoded series cards (Sophie Feegle, Kingdom of Erishum, Auras & Embers) that link to their series pages
- Why Readers Love section with three cards highlighting key brand elements: Snarky Heroines, Found Family, and Grumpy-Sunshine Romance
- Newsletter section pulling from CMS settings with benefits checkmarks and subscribe CTA

All data is dynamically pulled from the CMS settings collection with sensible fallbacks. The urban fantasy theme is applied throughout with purple glows, ember orange accents, fog gradients, and the appropriate color palette.

Build verification: `npm run build` completes successfully.
