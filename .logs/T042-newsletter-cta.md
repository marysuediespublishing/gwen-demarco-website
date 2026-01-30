# T042 - Create NewsletterCTA Component

## Attempt 1

**Approach:** Create a React-based NewsletterCTA component adapted from dane-griggs-website, applying the urban fantasy theme styling. The component will:
- Support multiple variants (header, hero, sidebar, footer, exit-intent, mobile)
- Use urban fantasy color scheme (mystic-violet, ember-orange, shadow-black, etc.)
- Include email/name signup form in modal
- Display benefits list with supernatural-themed messaging
- Handle form submission with validation
- Simplify by removing analytics dependencies not present in this project

**Result:** Success

**Details:**
- Created `src/components/ui/NewsletterCTA.tsx`
- Adapted from dane-griggs-website with urban fantasy theming
- Component features:
  - Multiple variants: header, hero, sidebar, footer, exit-intent, mobile
  - Modal-based signup form with name and email fields
  - Urban fantasy color scheme (mystic-violet, ember-orange, shadow-black, bone-white, moon-silver)
  - Benefits list with supernatural-themed messaging for Gwen DeMarco's audience
  - Form validation and error handling
  - Success state with themed messaging
  - Accessible with proper ARIA labels and keyboard support
- Simplified compared to reference by removing framer-motion animations and analytics dependencies
- Build verification passed
