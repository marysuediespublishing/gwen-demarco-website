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
- **Resource owner:** `marysuediespublishing`
- **Repository access:** this repo only. One token can also cover several of the org's sites.
- **Permissions:** Contents → **Read and write**
- **Expiration:** set one, then regenerate the token when it expires.

If the org requires approval, approve the token under org Settings → Personal access tokens. "Sign in with GitHub" isn't configured; it would need an OAuth server.

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
