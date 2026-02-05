# T085 - Use circular Amazon "a" logo style

## Attempt 1

**Approach:** Replace the current wide text-based Amazon logo SVG (120x48, "amazon" text with arrow) with a circular 48x48 SVG matching the Goodreads logo style. The new logo is a grey (#3D3D3D) circle with white bold lowercase "a" and Amazon's orange (#FF9900) smile/arrow underneath. Also updated the `<img>` tag in `src/pages/index.astro` to use `w-12 h-12` class (matching Goodreads) and removed the `bg-shadow-black` background from the container div since the SVG has its own circle fill.

**Result:** Success

**Details:**
- Replaced `public/images/amazon-logo.svg` from a 120x48 wide text logo to a 48x48 circular icon
- Updated `src/pages/index.astro` line 516-517: changed img class from `h-8` to `w-12 h-12`, removed `bg-shadow-black` from container
- Both Amazon and Goodreads logos now use the same circular format and sizing
- Build passes with 63 pages
