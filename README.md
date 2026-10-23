# Gwen DeMarco Author Website

An urban fantasy author website built with Astro 5, featuring Gwen DeMarco's paranormal romance novels including the Sophie Feegle series, Kingdom of Erishum trilogy, and Auras & Embers series.

## Tech Stack

- **Astro 5** - Static site generator with partial hydration
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom urban fantasy theme
- **React** - Interactive components
- **MDX** - Rich content authoring
- **Sveltia CMS** - Git-based content management (Decap-compatible, online at /admin)
- **Node.js adapter** - Server-side rendering support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

## Editing Content

The admin is [Sveltia CMS](https://github.com/sveltia/sveltia-cms), which uses Decap-compatible config in `public/admin/config.yml`.

- **Online (normal way):** go to `https://gwendemarco.com/admin`, click **Sign In Using Access Token**, and paste a GitHub fine-grained token. Each save commits to `main`, and GitHub Actions redeploys in about 1–2 minutes. If a save doesn't show up, check the repo's Actions tab.
- **Locally:** run `npm run dev`, open `http://localhost:4321/admin`, click **Work with Local Repository** (Chrome or Edge) and pick this folder. Changes are written to disk, so commit and push them yourself. Pull first if anything was edited online.

**Token:** create it at https://github.com/settings/personal-access-tokens/new:
- **Resource owner:** `marysuediespublishing` (the organisation, not your own account)
- **Repository access:** this repo only. One token can also cover several of the org's sites.
- **Permissions:** Contents → **Read and write**
- **Expiration:** set one, then regenerate the token when it expires.

**Approval:** an org owner must then approve the token under the org's Settings → Third-party access → Personal access tokens → Pending requests.
Until it is approved the CMS can read content but every save fails with "Resource not accessible by personal access token".

"Sign in with GitHub" isn't configured; it would need an OAuth server.

**Notes:**
- The CMS version is pinned in `public/admin/index.html`. Bump it deliberately.
- Don't add a `src/pages/admin` route: its build output overwrites the CMS page. In dev, `/admin/` is served by a small rewrite in `astro.config.mjs`.

**Artwork thumbnails:** the **Thumbnail Crop** dropdown (Top / Center / Bottom) picks which part of the image the thumbnail keeps. Leave it blank to use **Custom Focal Point**, an `X,Y` percent value such as `50,30`.

### Content Collections

- **Books** - Individual book entries with covers, descriptions, and purchase links
- **Series** - Book series groupings
- **Blog** - Author blog posts
- **Species** - Supernatural creature profiles (shifters, vampires, fae, etc.)
- **Locations** - World-building settings and places
- **Testimonials** - Reader reviews and quotes
- **Settings** - Site configuration and author info

## Loop-Based Development

This project uses a loop-based development system with Claude Code for AI-assisted development.

### Key Files

```
├── claude.md       # Instructions for Claude Code
├── decisions.md    # Architectural decisions (D001, D002, ...)
├── todos.md        # Work queue (T001, T002, ...)
└── .logs/          # Attempt history for each todo
```

### Running the Loop

Run Claude Code manually:

1. Open Claude Code
2. Claude reads `claude.md`, finds the first unchecked todo, works on it, logs progress, and exits

Or use the automated loop script:

```bash
./loop.sh
```

Configure the loop with environment variables:

```bash
MAX_ATTEMPTS=5 ./loop.sh    # Fail after 5 attempts (default: 10)
SLEEP_BETWEEN=5 ./loop.sh   # Wait 5 seconds between runs (default: 2)
```

### Adding Tasks

Add new todos to `todos.md`:

```markdown
- [ ] **T070** - Add new feature X
  - refs: D001, D002
  - Description of what needs to be done
```

Reference architectural decisions from `decisions.md` using the `refs:` field.

## Deployment

### GitHub Pages

1. Push your changes to the main branch
2. Configure GitHub Pages in repository settings
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

### Manual Deployment

Build the site and deploy the `dist` folder to any static hosting:

```bash
npm run build
# Deploy contents of dist/ to your hosting provider
```

## Project Structure

```
src/
├── components/        # Astro and React components
│   └── ui/           # Reusable UI components
├── content/          # CMS content collections
│   ├── books/        # Book entries
│   ├── series/       # Series entries
│   ├── blog/         # Blog posts
│   ├── species/      # Creature profiles
│   ├── locations/    # World-building locations
│   ├── testimonials/ # Reader reviews
│   └── settings/     # Site configuration
├── layouts/          # Page layouts
├── pages/            # Astro page routes
├── styles/           # Global styles
└── utils/            # Utility functions
public/
├── admin/            # Sveltia CMS
│   ├── index.html
│   └── config.yml
└── images/           # Static images
```

## What's Been Built

### Pages

- **Homepage** - Hero section, featured books, latest blog posts, testimonials, newsletter signup
- **Books** - Full book catalog with series filtering
- **Individual Book Pages** - Detailed book info with purchase links
- **Series** - Series overview with reading order
- **Blog** - Author updates and articles
- **Species** - Supernatural creature guide
- **Locations** - World-building and setting details
- **Reading Order** - Recommended reading guide for new readers
- **About** - Author bio and writing philosophy
- **Contact** - Contact form
- **Search** - Site-wide search
- **Privacy/Cookie Policies** - Legal pages

### Features

- Dark urban fantasy theme with purple accents
- Responsive design (mobile-first)
- Animated hover effects and glows
- Newsletter signup integration
- Full-text search with Fuse.js
- SEO optimized with sitemap and RSS feed

### Content

- **11 books** across 3 series
- **6 species** profiles
- **4 location** entries
- **8 blog posts**
- **4 testimonials**
- Complete author bio and settings

## Design Theme

The site uses a dark, mysterious urban fantasy aesthetic:

- **Shadow Black** (#0a0a0f) - Main background
- **Midnight Purple** (#2d1b4e) - Cards and secondary backgrounds
- **Mystic Violet** (#6b46c1) - Primary accent
- **Ember Orange** (#ff6b35) - CTAs and highlights
- **Mystic Teal** (#2dd4bf) - Secondary accent
- **Moon Silver** (#e2e8f0) - Body text

Typography uses Cinzel for mystical headers and Inter for readable body text.

## Box-set landing page

`/series/sophie-feegle/box-set` is the Meta-ad landing page for the Sophie Feegle box set. Its inputs are CMS fields (all optional):

| Field | Where | Effect when empty |
| --- | --- | --- |
| `boxSetAsin` | `src/content/series/sophie-feegle.md` | The buttons go to an Amazon Kindle search for the box set |
| `boxSetBlurb` | `src/content/series/sophie-feegle.md` | The pitch uses the series `description`. Either way the page shows only the first three paragraphs |
| `boxSetPrice` | `src/content/series/sophie-feegle.md` | The Buy button reads "Buy the Kindle box set" with no price. When set (e.g. `9.99`) it reads "Buy the Kindle box set — $9.99" |
| `boxSetSeparatePrice` | `src/content/series/sophie-feegle.md` | No value line. With `boxSetPrice` also set, "5 books for $X — $Y bought separately" shows under the Buy button |
| `amazonBadge` | `src/content/settings/site-config.md` | No badge. Set it to Amazon's official "Available at Amazon" badge file, unaltered (Amazon brand-usage terms) |
| `landingAttributionTag` | `src/content/settings/site-config.md` | No Amazon Attribution tag on the box-set buttons. When set (the Attribution URL, or just its query string `maas=...&ref_=aa_maas&tag=maas`), its query string is added to the Kindle Unlimited and Buy buttons for every visitor: the page is unlinked from the site, so everyone on it came from the ad |
| `paperbackAttributionTag` | `src/content/settings/site-config.md` | No Amazon Attribution tag on the paperback link. When set, likewise added to the "Book 1 in paperback" link for every visitor |
| `landingAttributionTags` | `src/content/settings/site-config.md` | Every visitor gets the two tags above. Each row is `campaign` (a `utm_campaign` value) with its own `tag` (box set) and `paperbackTag`: a visitor whose `utm_campaign` matches a row gets that row's tags instead, so each campaign has its own Attribution ad group. An unknown campaign, or an empty tag in the row, gets the default |
| `metaPixelId` | `src/content/settings/site-config.md` | No pixel loads. When set, it loads without a consent click if the browser's time zone is a US zone. Anyone else, including visitors whose zone can't be read, sees an in-page Allow/No thanks bar first |
| `pressCtrEndpoint` | `src/content/settings/site-config.md` | Clicks are counted only as the custom pixel events `LandingClickKU` / `LandingClickBuy` / `LandingClickPaperback`. When set, each click also POSTs a keepalive `press.landing.ctr` beacon. `PageView` and the click events carry the visitor's `utm_campaign` as `campaign` |

The "Prefer paper? Book 1 in paperback →" link (`PAPERBACK_URL`), the one-line book hooks (`BOOK_HOOKS`) and the review picks are constants at the top of the page file.

The page uses the slim landing chrome (`<Layout landing>`): the name mark linking home, and a footer with only the legal links. The three review quotes are picked by testimonial id at the top of the page file. Resized covers and the 1200x630 `og:image` are in `public/images/landing/`.

The pixel, consent bar, Attribution swap and click events are shared with the book landing pages: `src/components/landing/` and `src/utils/landing.ts`.

## Book landing pages

`/books/<slug>/landing` is built for every book whose frontmatter has a `landing:` block (Books → Landing Page in the CMS); the first is `/books/ward-breaker/landing`. Like the box-set page it is unlinked from the site and uses the slim landing chrome. It has three doors, in this order, each with a Kindle Unlimited, a Kindle and a print button:

| Door | `target` | Goes to |
| --- | --- | --- |
| 1. This book | the book's slug (`ward-breaker`) | the book's `asin` (else its `amazonUrl`) and `paperbackAsin` |
| 2. Start the series | `series-start` | the box set of the series whose `readingOrder` holds the book, if it has a `boxSetAsin`; else book 1 of that `readingOrder`. Left out when the book is book 1 |
| 3. Same world | `landing.sameWorld.target` (`sophie`) | `landing.sameWorld.series`: its box set, or its book 1 |

A print button whose book has no `paperbackAsin` goes to an Amazon paperback search for the title.

Every button fires `LandingClickKU` / `LandingClickBuy` / `LandingClickPaperback` with `target` (and `page: <slug>-landing`, `cta`, `source`, `campaign`), and posts the `press.landing.ctr` beacon when `pressCtrEndpoint` is set. The pixel and consent rules are the box-set page's.

Attribution: the page ships with plain Amazon links. A `landingAttributionTags` row in site config with the visitor's `utm_campaign` and a door's `target` puts its `tag` on that door's Kindle Unlimited and Kindle buttons and its `paperbackTag` on its print button. A door with no row (or an empty tag) stays plain: the box-set defaults are not used, so another ad's visitors are not counted against this one. Ward Breaker's campaign is `ward-breaker-us-landing`, with one row per door.

The hook, the door titles and lines, the quotes (testimonial id plus an optional `excerpt`) and the reviews are in the book's `landing:` block. Covers come from `public/images/landing/<cover name>-400.(webp|jpg)` when that copy exists (`-640` for the hero), and the share image is `public/images/landing/<slug>-og.jpg` (1200x630).

Tests: `npm run test:e2e` builds the site, serves it with `astro preview`, and checks both landing pages in Chrome (see `tests/e2e/landing.spec.ts`).
