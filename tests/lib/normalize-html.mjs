// What "the English landing pages are unchanged" compares (tests/english-unchanged.test.mjs):
// the built HTML with only what neither a reader nor a browser can tell apart taken out.
//   - runs of whitespace between tags and around text become one space (HTML renders them
//     the same; the templates moved into components, which changes Astro's whitespace);
//   - astro-island uids (a per-build id) and the CSS chunk's file name (named after the
//     route that first imports it; its content hash is kept, so a change in CSS still shows);
//   - <link rel="alternate" hreflang> lines, which an English page gains when the product
//     gets a German or French edition (that is the point of them);
//   - `market` in the landing script's config and click detail (every event carries it now).
export const normalizeHtml = (html) =>
  html
    .replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '')
    .replace(/ uid="[^"]*"/g, ' uid=""')
    .replace(/\/_astro\/[^"/]+\.([A-Za-z0-9_-]{8})\.css/g, '/_astro/*.$1.css')
    .replace(/"market":"[A-Z]{2}",?/g, '')
    .replace(/ market: landingConfig\.market,/g, '')
    .replace(/\s+/g, ' ');
