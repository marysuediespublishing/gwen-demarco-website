# T086 - Change newsletter subscribe button text on homepage

## Attempt 1

**Approach:** Update "Subscribe Now" to "Subscribe Now for Free Ebook" in src/pages/index.astro line 711. The button is in the "Join the Supernatural Side" newsletter section at the bottom of the homepage.

**Result:** Success

**Details:** Changed button text from "Subscribe Now" to "Subscribe Now for Free Ebook" in the homepage newsletter CTA section. Build passes cleanly (63 pages). Button uses responsive padding (px-6 sm:px-8) and text sizing (text-base sm:text-lg) so the slightly longer text fits well on all screen sizes.
