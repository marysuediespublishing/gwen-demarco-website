# T145 - Sophie Feegle box-set landing page

## Attempt 1

**Approach:** New static page src/pages/series/sophie-feegle/box-set.astro reusing Layout and the series/book/testimonial collections. Client-side script rewrites button hrefs (attribution tag only for ad visitors), loads the Meta pixel (US time zone = no consent prompt; otherwise an in-flow consent bar), and fires custom events + optional keepalive beacon on click. Inputs were first planned as PUBLIC_* env vars. Reviewer message #10533 changed them to CMS content fields because deploy.yml sets no env: series boxSetAsin/boxSetBlurb, and site-config metaPixelId/landingAttributionTag/pressCtrEndpoint, all also in public/admin/config.yml.

**Result:** Success

**Details:** `npm run build` passes and emits /series/sophie-feegle/box-set/index.html. Playwright (Chrome) runs against `astro preview`, with sample values put in the content files temporarily:
- America/Chicago + ?from=ad, and America/Los_Angeles + utm_source=meta: both buttons get the Attribution tag. The pixel inits without a banner. Clicks fire LandingClickKU / LandingClickBuy and the keepalive beacon.
- America/New_York with no query: plain https://www.amazon.com/dp/ASIN.
- Europe/London and UTC: the consent bar shows in page flow (no overlap with the KU button at 375px) and no fbq loads.

With every field empty (the committed state), the buttons go to an Amazon Kindle search for the box set and no pixel loads.
