// Walk for specs/landing_001.md: open the Ward Breaker landing page with
// ?utm_campaign=x, hover each of the nine buttons, click none. A caption shows the
// hovered link and the event a click would fire. Needs `astro preview` on BASE.
// node specs/assets/001/walk.mjs [base] [outDir]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://localhost:4391';
const OUT = process.argv[3] ?? new URL('.', import.meta.url).pathname;
const EVENTS = { ku: 'LandingClickKU', buy: 'LandingClickBuy', paperback: 'LandingClickPaperback' };
mkdirSync(`${OUT}/video`, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  timezoneId: 'America/New_York',
  recordVideo: { dir: `${OUT}/video`, size: { width: 1280, height: 800 } },
});
const page = await context.newPage();
await page.route('**/connect.facebook.net/**', (r) => r.fulfill({ body: '' }));
await page.goto(`${BASE}/books/ward-breaker/landing/?utm_campaign=x`);
await page.evaluate(() => {
  const cap = document.createElement('div');
  cap.id = 'walk-caption';
  cap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;padding:10px 16px;font:14px/1.4 ui-monospace,monospace;background:#000c;color:#2dd4bf;border-top:1px solid #6b46c1';
  cap.textContent = 'Opened /books/ward-breaker/landing/?utm_campaign=x — nothing clicked';
  document.body.append(cap);
});
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/03-walk-00-open.png` });

const buttons = page.locator('[data-landing-cta]');
const n = await buttons.count();
for (let i = 0; i < n; i++) {
  const b = buttons.nth(i);
  await b.scrollIntoViewIfNeeded();
  await b.hover();
  const info = await b.evaluate((a) => ({ href: a.href, cta: a.dataset.landingCta, target: a.dataset.landingTarget, label: a.textContent.trim() }));
  await page.evaluate((text) => (document.getElementById('walk-caption').textContent = text),
    `${i + 1}/9 hover “${info.label}” → ${info.href}  ·  on click: ${EVENTS[info.cta]} {target: ${info.target}, campaign: x}`);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/03-walk-${String(i + 1).padStart(2, '0')}-${info.target}-${info.cta}.png` });
}
const queued = await page.evaluate(() => (window.fbq?.queue ?? []).map((a) => a[0] + ':' + a[1]));
console.log('pixel queue after the walk:', JSON.stringify(queued));
console.log('url after the walk:', page.url());
await context.close();
await browser.close();
