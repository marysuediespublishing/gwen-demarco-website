// Walk for specs/landing_002.md: a German, then a French reader opens the Sophie Feegle
// box-set page from an ad, sees the consent bar in their language, and hovers each
// button; nothing is clicked. The caption shows the hovered link and the event (with its
// market) a click would fire. Needs `astro preview` on BASE of a build made with
// LANDING_EDITIONS_FIXTURE=tests/fixtures/landing-editions.json (the content has no
// DE/FR editions yet).
// node specs/assets/002/walk.mjs [base] [outDir]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://localhost:4392';
const OUT = process.argv[3] ?? new URL('.', import.meta.url).pathname;
const EVENTS = { ku: 'LandingClickKU', buy: 'LandingClickBuy', paperback: 'LandingClickPaperback' };
const WALKS = [
  { lang: 'de', zone: 'Europe/Berlin', locale: 'de-DE', market: 'DE', campaign: 'sophie-feegle-set-de-landing' },
  { lang: 'fr', zone: 'Europe/Paris', locale: 'fr-FR', market: 'FR', campaign: 'sophie-feegle-set-fr-landing' },
];
mkdirSync(`${OUT}/video`, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
for (const walk of WALKS) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    timezoneId: walk.zone,
    locale: walk.locale,
    recordVideo: { dir: `${OUT}/video`, size: { width: 1280, height: 800 } },
  });
  const page = await context.newPage();
  await page.route('**/connect.facebook.net/**', (r) => r.fulfill({ body: '' }));
  const path = `/${walk.lang}/series/sophie-feegle/box-set/?utm_campaign=${walk.campaign}&utm_source=meta`;
  await page.goto(`${BASE}${path}`);
  await page.evaluate((text) => {
    const cap = document.createElement('div');
    cap.id = 'walk-caption';
    cap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;padding:10px 16px;font:14px/1.4 ui-monospace,monospace;background:#000c;color:#2dd4bf;border-top:1px solid #6b46c1';
    cap.textContent = text;
    document.body.append(cap);
  }, `Opened ${path} (${walk.zone}) — consent bar in ${walk.lang}, nothing clicked`);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${walk.lang}-00-open.png` });

  const buttons = page.locator('[data-landing-cta]:visible');
  const n = await buttons.count();
  for (let i = 0; i < n; i++) {
    const b = buttons.nth(i);
    await b.scrollIntoViewIfNeeded();
    await b.hover();
    const info = await b.evaluate((a) => ({ href: a.href, cta: a.dataset.landingCta, label: a.textContent.trim() }));
    await page.evaluate((text) => (document.getElementById('walk-caption').textContent = text),
      `${i + 1}/${n} hover “${info.label}” → ${info.href}  ·  on click: ${EVENTS[info.cta]} {market: ${walk.market}, campaign: ${walk.campaign}}`);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/${walk.lang}-${String(i + 1).padStart(2, '0')}-${info.cta}.png` });
    console.log(`${walk.lang} ${i + 1}/${n} ${info.cta} “${info.label}” → ${info.href}`);
  }
  console.log(`${walk.lang} url after the walk:`, page.url());
  await context.close();
}
await browser.close();
