# landing_001 — Book landing pages (Ward Breaker first)

**Status:** built on signals #4216 (replaces #4215) · **Reads with:** README "Box-set landing page" and "Book landing pages", signals #3418 / #4211 (custom conversions, per-campaign tags)

Ward Breaker is book 3 of Auras & Embers, which is set in the same world as Sophie Feegle. The page markets the newest book next to the box set, and its doors tell us where a new reader wants to come into the world.

## Shape

A template, `src/pages/books/[slug]/landing.astro`. It builds `/books/<slug>/landing` for every book whose frontmatter has a `landing:` block. The box-set page (`/series/sophie-feegle/box-set`) shares the same script, consent bar and link helpers (`src/components/landing/`, `src/utils/landing.ts`). Both pages are unlinked from the nav and use the slim landing chrome.

Three doors, in this order, each with **Kindle Unlimited / Kindle / Print**:

| # | Door | `target` | Ward Breaker |
| --- | --- | --- | --- |
| 1 | Read this book now: the book 3 hook, a story that stands on its own | book slug | `ward-breaker`: B0HJGDMMLM, $3.99. No paperback ASIN yet, so the print button goes to a search |
| 2 | Start the series: the series box set if one exists, else book 1 (read from the series content) | `series-start` | Gideon Bean: B0CT9ZX865, $2.99, paperback 1963906004 |
| 3 | The other series in the same world: its box set | `landing.sameWorld.target` | `sophie`: B0CK55M553, $9.99, Book 1 paperback B08CWM839H |

Every button fires `LandingClickKU` / `LandingClickBuy` / `LandingClickPaperback` with `{page, cta, source, campaign, target}` and the page's `utm_*` unchanged. When `pressCtrEndpoint` is set it also sends the `press.landing.ctr` beacon with the same fields.

Attribution was per door and per campaign (`landingAttributionTags`); since Press ad_desk_007 (signals #4997) it is per product and door: site-config `attributionTags.<market>.<product>.<ku|kindle|print>`, the same tag on every page that offers that product, whatever ad sent the visitor. Ward Breaker's three doors are three products: `ward-breaker`, `gideon-bean` (series start) and `sophie-boxset` (the Sophie box set, with book one `sophie-and-the-odd-ones` for print).

## Design

- Lo-fi: `assets/001/01-lofi-390.png`, `01-lofi-1280.png` (source `lofi.html`).
- Hi-fi (the built page): `assets/001/02-hifi-390.png`, `02-hifi-1280.png`.
- Flip-through: `assets/001/flip.html` (← / →), going lo-fi → hi-fi → walk.

Choices: the nine buttons appear once each, with no sticky bar, because a sticky bar would have to pick one door. The doors sit in one row at desktop and stack on phones. Each door carries its rating and one short quote. The bridge quote that sends readers to Sophie (Judith Parsley: "the Aura and Embers series is in that same universe") sits on door 3. A "Pick a door" anchor under the reviews scrolls back up to the doors; it isn't a tenth button.

## Walk

**Task:** see the three ways in, and where each button goes, without buying anything. **Persona:** a reader arriving from a Meta ad (`utm_campaign=x`) on a US laptop.

| Step | Does | Sees | Frame |
| --- | --- | --- | --- |
| 0 | Opens `/books/ward-breaker/landing/?utm_campaign=x` | The hero (cover, Auras & Embers · Book 3 · New, the hook, 4.8 stars, Deb's quote) and "Three ways in". No consent bar (US zone). The pixel queues `PageView {campaign: x}` | `03-walk-00-open.png` |
| 1–3 | Hovers KU, Kindle, Paperback on door 1 | The violet/ember hover glow. Links go to dp/B0HJGDMMLM (×2) and the paperback search | `03-walk-01…03-ward-breaker-*.png` |
| 4–6 | Hovers the three buttons on door 2 | Links go to dp/B0CT9ZX865 (×2) and dp/1963906004 | `03-walk-04…06-series-start-*.png` |
| 7–9 | Hovers the three buttons on door 3 | Links go to dp/B0CK55M553 (×2) and dp/B08CWM839H | `03-walk-07…09-sophie-*.png` |
| end | Clicks nothing | The pixel queue still holds only init and PageView, and the URL is unchanged | walk.mp4 |

Each frame's caption reads the hovered link and the event a click would fire. Recording: `assets/001/walk.mp4`. Script: `assets/001/walk.mjs`.

**Edge cases:** `campaign=x` has no rows, so the links stay plain. A known campaign swaps only the doors it has rows for. A box-set campaign (`sophie-feegle-set-us-landing`) puts no tag on this page. Outside the US, the consent bar shows first. A stored "No thanks" means no pixel. A book that is book 1 of its series gets no door 2. A series with a box set becomes a box-set door.

## Tests

`npm run test:e2e` (`tests/e2e/landing.spec.ts`, Playwright, system Chrome, against `astro preview`) covers:

- The box-set page: campaign tags, events with campaign and without target, default tags for an unknown campaign, a stored denied, and the London consent bar.
- The book page: the door order, 3×3 buttons with targets, plain hrefs and prices, all nine clicks firing the right event with the right `target` plus nine beacons, per-door campaign swaps, and that box-set tags never leak onto it.
- The pure link builder.

## Not done here (a Todd card)

In Amazon Attribution: create the tags for `ward-breaker-us-landing` (Kindle + paperback for each of the three doors) and paste them into site config. In Events Manager: create three custom conversions on `target`. Also add Ward Breaker's paperback ASIN to the book when it exists.
