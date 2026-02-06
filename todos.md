# Todo List

## Phase 1: Project Setup

- [x] **T001** - Initialize Astro project with TypeScript
  - refs: D001
  - Copy package.json structure from dane-griggs-website
  - Install all required dependencies (astro, tailwind, react, mdx, etc.)
  - Create astro.config.mjs with same integrations

- [x] **T002** - Set up Tailwind CSS with urban fantasy theme
  - refs: D002
  - Create tailwind.config.mjs with custom color palette
  - Add Cinzel and Inter fonts from Google Fonts
  - Create custom component classes (btn, card, badge)
  - Add glow effects and gradient definitions

- [x] **T003** - Set up Decap CMS with local backend
  - refs: D001, D009
  - Create public/admin/index.html
  - Create public/admin/config.yml with all collections
  - Enable local_backend: true
  - Test CMS access at /admin

- [x] **T004** - Create base layout and components
  - refs: D002, D004
  - Copy and adapt Layout.astro from dane-griggs-website
  - Create Header.astro with urban fantasy styling
  - Create Footer.astro
  - Create Navigation.astro with mobile menu
  - Apply dark theme throughout

## Phase 2: Content Structure

- [x] **T005** - Create content collections configuration
  - refs: D003
  - Create src/content/config.ts (if needed for Astro 5)
  - Set up books collection schema
  - Set up series collection schema
  - Set up blog collection schema
  - Set up species collection schema
  - Set up locations collection schema
  - Set up settings collection schema

- [x] **T006** - Create site settings content
  - refs: D005, D008
  - Create src/content/settings/site-config.md
  - Include author bio, tagline, stats
  - Include newsletter configuration
  - Include social links (website, Amazon, Goodreads)

## Phase 3: Series Content

- [x] **T007** - Create Sophie Feegle series entry
  - refs: D006
  - Create src/content/series/sophie-feegle.md
  - Include series description, book count, reading order
  - Set as featured series

- [x] **T008** - Create Kingdom of Erishum series entry
  - refs: D006
  - Create src/content/series/kingdom-of-erishum.md
  - Include trilogy description and reading order

- [x] **T009** - Create Auras & Embers series entry
  - refs: D006
  - Create src/content/series/auras-and-embers.md
  - Mark as ongoing series

## Phase 4: Book Content

- [x] **T010** - Create Sophie and The Odd Ones book entry
  - refs: D006
  - Create src/content/books/sophie-and-the-odd-ones.md
  - Amazon URL: https://www.amazon.com/Sophie-Odd-Ones-Gwen-DeMarco-ebook/dp/B08CHKH9SY
  - Include full description, series info, purchase links

- [x] **T011** - Create Portents and Oddities book entry
  - refs: D006
  - Create src/content/books/portents-and-oddities.md
  - Sophie Feegle Book 2

- [x] **T012** - Create Odd Times for Sophie Feegle book entry
  - refs: D006
  - Create src/content/books/odd-times-for-sophie-feegle.md
  - Sophie Feegle Book 3

- [x] **T013** - Create Against All Odds book entry
  - refs: D006
  - Create src/content/books/against-all-odds.md
  - Sophie Feegle Book 4

- [x] **T014** - Create Odds and Ends book entry
  - refs: D006
  - Create src/content/books/odds-and-ends.md
  - Sophie Feegle Book 5

- [x] **T015** - Create Sophie Feegle Box Set entry
  - refs: D006
  - Create src/content/books/sophie-feegle-box-set.md
  - Amazon URL: https://www.amazon.com/Sophie-Feegle-Box-Set-Books-ebook/dp/B0CK55M553

- [x] **T016** - Create The Mudlark book entry
  - refs: D006
  - Create src/content/books/the-mudlark.md
  - Amazon URL: https://www.amazon.com/Mudlark-Kingdom-Erishum-Trilogy-Book-ebook/dp/B0CKZHXBB2
  - Kingdom of Erishum Book 1

- [x] **T017** - Create The Gutter Shrike book entry
  - refs: D006
  - Create src/content/books/the-gutter-shrike.md
  - Amazon URL: https://www.amazon.com/Gutter-Shrike-Kingdom-Erishum-Trilogy-ebook/dp/B0CMFKGTNV
  - Kingdom of Erishum Book 2

- [x] **T018** - Create The Dying Wilds book entry
  - refs: D006
  - Create src/content/books/the-dying-wilds.md
  - Amazon URL: https://www.amazon.com/Dying-Wilds-Kingdom-Erishum-Trilogy-ebook/dp/B0CY38RQ5G
  - Kingdom of Erishum Book 3

- [x] **T019** - Create Gideon Bean book entry
  - refs: D006
  - Create src/content/books/gideon-bean.md
  - Amazon URL: https://www.amazon.com/Gideon-Bean-Auras-Embers-Book-ebook/dp/B0CT9ZX865
  - Auras & Embers Book 1

- [x] **T020** - Create Spirit Marked book entry
  - refs: D006
  - Create src/content/books/spirit-marked.md
  - Amazon URL: https://www.amazon.com/Spirit-Marked-Auras-Embers-DeMarco/dp/1963906047
  - Auras & Embers Book 2

## Phase 5: Species Content

- [x] **T021** - Create species content entries
  - refs: D007
  - Create src/content/species/shifters.md
  - Create src/content/species/ogres.md
  - Create src/content/species/vampires.md
  - Create src/content/species/fae.md
  - Create src/content/species/auramancers.md
  - Create src/content/species/humans.md

## Phase 6: Blog Content

- [x] **T022** - Create Sophie and The Odd Ones launch blog post
  - refs: D006
  - Create src/content/blog/sophie-odd-ones-launch.md
  - Announce first book in Sophie Feegle series

- [x] **T023** - Create Kingdom of Erishum launch blog post
  - refs: D006
  - Create src/content/blog/kingdom-of-erishum-launch.md
  - Announce fantasy trilogy

- [x] **T024** - Create Gideon Bean launch blog post
  - refs: D006
  - Create src/content/blog/gideon-bean-launch.md
  - Announce Auras & Embers series

- [x] **T025** - Create Sophie Feegle series complete blog post
  - refs: D006
  - Create src/content/blog/sophie-feegle-complete.md
  - Celebrate series completion

## Phase 7: Page Development

- [x] **T026** - Create homepage (index.astro)
  - refs: D002, D004
  - Copy structure from dane-griggs-website
  - Apply urban fantasy theme
  - Hero section with author name and tagline
  - Featured books carousel
  - Stats section
  - Newsletter signup
  - Why readers love section

- [x] **T027** - Create about page
  - refs: D004, D005
  - Author bio section
  - Writing philosophy cards
  - Stats section
  - Connect section with social links

- [x] **T028** - Create books listing page
  - refs: D004
  - Grid of all books
  - Filter by series
  - Sort options
  - Urban fantasy styled cards

- [x] **T029** - Create individual book page template
  - refs: D004
  - Book cover display
  - Full description
  - Series info and reading order
  - Purchase links (Amazon, etc.)
  - Related books

- [x] **T030** - Create series listing page
  - refs: D004
  - Grid of all series
  - Book count and status

- [x] **T031** - Create individual series page template
  - refs: D004
  - Series description
  - Books in reading order
  - World building notes

- [x] **T032** - Create blog listing page
  - refs: D004
  - List of blog posts
  - Category filters
  - Pagination

- [x] **T033** - Create individual blog post template
  - refs: D004
  - Post content rendering
  - Related posts
  - Share buttons

- [x] **T034** - Create species listing page
  - refs: D004, D007
  - Grid of supernatural creatures
  - Urban fantasy themed cards

- [x] **T035** - Create individual species page template
  - refs: D004
  - Species description
  - Related books

- [x] **T036** - Create contact page
  - refs: D004
  - Contact form
  - Social links
  - Newsletter signup

- [x] **T037** - Create search page
  - refs: D004
  - Full-text search
  - Filter by content type

- [x] **T038** - Create privacy policy page
  - refs: D004
  - Standard privacy policy content

- [x] **T039** - Create cookie policy page
  - refs: D004
  - Cookie consent information

## Phase 8: UI Components

- [x] **T040** - Create BookCard component
  - refs: D002
  - Urban fantasy styled book cards
  - Hover glow effects
  - Series badge
  - Rating display

- [x] **T041** - Create SeriesCard component
  - refs: D002
  - Series summary cards
  - Book count badge

- [x] **T042** - Create NewsletterCTA component
  - refs: D002, D008
  - Email signup form
  - Urban fantasy styling

- [x] **T043** - Create StarfieldBackground or FogBackground component
  - refs: D002
  - Animated background effect
  - Subtle, not distracting

