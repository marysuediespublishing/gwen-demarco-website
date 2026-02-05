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