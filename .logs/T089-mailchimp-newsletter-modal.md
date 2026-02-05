# T089 - Add Mailchimp Newsletter Signup Popup Modal

## Attempt 1

**Approach:**
1. Rewrote `NewsletterCTA.tsx` to be a global modal component triggered via custom DOM event (`open-newsletter-modal`)
2. Modal uses Mailchimp form POST (not the broken `/api/subscribe` endpoint)
3. Email-only field with hidden honeypot bot-trap
4. Added modal to `Layout.astro` with `client:load` so it's available on every page
5. Added delegated click handler in Layout's global script for `.newsletter-trigger` class
6. Converted all newsletter subscribe buttons/links across the site from `<a href="/contact">` to `<button class="newsletter-trigger">`
7. Added CSS animations (`fade-in`, `slide-up`) to Tailwind config for smooth modal transitions
8. Full accessibility: focus trap, ESC to close, click-outside-to-close, aria-modal, body scroll lock

**Files Modified:**
- `src/components/ui/NewsletterCTA.tsx` - Complete rewrite with Mailchimp form
- `src/layouts/Layout.astro` - Added global NewsletterCTA component + click event delegation
- `src/components/Header.astro` - Changed subscribe link to modal trigger button
- `src/pages/index.astro` - Changed "Subscribe Now for Free Ebook" to modal trigger
- `src/pages/contact.astro` - Changed "Subscribe to My Newsletter" to modal trigger
- `src/pages/blog/index.astro` - Changed "Subscribe Now" to modal trigger
- `src/pages/books.astro` - Changed "Subscribe Now" to modal trigger
- `src/pages/series/[slug].astro` - Changed newsletter CTA to modal trigger
- `src/pages/books/[slug].astro` - Changed "Join the Supernatural Side" to modal trigger
- `tailwind.config.mjs` - Added fade-in and slide-up animation keyframes

**Mailchimp Config:**
- Form action: `https://gwendemarco.us10.list-manage.com/subscribe/post?u=0c90903297efa3d16036ca013&id=e084610bed&f_id=00ef48e4f0`
- Bot-trap field: `b_0c90903297efa3d16036ca013_e084610bed`
- Form opens in new tab via `target="_blank"` (standard Mailchimp pattern)

**Result:** Success

**Details:** Build passes with 63 pages, no errors. All subscribe CTAs across the site now trigger the newsletter modal popup instead of navigating to /contact. The modal uses the exact copy specified in the todo (heading, subtext, benefits, button text). Contact page navigation links (in nav, mobile menu, footer) are preserved as-is since those are legitimate contact page links.
