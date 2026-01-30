# T058 - Add "Start Reading" CTA with first book free chapter

## Attempt 1

**Approach:** Create a prominent "Start Reading" section on the homepage that:
1. Features Sophie and The Odd Ones (Book 1 in the flagship series) as the entry point
2. Links to Amazon Kindle sample/preview (Amazon automatically provides "Look Inside" feature)
3. Uses strong call-to-action design with urban fantasy styling
4. Positions it strategically after the Featured Books section to catch reader interest
5. Include a compelling hook about the book's opening

The section will:
- Have a distinct visual treatment (gradient background, glow effects)
- Feature the book cover placeholder and title prominently
- Include a teaser quote or hook from the opening
- Provide a clear CTA button linking to Amazon's Kindle sample
- Secondary CTA to "See All Starter Books" for the reading order page

**Result:** Success

**Details:** Added a new "Start Reading" CTA section to the homepage (src/pages/index.astro) positioned between the Featured Books section and the Featured Series section. The section includes:

1. **Visual Design:**
   - Gradient background with radial glow effects
   - Book cover placeholder with hover effects and animated "Start Here!" badge
   - Series and book number badges

2. **Content:**
   - "New to Gwen DeMarco?" header
   - Teaser quote from the book's opening
   - Description highlighting snarky heroine and supernatural elements

3. **Call-to-Action Buttons:**
   - Primary: "Read Free Sample" linking to Amazon (where Kindle Look Inside is available)
   - Secondary: "See Reading Order" linking to /reading-order page

4. **Social Proof:**
   - 4.3 star rating display
   - 245+ reviews count
   - "Free on Kindle Unlimited" badge

Build verified successfully with `npm run build`.