- [x] **T044** - Create SpeciesCard component
  - refs: D002, D007
  - Creature type cards
  - Mystical styling

## Phase 9: Final Polish

- [x] **T045** - Add placeholder cover images
  - Create placeholder book covers
  - Add to public/images/
  - Update book entries to reference images

- [x] **T046** - Test all pages render correctly
  - Run npm run build
  - Fix any build errors
  - Verify all routes work

- [x] **T047** - Test Decap CMS admin
  - Access /admin
  - Verify all collections editable
  - Test creating/editing content

- [x] **T048** - Add responsive design fixes
  - refs: D010
  - Test on mobile viewports
  - Fix any layout issues

- [x] **T049** - Final review and cleanup
  - Remove unused code
  - Optimize images
  - Check all links work

## Phase 10: Improvements & Enhancements (Post-Review)

- [x] **T050** - FIX: Book cards on /books page not displaying content
  - refs: D002
  - The BookCard components in the "Featured & Fan Favorites" section render as empty boxes
  - Debug why book title, description, and cover are not showing
  - Ensure cards link to individual book pages
  - Add hover effects and proper styling

- [x] **T051** - Enhance homepage with featured books section
  - refs: D002, D004
  - Add a working featured books carousel/grid to homepage
  - Show 3-4 featured books with covers, titles, and "Read More" links
  - Should appear below the hero section

- [x] **T052** - Add recent blog posts preview to homepage
  - refs: D004
  - Show latest 2-3 blog posts on homepage
  - Include post title, date, and excerpt
  - "View All Posts" link to blog page

- [x] **T053** - Add reader testimonials/reviews section
  - refs: D002
  - Create testimonials content collection
  - Add 3-5 reader quotes/reviews
  - Display on homepage and/or about page
  - Style with quote marks and attribution

- [x] **T054** - Create reading order guide page
  - refs: D004
  - New page at /reading-order
  - Visual guide showing recommended reading order
  - Group by series with clear "Start Here" indicators
  - Include brief descriptions of each series

- [x] **T055** - Add locations/world-building page
  - refs: D003, D004
  - Create locations collection entries (San Francisco Morgue, Kingdom of Erishum, etc.)
  - Create /locations page with world-building details
  - Link locations to relevant books and series

- [x] **T056** - Add more blog content variety
  - refs: D006
  - Create "Writing Tips" blog post
  - Create "Character Spotlight" blog post (e.g., Sophie Feegle profile)
  - Create "World-Building" blog post about supernatural creatures
  - Create "Behind the Scenes" post about writing process

- [x] **T057** - Enhance visual atmosphere with urban fantasy effects
  - refs: D002
  - Add subtle fog/mist overlay effect to hero sections
  - Consider animated particle effects (embers, stars)
  - Add city skyline silhouette as decorative element
  - Enhance purple glow effects on hover states

- [x] **T058** - Add "Start Reading" CTA with first book free chapter
  - refs: D008
  - Create prominent "Start Reading" section
  - Link to first chapter preview or Kindle sample
  - Strong call-to-action for new readers

- [x] **T059** - Improve book card hover interactions
  - refs: D002
  - Add scale transform on hover
  - Add glowing border effect
  - Smooth transitions
  - Show "Quick View" or series badge on hover

- [x] **T060** - Add social proof stats (if available)
  - refs: D002, D005
  - Display real Goodreads ratings if available
  - Show Amazon review counts
  - Add "Readers Love" social proof section

- [x] **T061** - Final QA and link verification
  - Test all Amazon purchase links work
  - Verify all internal navigation
  - Check all images load properly
  - Test newsletter signup flow
  - Verify mobile menu functionality

## Phase 11: Critical Fixes (Second Review)

- [x] **T062** - CRITICAL: Fix book cards rendering on /books page
  - refs: D002
  - The BookCard components in "Featured & Fan Favorites" section still render as empty boxes
  - Cards have borders but no content (title, description, cover image) is displaying
  - Debug the BookCard.astro component - check if props are being passed correctly
  - Verify the books collection query is returning data
  - Check if the card content elements have proper text color for dark backgrounds
  - This is the most visible bug on the site and needs immediate fixing

- [x] **T063** - Add featured books section to homepage
  - refs: D014
  - Homepage currently only has hero section and newsletter CTA
  - Add "Featured Books" section below hero with 3-4 book cards
  - Ensure book cards actually display content (titles, covers)
  - Link each book to its detail page

- [x] **T064** - Add recent blog posts section to homepage
  - refs: D014
  - Add "Latest from the Blog" section to homepage
  - Show 2-3 most recent blog posts
  - Include title, date, excerpt, and "Read More" link

- [x] **T065** - Add testimonials section to homepage
  - refs: D011, D014
  - Create testimonials content if not exists
  - Add "What Readers Are Saying" section to homepage
  - Display 2-3 reader quotes with attribution

- [x] **T066** - Add Locations link to main navigation
  - The /locations page exists but is not linked in the navigation menu
  - Add "Locations" or "Worlds" to the header navigation
  - Position after "Species" in the nav order

- [x] **T067** - README.md
  - Please replace the current README.md with a README.md for this project
  - Include how to run the app for development, add tasks, run loop.sh
  - Include how to run the CMS locally and deploy to Github
  - Include high-level summary of what has been built so far

## Phase 12: Bug Fixes

- [x] **T068** - FIX: Decap CMS admin not working in local development
  - refs: D001, D009
  - When running `npm run dev` + `npx decap-server`, the /admin page is not functioning
  - Investigate browser console for JavaScript errors
  - Verify decap-server is running on correct port (default 8081)
  - Check if there's a proxy configuration needed in astro.config.mjs
  - Compare working dane-griggs-website setup if needed
  - Test that CMS loads and can edit content locally

## Phase 13: Deployment

- [x] **T069** - Switch to static output and configure GitHub Pages deployment
  - refs: D001, D015
  - Remove @astrojs/node adapter from astro.config.mjs
  - Remove @astrojs/node from package.json dependencies
  - Set output to 'static' (or remove output config entirely)
  - Set `site` field in astro.config.mjs to the GitHub Pages URL
  - Remove any SSR-only code or API routes if present
  - Create .github/workflows/deploy.yml for GitHub Actions build + deploy
  - Verify /admin/index.html is included in build output
  - Handle contact form (replace with mailto or Formspree)
  - Run npm run build and verify clean static output in dist/

## Phase 14: Ongoing Development

- [x] **T070** - FIX: Testimonials book field should be a relation dropdown, not text input
  - refs: D001, D011
  - In public/admin/config.yml, update the testimonials collection
  - Change the book field from widget: string to widget: relation
  - Configure relation to point to the books collection
  - Use book title as display and slug as value
  - Example config:
```yaml
    - name: book
      label: Book Title
      widget: relation
      collection: books
      search_fields: [title]
      value_field: "{{slug}}"
      display_fields: [title]
```
  - Test in /admin that the dropdown populates with all books
  - Verify existing testimonial entries still work after the change


- [x] **T071** - FIX: Testimonials date field should be date-only, not datetime
  - refs: D001, D011
  - In public/admin/config.yml, update the testimonials collection
  - Change the date field from datetime widget to date-only
  - Remove time component entirely by setting time_format to false
  - Example config:
```yaml
    - name: date
      label: Date
      widget: datetime
      date_format: "YYYY-MM-DD"
      time_format: false
      format: "YYYY-MM-DD"
```
  - Alternatively, can use widget: string with a pattern for simpler input
  - Test in /admin that date picker works without time component
  - Verify existing testimonial dates still display correctly

- [x] **T072** - FIX: Testimonials date field auto-fills year as 1900 when typing
  - refs: D001, D011
  - The datetime widget has known bugs with manual year entry
  - In public/admin/config.yml, replace datetime widget with string widget for testimonials date
  - Use a simple string input with a pattern for date format
  - Example config:
```yaml
    - name: date
      label: Date
      widget: string
      default: "2025-01-01"
      hint: "Enter date as YYYY-MM-DD (e.g., 2025-02-04)"
```
  - Alternatively, use hidden widget with default: "{{now}}" if date is always "today"
  - This avoids the buggy datetime picker entirely
  - Test in /admin that date can be typed without auto-fill issues
  - Verify testimonials still sort/display correctly with string dates

- [x] **T073** - ENHANCE: Show book title alongside reviewer name in Testimonials list view
  - refs: D001, D011
  - In public/admin/config.yml, update the testimonials collection
  - Add or modify the summary field to display both reviewer and book
  - Example config:
