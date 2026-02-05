# T090 - Fix Newsletter Subscribe Button in Header

## Attempt 1

**Approach:**
Thorough analysis of the existing code revealed that T089 already properly implemented the newsletter modal system:
1. Header.astro has `newsletter-trigger` class on the desktop subscribe button
2. Layout.astro has inline script dispatching `open-newsletter-modal` custom event on `.newsletter-trigger` clicks
3. Layout.astro includes `<NewsletterCTA client:load />` React component that listens for the event and opens the modal
4. The modal component has full accessibility (focus trap, ESC close, click-outside close, aria-modal)

The actual gap found: The mobile menu (MobileMenu.astro) had NO subscribe button. The header's "Join the Supernatural Side" button is inside `<div class="hidden md:flex">`, making it invisible on mobile. Mobile users could only access newsletter signup from page-level CTAs.

**Changes Made:**
1. Added a "Join the Supernatural Side" button with `newsletter-trigger` class to MobileMenu.astro
   - Styled with `btn-primary` and full-width layout
   - Separated from nav links with a border divider
   - Added `data-testid="mobile-subscribe-button"` for testing
2. Added click handler in MobileMenu's script to close the mobile menu when subscribe is clicked (so the modal isn't obscured)

**Files Modified:**
- `src/components/MobileMenu.astro` - Added subscribe button + close-on-subscribe handler

**Verification:**
- Build passes: 63 pages, no errors
- Newsletter trigger buttons present on all pages (homepage: 3 buttons, other pages: 2 buttons)
- Desktop header button, mobile menu button, and page-level CTAs all dispatch `open-newsletter-modal`
- React NewsletterCTA component listens for event and opens modal on all pages
- Mobile menu closes when subscribe is clicked, allowing modal to display cleanly

**Result:** Success
