# Architectural Decisions

## D001 - Use Astro with Decap CMS

**Decision:** Build the site using Astro 5 with Decap CMS for content management.

**Rationale:** Matches the dane-griggs-website reference implementation. Astro provides excellent static site generation with partial hydration for React components. Decap CMS enables content editing without a database.

**Constraints:**
- Use local_backend: true in Decap config for local editing (no auth required)
- All content stored as markdown files in src/content/
- Copy folder structure from dane-griggs-website

---

## D002 - Urban Fantasy Design Aesthetic

**Decision:** Use a dark, mysterious urban fantasy color scheme and visual style.

**Rationale:** Gwen DeMarco writes urban fantasy (Sophie Feegle series set in San Francisco City Morgue with shifters, ogres, vampires). The design should evoke nighttime city streets, supernatural elements, and magical mystery.

**Color Palette:**
- Shadow Black: #0a0a0f (main background)
- Midnight Purple: #2d1b4e (secondary background, cards)
- Mystic Violet: #6b46c1 (primary accent, buttons)
- Ember Orange: #ff6b35 (CTA buttons, highlights, fire/magic elements)
- Mystic Teal: #2dd4bf (secondary accent, links)
- Fog Gray: #94a3b8 (muted text)
- Moon Silver: #e2e8f0 (body text)
- Bone White: #f8fafc (headings on dark)

**Typography:**
- Headers: Cinzel (mystical serif font)
- Body: Inter (clean, readable)
- Use Google Fonts

**Visual Elements:**
- Subtle purple glows on interactive elements
- Fog/mist effects on hero sections
- City skyline silhouettes as decorative elements
- Gradient overlays with purple undertones

---

## D003 - Content Collections

**Decision:** Use the same content collection structure as dane-griggs-website.

**Collections:**
- books - Individual book entries with covers, descriptions, Amazon links
- series - Book series groupings (Sophie Feegle, Kingdom of Erishum, Auras & Embers)
- blog - Blog posts for book launches and author updates
- characters - Character profiles (optional, can be added later)
- species - Supernatural creature types (shifters, ogres, vampires, fae, etc.)
- locations - Settings (San Francisco Morgue, Kingdom of Erishum, etc.)
- settings - Site configuration (author bio, social links, stats)
- pages - CMS-editable page content
- testimonials - Reader reviews

---

## D004 - Page Structure

**Decision:** Create the following pages matching dane-griggs-website structure.

**Pages:**
- / (index) - Homepage with hero, featured books, newsletter signup
- /about - Author bio and writing philosophy
- /books - All books listing with filters
- /books/[slug] - Individual book pages
- /series - Series listing
- /series/[slug] - Individual series pages
- /blog - Blog listing
- /blog/[slug] - Individual blog posts
- /species - Supernatural creatures guide (replaces alien species)
- /species/[slug] - Individual species pages
- /characters - Character index (optional)
- /contact - Contact form
- /privacy-policy - Privacy policy
- /cookie-policy - Cookie policy
- /search - Site search
- /admin - Decap CMS admin interface

---

## D005 - Author Information

**Decision:** Use accurate Gwen DeMarco author information.

**Author Bio:**
Gwen DeMarco is an avid reader, wine & coffee drinker, gardener and a lover of all things nerdy. She loves to write paranormal romance novels with a focus on the weird and wonderful. She loves to write a good snarky heroine and a grumpy male lead.

Gwen is happily married to her high school sweetheart and has two teenage children. She can often be found with her nose in a book and a glass of wine or mug of coffee in her hand.

**Tagline:** "Paranormal romance with a focus on the weird and wonderful"

**Writing Philosophy:**
- Snarky heroines
- Grumpy male leads
- Found family themes
- Urban fantasy settings
- Supernatural creatures

---

## D006 - Book Catalog

**Decision:** Include all Gwen DeMarco books organized by series.

### Sophie Feegle Series (Urban Fantasy - Complete)
1. Sophie and The Odd Ones (2020) - ASIN: B08CHKH9SY
2. Portents and Oddities (2021)
3. Odd Times for Sophie Feegle (2022)
4. Against All Odds (2023)
5. Odds and Ends (2023)
- Box Set: Sophie Feegle Box Set, Books 1-5 (2023) - ASIN: B0CK55M553

### Kingdom of Erishum Trilogy (Fantasy - Complete)
1. The Mudlark (2023) - ASIN: B0CKZHXBB2
2. The Gutter Shrike (2023) - ASIN: B0CMFKGTNV
3. The Dying Wilds (2024) - ASIN: B0CY38RQ5G

### Auras & Embers Series (Urban Fantasy - Ongoing)
1. Gideon Bean (2024) - ASIN: B0CT9ZX865
2. Spirit Marked (2025)

---

## D007 - Species/Creatures for Urban Fantasy

**Decision:** Create species entries for supernatural creatures in Gwen's books.

**Species to include:**
- Shifters (various animal types)
- Ogres
- Vampires
- Fae
- Auramancers (from Auras & Embers)
- Bennu Shifters (phoenix-like, from Auras & Embers)
- Hyvas (monsters from Kingdom of Erishum)
- Humans

---

## D008 - Newsletter and Lead Magnet

**Decision:** Include newsletter signup with urban fantasy themed messaging.

**Newsletter CTA:**
- Title: "Join the Supernatural Side"
- Description: "Get exclusive content, early access to new releases, and behind-the-scenes peeks into the weird and wonderful worlds of urban fantasy."
- Benefits: Free starter content, early access, character extras, writing updates

---

## D009 - No Authentication Required

**Decision:** Use Decap CMS with local_backend: true for content editing.

**Rationale:** Site is edited locally and deployed to GitHub Pages. No need for authentication flow - editors run the dev server locally and use the CMS admin interface.

**Configuration:**
```yaml
backend:
  name: git-gateway
  branch: main

local_backend: true
```

---

## D010 - Responsive Design

**Decision:** Mobile-first responsive design with dark theme.

**Breakpoints:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

**Mobile Considerations:**
- Hamburger menu for navigation
- Stacked book cards
- Touch-friendly buttons (min 44px)
- Readable text sizes on dark backgrounds