```yaml
    collections:
      - name: testimonials
        label: Testimonials
        folder: src/content/testimonials
        summary: "{{reader}} - {{book}}"
        fields:
          ...
```
  - The summary template uses field names from the collection
  - If book is now a relation (per T070), may need to use the slug or adjust
  - Test in /admin that testimonials list shows "Reviewer Name - Book Title"

- [x] **T074** - ENHANCE: Testimonials date field with mm/dd/yyyy format and calendar picker
  - refs: D001, D011
  - This supersedes T071 and T072 - attempt to configure datetime widget properly
  - In public/admin/config.yml, update testimonials date field
  - Configure with US date format display and calendar picker
  - Example config:
```yaml
    - name: date
      label: Date
      widget: datetime
      date_format: "MM/DD/YYYY"
      time_format: false
      format: "YYYY-MM-DD"
      default: "{{now}}"
      picker_utc: false
```
  - date_format controls display in picker (MM/DD/YYYY for US)
  - format controls how it's stored in markdown (ISO format for sorting)
  - time_format: false removes the time component entirely
  - default: "{{now}}" sets current date when creating new entries
  - picker_utc: false ensures local timezone
  - Test in /admin that calendar picker works and defaults to today
  - If datetime widget bugs persist, fall back to T072 string approach

- [x] **T075** - FIX: Broken images on homepage at localhost:4321
  - refs: D002, D004
  - Homepage is showing image-not-found errors
  - Debug steps:
    1. Open browser dev tools (Network tab) to identify which image URLs are 404ing
    2. Check src/pages/index.astro for image references
    3. Check if referenced images exist in public/images/
    4. Check book cover paths in src/content/books/*.md frontmatter
    5. Check any hero/background image paths in components
  - Common causes:
    - Image path mismatch between content files and actual file locations
    - Missing placeholder images from T045 that were never created or got deleted
    - Incorrect relative vs absolute paths (should be /images/filename.ext)
  - Fix all broken image references
  - Add fallback/default images where covers are missing
  - Run npm run build to verify no image-related warnings
  - Visually confirm homepage loads cleanly with no broken image icons


- [x] **T076** - FIX: Book cover images not displaying on /books listing page
  - refs: D002, D004
  - Book images have been uploaded via Decap CMS admin but are not rendering on /books page
  - Debug steps:
    1. Check a book markdown file in src/content/books/ to see the image path Decap saved
    2. Decap CMS typically saves images to a media_folder path - check config.yml for media_folder and public_folder settings
    3. Compare the path stored in frontmatter (e.g., cover: /images/book.jpg) with actual file location
    4. Check BookCard component to see how it reads and renders the cover image
    5. Verify images exist on disk at the path the component expects
  - Likely causes:
    - Decap saves to a different folder than where the component looks
    - media_folder in config.yml doesn't match public/images/
    - BookCard component may not be reading the frontmatter image field correctly
    - Path mismatch between relative and absolute URLs
  - Fix image path resolution so covers display correctly
  - Verify fix on both /books listing and individual /books/[slug] pages
  - Run npm run build to confirm no image errors


- [x] **T077** - UPDATE: Fix homepage stats to reflect accurate numbers
  - refs: D005, D014
  - Update stats section on homepage with correct figures:
    - Change "1M+ pages read" to "32M+ pages read"
    - Change "2 Series Complete" to "4 Series"
    - Change "500+ Reader Ratings" to "13K+ Reader Ratings"
  - Stats are likely in src/content/settings/site-config.md or hardcoded in src/pages/index.astro
  - Check both locations and update wherever the values are defined
  - Verify changes display correctly on homepage


- [x] **T078** - FIX: Book cover images not displaying on homepage featured books section
  - refs: D002, D014
  - Book images uploaded via Decap CMS admin are not rendering on homepage
  - This may share the same root cause as T076 (books listing page)
  - Debug steps:
    1. Check how the homepage featured books section references book images
    2. Compare image path handling between homepage and /books page
    3. Check if homepage uses a different component or inline markup for book cards
    4. Inspect browser dev tools for 404 paths on homepage specifically
  - Ensure fix is consistent with T076 so images work everywhere
  - Verify book covers display in the featured books section on homepage
  - Run npm run build to confirm clean output


- [x] **T079** - FIX: Testimonials on homepage showing book slug instead of book title
  - refs: D011, D014
  - In the "What Readers Are Saying" section on homepage, book references display as slugs (e.g., "sophie-and-the-odd-ones") instead of readable titles (e.g., "Sophie and The Odd Ones")
  - This is likely because T070 changed the book field to a relation widget using slug as value_field
  - The homepage testimonials component needs to resolve the slug back to the book title
  - Fix by either:
    1. Looking up the book entry by slug and displaying its title
    2. Or changing the relation widget value_field to title instead of slug
  - Check both homepage and any other pages that display testimonials
  - Verify the book title displays as readable text everywhere testimonials appear

- [x] **T080** - ENHANCE: Make testimonial book titles clickable links to book pages
  - refs: D011, D014
  - In the "What Readers Are Saying" section on homepage, the book title at the end of each testimonial should link to the corresponding book's detail page
  - The testimonial book field stores the book slug (via relation widget from T070)
  - Use the slug to construct the link as /books/{slug}
  - Apply Mystic Teal or Ember Orange color to the link for visibility
  - Add hover effect consistent with site theme
  - Check both homepage testimonials and any other pages that display testimonials
  - Verify links navigate to the correct book pages

- [x] **T081** - FIX: Update social links and stats in "Readers Love These Books" homepage section
  - refs: D005, D014
  - Three fixes needed in the "Readers Love These Books" section on homepage:
    1. Goodreads "Follow" link is incorrect - change to: https://www.goodreads.com/gwen_demarco
    2. Amazon "View Store" link is incorrect - change to: https://www.amazon.com/stores/Gwen-DeMarco/author/B08CHLX2TB
    3. Total reviews stat needs to show "13K+" 
  - Links may be hardcoded in src/pages/index.astro or pulled from src/content/settings/site-config.md
  - Check both locations and update wherever defined
  - Verify all three links/stats display correctly on homepage
  - Test that Goodreads and Amazon links open to correct external pages

- [x] **T082** - UPDATE: Fix ratings and review counts in "Readers Love These Books" section
  - refs: D005, D014
  - Update the following stats on homepage "Readers Love These Books" section:
    - Amazon reviews: change "320+ reviews" to "13K+"
    - Amazon average rating: change to 4.6
    - Goodreads ratings: change "180+ ratings" to "9K+"
    - Goodreads average rating: change to 4.5
  - Values may be hardcoded in src/pages/index.astro or in src/content/settings/site-config.md
  - Check both locations and update wherever defined
  - Verify all four values display correctly on homepage

- [x] **T083** - FIX: Replace incorrect Goodreads logo in "Readers Love These Books" section
  - refs: D014
  - The Goodreads logo on the homepage is incorrect
  - Replace with the correct Goodreads logo: tan/beige circle with brown lowercase "g" in center
  - Options:
    1. Download the official Goodreads logo and save to public/images/
    2. Or create an SVG matching the brand (tan circle, brown lowercase g)
  - Update the homepage component to reference the new logo
  - Ensure the logo is appropriately sized and consistent with the Amazon logo next to it
  - Verify the logo displays correctly on both desktop and mobile

- [x] **T084** - FIX: Replace incorrect Amazon logo in "Readers Love These Books" section
  - refs: D014
  - The Amazon logo on the homepage is incorrect
  - Replace with the correct Amazon logo (black text "amazon" with orange arrow smile underneath)
  - Options:
    1. Download official Amazon logo and save to public/images/
    2. Or create an SVG matching the brand
  - For dark background, may need the white text variant with orange arrow
  - Update the homepage component to reference the new logo
  - Ensure the logo is appropriately sized and consistent with the Goodreads logo next to it
  - Verify the logo displays correctly on both desktop and mobile

- [x] **T085** - UPDATE: Use circular Amazon "a" logo style in "Readers Love These Books" section
  - refs: D014
  - This supersedes T084
  - Use a circular Amazon logo style matching https://www.iconpacks.net/free-icon/amazon-letter-a-circle-round-grey-logo-19625.html
  - Logo should be: grey/dark circle with Amazon lowercase "a" and arrow smile inside
  - This matches the circular style of the Goodreads logo for visual consistency
  - Create or source an SVG of this circular Amazon "a" logo
  - Save to public/images/ and update the homepage component
  - Ensure it's the same size as the Goodreads circular logo
  - Verify both logos look consistent and balanced on desktop and mobile

- [x] **T086** - UPDATE: Change newsletter subscribe button text on homepage
  - refs: D008, D014
  - In the "Join the Supernatural Side" section at bottom of homepage
  - Change the "Subscribe Now" button text to "Subscribe Now for Free Ebook"
  - Button may be in the NewsletterCTA component or hardcoded in index.astro
  - Check both locations and update wherever defined
  - Verify button text displays correctly and doesn't overflow on mobile

- [x] **T087** - FIX: Footer featured series list should dynamically pull from CMS
  - refs: D003, D004
  - The footer has a "Featured Series" list that may be hardcoded
  - Update to dynamically query the series collection and filter by featured flag
  - Debug steps:
    1. Check Footer.astro to see how featured series are currently rendered
    2. Check series markdown files for a featured: true/false frontmatter field
    3. If no featured field exists in the series schema, add it to config.yml and content files
  - Ensure the footer queries all series, filters where featured is true, and renders links
  - Any series marked as featured in the /admin should automatically appear in the footer
  - Verify by toggling featured on/off for a series in admin and checking footer updates
  - Run npm run build to confirm no errors

- [x] **T088** - UPDATE: Fix footer social links and Amazon logo
  - refs: D005
  - Three updates needed in the website footer:
    1. Goodreads link: change to https://www.goodreads.com/gwen_demarco
    2. Amazon link: change to https://www.amazon.com/stores/Gwen-DeMarco/author/B08CHLX2TB
    3. Amazon logo: replace with circular style matching https://www.iconpacks.net/icons/free-icons-6/free-amazon-logo-and-circle-icon-19645-thumb.png
  - For the Amazon logo, create or source a circular Amazon logo SVG (dark circle with white "a" and arrow)
  - If T085 already created a circular Amazon logo, reuse the same asset for consistency
  - Check if links are hardcoded in Footer.astro or pulled from site settings
  - Update wherever defined and verify all three changes display correctly
  - Test that both external links open to the correct pages

- [x] **T089** - ENHANCE: Add Mailchimp newsletter signup popup modal across the site
  - refs: D002, D008
  - Create a reusable newsletter popup/modal component that opens when any subscribe button is clicked
  - The modal should appear on subscribe clicks in: header, homepage "Join the Supernatural Side" section, contact page, and any other subscribe CTAs
  - **Design:** Style similar to danegriggs.com signup popup but with urban fantasy theme (dark background, purple accents, ember orange CTA)
  - **Copy for the modal:**
    - Heading: "Join the Supernatural Side"
    - Subtext: "Get exclusive content, early access to new releases, and behind-the-scenes peeks into the weird and wonderful worlds of urban fantasy."
    - Bullet points / benefits:
      - Free starter content with bonus material
      - Early access to new releases
      - Exclusive character backstories
      - Behind-the-scenes writing updates
    - Button text: "Subscribe Now for Free Ebook"
  - **Mailchimp integration:**
    - Form action: https://gwendemarco.us10.list-manage.com/subscribe/post?u=0c90903297efa3d16036ca013&id=e084610bed&f_id=00ef48e4f0
    - Only required field: Email address
    - Include hidden bot-trap field (name: b_0c90903297efa3d16036ca013_e084610bed)
    - Form should POST directly to Mailchimp or use AJAX submission
  - **UX requirements:**
    - Modal overlay with backdrop blur/dim
    - Close button (X) and click-outside-to-close
    - Smooth open/close animation
    - Mobile responsive
    - Accessible (focus trap, ESC to close, aria labels)
  - Replace any existing non-functional newsletter forms with this working Mailchimp integration
  - Test that form submissions reach Mailchimp successfully

- [x] **T090** - FIX: Newsletter subscribe button in header does not open popup
  - refs: D008, D002
  - **Root cause:** The header button has class `newsletter-trigger` and inline JS references `newsletter-modal`, but no modal element exists in the DOM. Clicking the button does nothing because there's no modal to show.
  - **Fix:** Ensure the newsletter modal component (created in T089) is included in the base Layout.astro so it renders on every page
  - Debug steps:
    1. Check if a NewsletterModal component exists in src/components/
    2. If it exists, add it to src/layouts/Layout.astro before the closing </body> tag
    3. If it doesn't exist, it needs to be created per T089 specs first
    4. Verify the modal has id="newsletter-modal" matching what the JS expects
    5. Verify the inline script correctly toggles the modal's visibility on trigger click
  - There are 2 `.newsletter-trigger` buttons on the homepage (header + bottom CTA) — both should open the same modal
  - Test that clicking "Join the Supernatural Side" in the header opens the Mailchimp signup popup
  - Test that clicking "Subscribe Now for Free Ebook" at the bottom also opens it
  - Test close behavior: X button, click outside, ESC key

- [x] **T091** - FIX: React hydration errors breaking NewsletterCTA and FogBackground components
  - refs: D001, D002
  - **Root cause:** Console shows React hook errors - "Cannot read properties of null (reading 'useState')" in NewsletterCTA.tsx and "Cannot read properties of null (reading 'useRef')" in FogBackground.tsx
  - This is an Astro React hydration issue - hooks fail when components aren't properly hydrated
  - **Fix steps:**
    1. Check where NewsletterCTA is imported in Astro files (Layout.astro, index.astro, etc.)
    2. Ensure it has a client directive: `<NewsletterCTA client:load />` or `<NewsletterCTA client:visible />`
    3. Do the same for FogBackground component
    4. Check astro.config.mjs has the React integration properly configured
    5. Verify there's only one React version in package.json (no react version conflicts)
    6. May need to run `npm dedupe` or delete node_modules and reinstall
  - **Common fixes:**
    - Add `client:load` directive to React component imports in .astro files
    - Ensure `@astrojs/react` integration is in astro.config.mjs
    - Check for duplicate React installations with `npm ls react`
  - After fixing, the newsletter modal should render and the subscribe button should work
  - Test that clicking "Join the Supernatural Side" opens the popup without console errors


- [x] **T092** - ENHANCE: Display stacked book covers on series listing page
  - refs: D003, D004
  - On the /series page, each series card should show the cover images of all books in that series
  - Covers should be "stacked" visually (overlapping or fanned out) to show multiple books at a glance
  - Implementation steps:
    1. In the series listing page (src/pages/series/index.astro or similar), query the books collection
    2. For each series, filter books that belong to that series
    3. Sort books by series order/number
    4. Display book covers in a stacked arrangement (e.g., offset positioning, slight rotation, or cascading overlap)
  - Design considerations:
    - Stack 3-5 covers max to avoid clutter
    - Use CSS transforms for offset/overlap effect (e.g., translateX, rotate)
    - Ensure the first book in the series is most prominent/on top
    - Add subtle shadow to create depth
    - Keep it responsive for mobile
  - Pull cover image paths from each book's frontmatter (cover field)
  - Handle missing covers gracefully with placeholder
  - Test on /series page that all series show their book covers stacked

- [x] **T093** - FIX: Auras & Embers series missing book cover images on /series page
  - refs: D003, D006
  - The /series page shows stacked book covers for Kingdom of Erishum and Sophie Feegle, but Auras & Embers shows 0 images
  - Debug steps:
    1. Check src/content/books/gideon-bean.md and spirit-marked.md frontmatter
    2. Verify they have a `cover` field with a valid image path
    3. Verify the `series` field matches the series slug exactly (should be "auras-and-embers")
    4. Check if cover images exist at the paths specified in frontmatter
    5. If images are missing, add them via /admin or copy to public/images/
  - Likely causes:
    - Cover images not uploaded for Gideon Bean and Spirit Marked
    - Series slug mismatch (e.g., "auras-embers" vs "auras-and-embers")
    - Image paths in frontmatter don't match actual file locations
  - After fix, verify both Auras & Embers books display stacked covers on /series page

- [x] **T094** - FIX: Sophie Feegle series cover image quality issue on /series page
  - refs: D006
  - User reports the "top image" in the Sophie Feegle stacked covers looks bad compared to others
  - Investigation found suspicious image filenames in public/images/:
    - `ebook.jpg` - generic name, used for "Sophie and The Odd Ones"
    - `front.jpg` - generic name, used for "Against All Odds"
    - `danegriggs-ebook.jpg` - wrong name (from reference site), used for "Odd Times for Sophie Feegle"
  - Debug steps:
    1. Check which specific image appears blurry/low quality on the /series page
    2. Compare the source image resolution and quality in public/images/
    3. Check if the image file needs to be replaced with a higher quality version
    4. Verify CSS isn't applying unwanted blur/scaling effects to stacked images
  - Likely fix: Replace low-quality image file with proper high-resolution book cover
  - Also consider renaming files to use consistent naming convention (e.g., sophie-and-the-odd-ones-cover.jpg)
  - Test that all 5 Sophie Feegle covers display crisply in the stacked arrangement

- [x] **T095** - FIX: Series page - cap fanned book covers at 3 max, remove "+N" badge
  - refs: D001
  - In src/pages/series.astro, in the "Book Stack Visualization" section:
  - Change .slice(0, 4) to .slice(0, 3) so only the first 3 books display
  - If a series has fewer than 3 books, just show however many exist
  - Adjust the rotation/translation math for 3 cards instead of 4
    (e.g., change (bookIndex - 1.5) * 3 to (bookIndex - 1) * 3 so they fan evenly)
  - Remove the "+N" orange circle badge block entirely
    (delete the series.books.length > 4 conditional and its contents)
  - Keep everything else as-is: large fanned layout, book.data.cover images,
    placeholder fallback, hover overlays, responsive sizing
  - Test with all series on /series page to confirm correct display

- [x] **T096** - FIX: Revert series page book covers to large stacked/fanned layout, max 3 books
  - refs: D001
  - In src/pages/series.astro, the book covers are currently displaying as small
    side-by-side thumbnails (see Auras & Embers section for example)
  - Revert to the original large stacked/fanned layout where covers overlap
    with slight rotation, filling the right column at full height
  - Use the original Book Stack Visualization code structure:
    - aspect-[2/3] container with max-w-sm mx-auto
    - Absolute positioned covers stacked on top of each other
    - Slight rotation per book: transform rotate + translate
    - Large cover images that fill the container (w-full h-full object-cover)
    - Hover effect with scale and z-index change
    - Dark overlay on hover showing book title and "View Book" link
  - Cap at first 3 books per series: .slice(0, 3)
  - Rotation math for 3 books: (bookIndex - 1) * 3 degrees
  - Remove any "+N" badge if still present
  - The Mudlark series (screenshot 2) shows the desired large cover look
  - The Auras & Embers series (screenshot 1) shows the current broken small layout
  - Test all series on /series page to confirm large fanned covers display correctly

- [x] **T097** - ENHANCE: Make book cover images clickable on series detail pages
  - refs: D001
  - On individual series pages (e.g., /series/witches-of-kirra-cross),
    book cover images should link to the individual book page
  - Find the series detail template (likely src/pages/series/[...slug].astro
    or similar dynamic route)
  - Wrap each book cover <img> element in an <a href={`/books/${book.slug}`}> tag
  - Add cursor-pointer and hover effect (e.g., hover:scale-105 transition)
    so it's clear the image is clickable
  - Ensure alt text remains on the image for accessibility
  - Test on /series/witches-of-kirra-cross and other series detail pages
  - Verify links go to the correct individual book pages

- [x] **T099** - NEW: Create Characters page matching Species page layout, add to navigation
  - refs: D001
  - Create src/pages/characters.astro modeled after src/pages/species.astro
  - Use the characters collection from Decap CMS (see public/admin/config.yml for field names)
  - Match the same layout pattern as the species page:
    - Hero section with gradient background and page title/description
    - Grid of character cards with images, names, and key details
    - Hover effects and card styling consistent with species page
    - Link each card to an individual character detail page
  - Create src/pages/characters/[...slug].astro for individual character pages
    (model after src/pages/species/[...slug].astro)
  - Pull all character data from the characters content collection
    (e.g., name, image, description, species, series, etc.)
  - Add "Characters" link to the site navigation/header component
    - Place it between "Species" and "Locations" in the nav order
    - Find the nav component (likely in src/components/ or src/layouts/)
    - Ensure it matches existing nav link styling
  - Test /characters page displays all characters from CMS
  - Test individual character pages render correctly
  - Test nav link appears in correct position and works on all pages

- [x] **T100** - ENHANCE: Group characters by book series on Characters page
  - refs: D001, T099
  - In src/pages/characters.astro, group characters by their series field
  - Fetch both the characters and series collections
  - Group characters using their series field (may be series name or slug)
  - Display each group under a series heading, similar to how
    the /series page sections content by series
  - Each series group should have:
    - Series title as a section header
    - Brief series identifier or badge (e.g., book count, status)
    - Character cards grid underneath
  - Sort series groups in the same order as /series page
    (featured first, then by start date)
  - Within each group, sort characters by series order or name
  - Handle characters with no series assigned — place in an
    "Other Characters" section at the bottom
  - Link series headings to the corresponding /series/[slug] page
  - Check the characters collection config in public/admin/config.yml
    to confirm the exact field name used for series association
  - Test with characters from all series to confirm correct grouping

- [x] **T101** - ENHANCE: Add featured toggle for characters, display featured first
  - refs: D001, T099, T100
  - In public/admin/config.yml, add a featured field to the characters collection:
```yaml
    - name: featured
      label: Featured
      widget: boolean
      default: false
      required: false
```
  - In src/pages/characters.astro, update the display logic:
    - Within each series group, sort featured characters to the top
    - Featured characters should have a visual indicator
      (e.g., a "Featured" badge, highlighted border, or subtle glow effect
      matching the site's mystic-violet/ember-orange theme)
    - Featured cards could be slightly larger or more prominent than
      non-featured cards to draw attention
  - Sort order within each series group should be:
    1. Featured characters first
    2. Then remaining characters sorted by series order or name
  - Test in /admin that the featured toggle appears on character entries
  - Test on /characters page that featured characters display first
    within their series group with visual distinction

- [x] **T102** - FIX: Featured characters not sorting to top within series groups
  - refs: D001, T099, T100, T101
  - On /characters page, featured characters (e.g., Sophie Feegle, Mac Volpes)
    should display before non-featured characters (e.g., Ace) within their series group
  - In src/pages/characters.astro, find the character sorting logic within each series group
  - Update the sort to prioritize featured: true characters first:
```javascript
    characters.sort((a, b) => {
      if (a.data.featured && !b.data.featured) return -1;
      if (!a.data.featured && b.data.featured) return 1;
      return (a.data.seriesOrder || 999) - (b.data.seriesOrder || 999);
    });
```
  - This mirrors the same pattern used for series sorting on the /series page
  - Verify Sophie Feegle and Mac Volpes appear before Ace in the Sophie Feegle section
  - Test with other series groups to confirm featured sorting works across all groups

- [x] **T103** - FIX: Change "Featured" label to "Main Character" on characters page
  - refs: D001, T099, T101
  - In src/pages/characters.astro, find any text or badge that displays "Featured"
    for featured characters and change it to "Main Character"
  - This is display-only — the underlying field in the CMS stays as "featured: true"
  - Update any CSS classes or styling if the badge name affects sizing
  - Test on /characters page that featured characters show "Main Character" badge

- [x] **T104** - NEW: Create Artwork collection in Decap CMS admin
  - refs: D001
  - In public/admin/config.yml, add a new collection for artwork:
```yaml
    - name: artwork
      label: Artwork
      folder: src/content/artwork
      create: true
      slug: "{{slug}}"
      fields:
        - name: title
          label: Title
          widget: string
        - name: image
          label: Image
          widget: image
          required: true
        - name: description
          label: Description
          widget: text
          required: false
        - name: book
          label: Book
          widget: relation
          collection: books
          search_fields: [title]
          value_field: "{{slug}}"
          display_fields: [title]
          required: false
        - name: featured
          label: Featured
          widget: boolean
          default: false
          required: false
```
  - Create the Astro content collection config for artwork:
    - Add artwork schema to src/content/config.ts (or equivalent)
    - Define fields matching the CMS config (title, image, description, book, featured)
  - Create the folder src/content/artwork/ so Decap CMS can store entries
  - Test in /admin that the Artwork section appears in the sidebar
  - Test creating a new artwork entry with image upload, description,
    book dropdown, and featured toggle
  - Verify the entry saves correctly and the markdown file is created

- [x] **T105** - ENHANCE: Add focal point picker for artwork thumbnail cropping
  - refs: D001, T104
  - In public/admin/config.yml, update the artwork collection to add focal point fields:
```yaml
    - name: focal_x
      label: Thumbnail Focal Point X (0-100, left to right)
      widget: number
      default: 50
      value_type: int
      min: 0
      max: 100
      required: false
      hint: "Horizontal center of thumbnail crop. 0 = left edge, 50 = center, 100 = right edge"
    - name: focal_y
      label: Thumbnail Focal Point Y (0-100, top to bottom)
      widget: number
      default: 50
      value_type: int
      min: 0
      max: 100
      required: false
      hint: "Vertical center of thumbnail crop. 0 = top edge, 50 = center, 100 = bottom edge"
```
  - Update the Astro content collection schema to include focal_x and focal_y
  - When displaying artwork thumbnails on any page, use CSS object-position
    to crop around the focal point:
```css
    object-fit: cover;
    object-position: {focal_x}% {focal_y}%;
```
  - Full artwork view continues to display the complete uncropped image
  - Default focal point is 50/50 (center) if not set
  - Test in /admin that focal point fields appear on artwork entries
  - Test that adjusting focal point values changes thumbnail cropping on display
  - Add a hint or help text in the admin explaining how X/Y values work

- [x] **T106** - ENHANCE: Visual focal point picker widget for artwork thumbnails
  - refs: D001, T104, T105
  - Replace the numeric focal_x/focal_y fields with a custom Decap CMS widget
  - Create a custom widget (e.g., public/admin/focal-point-widget.js) that:
    - Displays the uploaded artwork image in the admin
    - Shows a draggable/clickable crosshair or pin overlay on the image
    - Clicking or dragging on the image sets the focal point X/Y values
    - Displays a preview thumbnail crop using the species page card aspect ratio
      (reference src/pages/species.astro for the exact aspect ratio used)
    - Stores the value as a JSON string like "50,50" or an object {x: 50, y: 50}
  - Register the custom widget in public/admin/index.html using:
```javascript
    CMS.registerWidget('focal-point', FocalPointControl, FocalPointPreview);
```
  - Update public/admin/config.yml to replace focal_x and focal_y with
    a single field using the custom widget:
```yaml
    - name: focal_point
      label: Thumbnail Focal Point
      widget: focal-point
      default: "50,50"
      required: false
      hint: "Click on the image to set the thumbnail crop center"
```
  - Update Astro content schema and any templates that reference focal_x/focal_y
    to parse the new combined focal_point field
  - CSS thumbnail display still uses object-position with the parsed X/Y values
  - Test in /admin that clicking the image updates the focal point visually
  - Test that the preview thumbnail matches what displays on the site
  - Test that saved values persist correctly after publish

- [x] **T107** - FIX: Focal point widget should update immediately when artwork image is uploaded
  - refs: D001, T104, T106
  - In public/admin/focal-point-widget.js, the custom widget does not
    reactively detect when the image field value changes during the same session
  - The widget needs to listen for changes to the sibling "image" field
    and update its preview without requiring a save/reload
  - Update the widget's React component to:
    - Access the image field value from the CMS entry via the Decap API
      (e.g., using this.props.entry.getIn(['data', 'image']))
    - Watch for changes to that value using componentDidUpdate or useEffect
    - When the image value changes from empty to a new upload,
      immediately render the image in the focal point picker
    - Handle both file path strings and blob/preview URLs that Decap
      generates for newly uploaded images before save
  - If Decap provides a blob URL for unsaved uploads, use that for preview
  - If only the path is available pre-save, attempt to resolve it
    or show a message like "Save entry to enable focal point picker"
    as a graceful fallback
  - Test workflow: create new artwork entry → upload image → focal point
    picker should populate immediately without needing to publish first

- [x] **T108** - NEW: Create Artwork page with series grouping, hover preview, and overflow pages
  - refs: D001, T104, T106
  - Create src/pages/artwork.astro for the main artwork gallery page
  - Add "Artwork" link to site navigation between "Locations" and "Blog"
    (update the nav component in src/components/ or src/layouts/)
  - Page layout:
    - Hero section matching site style (gradient background, title, subtitle)
    - Group artwork by book series using each artwork entry's book field
      (resolve book → series relationship via the books collection)
    - Sort series groups same as /series page (featured first, then by start date)
    - Within each group, show featured artwork first, then remaining
  - Thumbnail display:
    - Use smaller thumbnails than other pages (e.g., 4-6 per row on desktop)
    - Use the focal point data for object-position on each thumbnail
    - On hover, display the full uncropped image in a lightbox/overlay
      (centered on screen, dimmed background, click or Esc to close)
    - Smooth transition on hover/open
  - Thumbnail limit per series:
    - Set a configurable limit (e.g., 8-12 thumbnails per series group)
    - If a series has more artwork than the limit, show a "More..." button
      below the thumbnail grid
    - "More..." button links to /artwork/[series-slug]
  - Create src/pages/artwork/[...slug].astro for per-series artwork pages:
    - Shows all artwork thumbnails for that specific series
    - Same hover-to-preview behavior as main page
    - Breadcrumb navigation back to /artwork
    - Series title as page heading
  - Handle artwork not associated with any book — group in an
    "Other Artwork" section at the bottom
  - Test /artwork page with multiple series and varying artwork counts
  - Test hover preview works on both main and per-series pages
  - Test "More..." button appears only when artwork exceeds the limit
  - Test nav link appears in correct position on all pages

- [x] **T109** - REMOVE: Delete Reading Order page and remove from navigation
  - refs: D001
  - Remove "Reading Order" link from the site navigation/header component
    (find in src/components/ or src/layouts/)
  - Delete the Reading Order page file (likely src/pages/reading-order.astro)
  - Remove any internal links pointing to /reading-order from other pages
    (check series pages, book pages, homepage, etc.)
  - Test that navigation displays correctly without the link
  - Test that no broken links remain referencing /reading-order

- [x] **T110** - ENHANCE: Add "click thumbnail to see full image" note on Artwork page
  - refs: D001, T108
  - In src/pages/artwork.astro, add a subtle note/hint text
  - Place it below the hero section subtitle or above the first series group
  - Text: "Click on a thumbnail to see the full image" or similar
  - Style it to be informative but unobtrusive (e.g., text-fog-gray, text-sm,
    italic, or with a small icon like a cursor/magnifying glass)
  - Test on /artwork page that the note is visible and fits the design

- [x] **T111** - FIX: Replace artwork count text with "Click on any thumbnail to see full image"
  - refs: D001, T108, T110
  - In src/pages/artwork.astro, under each series group title heading,
    find the text that says something like "X artworks from this series"
  - Replace it with "Click on any thumbnail to see full image"
  - Apply this to every series group section on the page
  - Remove the previous T110 note if it was added above the first group
    (this replaces that approach — one note per section instead of one global note)
  - Style consistently with the rest of the page (e.g., text-fog-gray, text-sm)
  - Test on /artwork page that each series section shows the updated text

- [x] **T112** - FIX: Update artwork page thumbnail grid and "View More" button
  - refs: D001, T108
  - In src/pages/artwork.astro, update the thumbnail display settings:
  - Set max thumbnails per series group to 18
  - Set grid to 6 images per row on desktop (e.g., grid-cols-6)
    - Adjust responsive breakpoints as needed (e.g., grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6)
  - Update the "More..." / overflow button:
    - Change button text to "View All ## Artworks →" where ## is the
      total number of artworks for that series
    - Include the arrow (→) at the end of the button text
    - Remove any "+# more" text or badge from the button
    - Button only appears when series has more than 18 artworks
    - Button still links to /artwork/[series-slug]
  - Test with series that have more than 18 artworks to confirm
    button appears with correct total count
  - Test with series that have 18 or fewer to confirm button is hidden
  - Test responsive grid at all breakpoints

- [x] **T113** - ENHANCE: Show book title alongside artwork title in admin list view
  - refs: D001, T104, T073
  - In public/admin/config.yml, update the artwork collection
  - Add or modify the summary field to display both title and book:
```yaml
    collections:
      - name: artwork
        label: Artwork
        folder: src/content/artwork
        summary: "{{title}} - {{book}}"
        ...
```
  - If book is a relation field (per T104), the summary may need to use
    the slug value — adjust display accordingly
  - Test in /admin that the artwork list shows "Artwork Title - Book Title"

- [x] **T114** - FIX: Homepage Featured Series section should only show series marked as featured
  - refs: D001
  - Find the homepage template (likely src/pages/index.astro)
  - Locate the "Featured Series" section
  - Update the query to filter series where featured === true:
```javascript
    const featuredSeries = allSeries.filter(series => series.data.featured === true);
```
  - Currently it may be showing all series or using a different criteria
    (e.g., slice, hardcoded list, or sort-based)
  - Only series with featured: true set in the Series admin should appear
  - If no series are marked as featured, either hide the section entirely
    or show a fallback message
  - Test by toggling the featured flag on different series in /admin
    and confirming the homepage updates accordingly

- [x] **T115** - ENHANCE: Make book page Settings link to individual location pages
  - refs: D001
  - On individual book pages (e.g., /books/gideon-bean), find the
    "Book Details" section where Settings are listed
  - Likely in src/pages/books/[...slug].astro or similar template
  - Update each setting/location name to be a clickable link:
    - Link to /locations/[location-slug]
    - Generate slug from location name (lowercase, spaces to hyphens)
    - Or if the book data stores location slugs directly, use those
  - Match existing link styling on the site (e.g., hover:text-ember-orange
    transition-colors, or badge style like species links)
  - Verify that the location slugs in the books collection match
    the actual location page slugs (check src/content/locations/)
  - Test on /books/gideon-bean that "Gulf Breeze" links to /locations/gulf-breeze
  - Test on other book pages to confirm all settings link correctly
  - Handle edge case where a setting has no matching location page
    (display as plain text without a link)

- [x] **T116** - ENHANCE: Add Characters section to individual book pages under Book Details
  - refs: D001, T099, T101
  - In the individual book page template (likely src/pages/books/[...slug].astro)
  - Add a "Characters" section above the existing "Species" section in Book Details
  - Fetch the characters collection and filter for characters associated with
    the current book (match via book or series field on the character entry)
  - Sort characters: featured characters first, then by name or series order
```javascript
    const bookCharacters = allCharacters
      .filter(c => /* matches current book or series */)
      .sort((a, b) => {
        if (a.data.featured && !b.data.featured) return -1;
        if (!a.data.featured && b.data.featured) return 1;
        return a.data.name.localeCompare(b.data.name);
      });
