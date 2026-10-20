# T145 - Sophie Feegle box-set landing page

## Attempt 1

**Approach:** New static page src/pages/series/sophie-feegle/box-set.astro reusing Layout and the series/book/testimonial collections. Client-side script rewrites button hrefs (attribution tag only for ad visitors), loads the Meta pixel (US time zone = no consent prompt; otherwise an in-flow consent bar), and fires custom events + optional keepalive beacon on click. Inputs were first planned as PUBLIC_* env vars. Reviewer message #10533 changed them to CMS content fields because deploy.yml sets no env: series boxSetAsin/boxSetBlurb, and site-config metaPixelId/landingAttributionTag/pressCtrEndpoint, all also in public/admin/config.yml.

**Result:** Success

**Details:** `npm run build` passes and emits /series/sophie-feegle/box-set/index.html. Playwright (Chrome) runs against `astro preview`, with sample values put in the content files temporarily:
- America/Chicago + ?from=ad, and America/Los_Angeles + utm_source=meta: both buttons get the Attribution tag. The pixel inits without a banner. Clicks fire LandingClickKU / LandingClickBuy and the keepalive beacon.
- America/New_York with no query: plain https://www.amazon.com/dp/ASIN.
- Europe/London and UTC: the consent bar shows in page flow (no overlap with the KU button at 375px) and no fbq loads.

With every field empty (the committed state), the buttons go to an Amazon Kindle search for the box set and no pixel loads.

## Attempt 2

**Approach:** Reviewer sent it back (signals #2635, messages #10672 and #10702). Rework the page as a landing page: slim chrome (name mark only, legal-links footer, no newsletter); a sticky Series Info sidebar holding the buttons at lg and a fixed bottom button bar on phones; KU primary button with "Free for Kindle Unlimited members"; "Buy on Amazon — $X.XX" plus a value line, both from new CMS price fields; real partial-fill stars with "4.7 · 11,720 ratings"; a tropes line; the blurb cut to three paragraphs; three short whole reviews (a pull-quote under the hero, two lower down, then the buttons again); og tags with a 1200x630 box-set image; small lazy-loaded cover copies; an Amazon badge slot that shows only the official badge file set in the CMS.

**Result:** Success

**Details:** `npm run build` prints Complete! and emits /series/sophie-feegle/box-set/index.html. Playwright (Chrome) against `astro preview`, at 390x844 and 1280x800. At 1280 the Series Info sidebar stays on screen with both buttons after scrolling 1400px. At 390 the bottom bar stays on screen, then comes to rest above the legal-links footer. og:title, og:description, and og:image (/images/landing/sophie-feegle-box-set-og.jpg, 1200x630) are in the head. All five covers are loading=lazy 400px copies, about 80KB each (the originals are 3–5MB). Then I put sample values in the content files and reverted them afterwards. With them, Chicago ?from=ad and LA ?utm_source=meta tagged both buttons and loaded the pixel with no bar. New York with no query got plain /dp/ links. London got the consent bar and no fbq. The Buy button read "Buy on Amazon — $9.99", with "5 books for $9.99 — $24.95 bought separately" under it. Screenshots are in ~/.oftomorrow/signals/runners/ccd/shots/2635/. These are still placeholders until #2684 (Lis) lands: ASIN, pixel ID, attribution tag, price, separate total, KDP blurb, review picks, and the Amazon badge file.