```
  - Display each character name as a link to /characters/[character-slug]
  - Style links consistently with how Species links are displayed in the same section
    (e.g., badges or comma-separated linked names)
  - Featured characters could have a subtle visual indicator
    (e.g., "Main Character" badge) matching the /characters page styling
  - If no characters are associated with the book, hide the section entirely
  - Test on multiple book pages to confirm correct characters appear
  - Test that links go to the correct individual character pages

- [x] **T117** - FIX: Remove asterisk/star indicator from featured characters on book pages
  - refs: D001, T116
  - In the individual book page template (likely src/pages/books/[...slug].astro)
  - Find where characters are displayed in the Book Details section
  - Remove any asterisk (*), star, or "Main Character" badge/indicator
    next to featured character names
  - Featured characters should still sort first, just display identically
    to non-featured characters — same styling, no visual distinction
  - Test on book pages that have both featured and non-featured characters
    to confirm they all look the same, with featured listed first

- [x] **T118** - ENHANCE: Add Facebook and Instagram links to Contact page
  - refs: D001
  - In the Contact page template (likely src/pages/contact.astro)
  - Find the "Find Me Online" section
  - Add Facebook link: https://www.facebook.com/GwenDeMarcoAuthor
  - Add Instagram link: http://instagram.com/gwendemarcoauthor
  - Style consistently with any existing social links in that section
    (matching icons, hover effects, layout)
  - Use appropriate social media icons (Facebook and Instagram)
    - Check if the site already uses an icon library (e.g., SVG icons, lucide, etc.)
    - Match the icon style of any existing social links
  - Test that both links open in a new tab (target="_blank" rel="noopener noreferrer")
  - Test on /contact page that links display correctly and are clickable

- [x] **T119** - ENHANCE: Add Characters section to individual species pages
  - refs: D001, T099, T101
  - In the individual species page template (likely src/pages/species/[...slug].astro)
  - Add a "Characters" section on the right side, below the existing "Books" section
  - Fetch the characters collection and filter for characters whose species
    matches the current species page (match via species field on character entry)
  - Sort characters: featured first, then alphabetically by name
```javascript
    const speciesCharacters = allCharacters
      .filter(c => {
        const charSpecies = c.data.species || [];
        return charSpecies.includes(speciesItem.id) || charSpecies.includes(speciesItem.data.title);
      })
      .sort((a, b) => {
        if (a.data.featured && !b.data.featured) return -1;
        if (!a.data.featured && b.data.featured) return 1;
        return a.data.name.localeCompare(b.data.name);
      });
```
  - Display each character name as a link to /characters/[character-slug]
  - Style consistently with how Books are listed in the same sidebar area
  - Do not add any visual distinction between featured and non-featured
    (just sort featured first, matching T117 approach)
  - If no characters match the species, hide the section entirely
  - Test on /species/witches and other species pages
  - Test that character links go to correct individual character pages

- [x] **T120** - ENHANCE: Make series titles clickable links on main Series page
  - refs: D001
  - In src/pages/series.astro, find where each series title is displayed
    (the h2 element with series.data.title inside the series showcase section)
  - Wrap the title text in an <a> tag linking to /series/[series.slug]
  - Add hover styling consistent with the site (e.g., hover:text-ember-orange
    transition-colors)
  - The "Explore Series" button already links there, but the title itself
    should also be clickable for better UX
  - Test on /series page that all series titles link to the correct series pages

- [x] **T121** - ENHANCE: Add Characters, Locations, and Artwork sections to individual series pages
  - refs: D001, T099, T104, T108
  - In src/pages/series/[...slug].astro, make three additions:

  **1. Characters section under Series Info card (right sidebar):**
  - Add a "Characters" section below the existing "Featured Creatures" section
    in the Series Stats Card
  - Fetch characters collection, filter by series match
  - Sort featured characters first, then alphabetically by name
  - Display each character name as a link to /characters/[character-slug]
  - Style consistently with the Featured Creatures badge/link style
  - Hide section if no characters match the series

  **2. Locations section under Characters in Series Info card:**
  - Add a "Locations" section below the new Characters section
  - Fetch locations collection, filter by series match
    (check how locations associate with series — may be via books or direct field)
  - Display each location name as a link to /locations/[location-slug]
  - Style consistently with Characters section above
  - Hide section if no locations match the series

  **3. Artwork sample section above "Books In This Series":**
  - Add a new section between the Series Content/hero area and the
    "Books In This Series" section
  - Fetch artwork collection, filter for artwork associated with this series
    (resolve book → series relationship)
  - Show up to 5 thumbnails using focal point data for object-position
  - Featured artwork first, then remaining
  - Display thumbnails in a row (grid-cols-5 or flex)
  - Include click-to-view-full-image behavior matching /artwork page
  - Below thumbnails, add a "View All Artwork →" link to /artwork/[series-slug]
  - Hide section entirely if no artwork exists for the series

  - Test on multiple series pages to confirm all three sections display correctly
  - Test links go to correct character, location, and artwork pages
  - Test artwork thumbnail hover/click behavior matches /artwork page

- [x] **T122** - FIX: Move series markdown content to directly below World Building notes
  - refs: D001
  - In src/pages/series/[...slug].astro, find the "Series Content (Markdown Body)" section
  - Currently it renders as a separate full-width section below the hero area:
```astro
    {Content && (
      <section class="py-16 bg-dark-surface">
        ...
        <Content />
        ...
      </section>
    )}
```
  - Move the Content rendering to inside the right column (lg:col-span-2),
    directly below the World Building card
  - Remove the separate full-width section wrapper
  - Style the content block to fit within the right column layout
    (keep prose prose-invert styling but remove the separate section padding)
  - Ensure it appears after World Building notes and before the
    Reading Order and CTA buttons
  - Test on series pages that have markdown body content
  - Test on series pages with no body content to confirm no empty space appears

- [x] **T123** - ENHANCE: Add Locations section and Artwork sample to individual book pages
  - refs: D001, T104, T108, T115
  - In the individual book page template (likely src/pages/books/[...slug].astro),
    make two additions:

  **1. Locations section under Book Details:**
  - Add a "Locations" section in the Book Details area
    (near the existing Settings, Species, Characters sections)
  - Fetch locations collection, filter for locations associated with this book
    (match via the book's settings/locations field or via location's book/series field)
  - Display each location name as a link to /locations/[location-slug]
  - Style consistently with how Species and Characters are displayed
    in the same section
  - Handle edge case where a location has no matching page
    (display as plain text without a link)
  - Hide section if no locations match the book

  **2. Artwork sample section below "More from this Series":**
  - Add a new section at the bottom of the page, under the existing
    "More from this Series" section
  - Fetch artwork collection, filter for artwork associated with this book
    (match via the artwork's book field)
  - Show up to 5 thumbnails using focal point data for object-position
  - Featured artwork first, then remaining
  - Display thumbnails in a row (grid-cols-5 or flex, responsive)
  - Include click-to-view-full-image behavior matching /artwork page
  - Below thumbnails, add a "View All Artwork →" link to the artwork
    series page (/artwork/[series-slug])
  - Hide section entirely if no artwork exists for this book

  - Test on multiple book pages to confirm both sections display correctly
  - Test location links go to correct individual location pages
  - Test artwork thumbnail hover/click behavior matches /artwork page
  - Test books with no locations or artwork to confirm sections are hidden

- [x] **T124** - FIX: Move artwork section above "Readers Also Enjoy" on individual book pages
  - refs: D001, T123
  - In the individual book page template (likely src/pages/books/[...slug].astro)
  - Find the artwork sample section added by T123
  - Move it to appear above the "Readers Also Enjoy" section
  - Keep all artwork functionality the same (5 thumbnails, focal point cropping,
    click to view full image, "View All Artwork →" link)
  - Verify the page section order is:
    1. Book hero/details
    2. More from this Series
    3. Artwork sample
    4. Readers Also Enjoy
    5. Newsletter CTA (if present)
  - Test on book pages with and without artwork to confirm correct placement

- [x] **T125** - ENHANCE: Add Languages Available field to Book admin with URL per language
  - refs: D001
  - In public/admin/config.yml, add a languages field to the books collection
    using a list widget with nested fields:
```yaml
    - name: languages
      label: Languages Available
      widget: list
      required: false
      fields:
        - name: language
          label: Language
          widget: select
          options:
            - Arabic
            - Chinese (Simplified)
            - Chinese (Traditional)
            - Czech
            - Danish
            - Dutch
            - English
            - Finnish
            - French
            - German
            - Greek
            - Hebrew
            - Hindi
            - Hungarian
            - Indonesian
            - Italian
            - Japanese
            - Korean
            - Norwegian
            - Polish
            - Portuguese
            - Romanian
            - Russian
            - Spanish
            - Swedish
            - Thai
            - Turkish
            - Ukrainian
            - Vietnamese
        - name: url
          label: URL
          widget: string
          required: false
          hint: "Link to purchase this book in this language"
```
  - Options list is alphabetical; add or remove languages as needed
  - Each list entry gives a language dropdown and a URL input field
  - Update the Astro content collection schema to include the languages field
  - Test in /admin that:
    - Languages field appears on book entries
    - Multiple languages can be added via the list widget
    - Each language entry has a dropdown and a URL input
    - Entries save and persist correctly

- [x] **T126** - FIX: Replace Share links with "Available In" languages section on book pages
  - refs: D001, T125
  - In the individual book page template (likely src/pages/books/[...slug].astro)
  - Find the Share section with links to X, Facebook, and Pinterest
  - Remove the Share section entirely
  - Replace it with an "Available In:" section that lists languages
    from the book's languages field (added in T125)
  - For each language entry:
    - Display the language name as clickable text
    - Link to the URL stored for that language
    - Open in new tab (target="_blank" rel="noopener noreferrer")
    - If a language has no URL, display as plain text (not clickable)
  - Style language links consistently with the rest of the Book Details
    section (e.g., badge style, comma-separated links, or inline list)
  - Add hover effect matching site style (e.g., hover:text-ember-orange)
  - If the book has no languages added, hide the section entirely
  - Test on book pages with multiple languages to confirm all display
    and link correctly
  - Test on book pages with no languages to confirm section is hidden
  - Verify the Share section is fully removed with no leftover markup

- [x] **T127** - FIX: Remove Home link from navigation, make site logo/name link to homepage
  - refs: D001
  - Find the nav component (likely in src/components/ or src/layouts/)
  - Remove the "Home" link from the navigation menu items
  - Ensure the "Gwen DeMarco" site name/logo in the header is wrapped
    in an <a href="/"> tag linking to the homepage
  - If it already links to home, just confirm it works and remove the
    separate Home nav item
  - Test that clicking "Gwen DeMarco" in the header navigates to /
  - Test on all pages to confirm consistent behavior
  - Verify mobile/hamburger menu also removes Home and retains logo link

- [x] **T128** - ENHANCE: Add hero image field to Book admin
  - refs: D001
  - In public/admin/config.yml, add a hero_image field to the books collection:
```yaml
    - name: hero_image
      label: Hero Image
      widget: image
      required: false
      hint: "Wide banner image for use as homepage hero background when this book is featured"
```
  - Update the Astro content collection schema to include hero_image field
  - This image is separate from the book cover — it should be a wide,
    cinematic/atmospheric image suitable for a full-width banner background
  - Test in /admin that the hero image field appears on book entries
  - Test uploading a wide banner image and verify it saves correctly

- [x] **T129** - ENHANCE: Add hero image/banner to homepage featuring latest book
  - refs: D001, T128
  - In src/pages/index.astro, redesign the hero section inspired by ilona-andrews.com
  - Create a full-width hero section at the top of the page with:
    - Background uses the hero_image from the latest book (added in T128)
    - Latest book cover image prominently displayed on the right side
    - Book title and a short teaser/excerpt or tagline on the left side
    - CTA buttons (e.g., "Buy Now", "Learn More") linking to the book's page
  - Determine "latest book" dynamically:
    - Query the books collection, sort by publication date descending
    - Use the first result that has a hero_image set
    - Fall back to the most recent book without hero_image if none have one
  - Hero image should be full-width with overlay gradient for text readability
    (dark gradient from left to ensure text contrast)
  - Book cover should have a slight 3D tilt or shadow effect like
    the Ilona Andrews reference screenshots
  - Make hero section responsive:
    - Desktop: side-by-side text + book cover over background art
    - Mobile: stacked with book cover above text
  - Test with the newest book to confirm hero_image displays as background
    and book cover displays prominently

- [x] **T130** - FIX: Move author stats row below the hero section on homepage
  - refs: D001, T129
  - In src/pages/index.astro, find the stats row (Books Published, Pages Read,
    Reader Ratings, Series)
  - Move it to appear directly below the new hero section from T129
  - Remove the current tagline, author bio text, and "Explore My Books" /
    "Meet the Author" buttons from the old hero area (replaced by new hero)
  - Stats row should span full width with the existing card/badge styling
  - Remove the down arrow scroll indicator
  - Page section order should be:
    1. New hero with latest book + background art
    2. Stats row (Books Published, Pages Read, etc.)
    3. Featured Books
    4. Rest of existing homepage content
  - Test that the homepage feels cohesive with the new hero + stats flow

- [x] **T131** - FIX: Adjust homepage hero layout, gradient, and add title links
  - refs: D001, T129
  - In src/pages/index.astro, update the hero section:

  **1. Shift featured book text/copy to the right:**
  - Move the left-side text content (title, tagline, CTAs) further right
  - Add more left padding or adjust grid columns so the text starts
    more toward center-left, leaving more of the hero image visible
    on the far left

  **2. Adjust the dark gradient overlay:**
  - Reduce the fade/gradient on the far left so more of the hero
    background image is visible on that side
  - Keep the gradient darker directly behind the text area for readability
  - The gradient should be concentrated behind the text rather than
    covering the full left half of the image
  - Consider a more targeted gradient shape (e.g., radial or narrower
    linear gradient) instead of a full left-to-right sweep

  **3. Make book title and series title clickable links:**
  - Book title should link to the individual book page (/books/[book-slug])
  - Series title should link to the series page (/series/[series-slug])
  - Add hover styling consistent with the site (e.g., hover:text-ember-orange
    or subtle underline, transition-colors)

  - Test that the hero image is more visible on the left edge
  - Test that text remains readable against the darker gradient behind it
  - Test both title links navigate to the correct pages

- [x] **T132** - FIX: Adjust hero text position and gradient - split the difference
  - refs: D001, T129, T131
  - In src/pages/index.astro, update the hero section:

  **1. Move text position halfway back to the left:**
  - The text was moved too far right in T131
  - Split the difference between the original position and the current position
  - Reduce the left padding/offset by roughly half of what T131 added

  **2. Ensure gradient is dark behind the text:**
  - The hero image background must be visibly darker directly behind
    the text content area so all text remains easily readable
  - Keep the far left lighter so the hero image shows through
  - The dark zone should closely follow where the text actually sits
  - Test with light and dark hero images to confirm text contrast

  - Test that the text feels balanced — not too far left, not too far right
  - Test readability of all text including title, tagline, and CTA buttons

- [x] **T133** - ENHANCE: Add "Featured on Homepage" option with text field to Book admin
  - refs: D001, T129
  - In public/admin/config.yml, add two new fields to the books collection
    directly below the existing featured field:
```yaml
    - name: featured_homepage
      label: Featured on Homepage
      widget: boolean
      default: false
      required: false
      hint: "Display this book as the hero feature on the homepage"
    - name: featured_text
      label: Featured Text
      widget: text
      required: false
      hint: "Custom text/excerpt displayed in the homepage hero section for this book"
```
  - Update the Astro content collection schema to include both new fields
  - Update src/pages/index.astro hero section (from T129) to use these fields:
    - Instead of determining latest book by publication date,
      look for the book with featured_homepage: true
    - Use featured_text as the tagline/excerpt displayed in the hero
    - If multiple books have featured_homepage: true, use the most recent one
    - Fall back to latest book by publication date if none are marked
  - Test in /admin that both fields appear on book entries under Featured Book
  - Test that toggling featured_homepage and adding featured_text
    updates the homepage hero content