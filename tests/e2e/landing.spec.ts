import { readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';
import matter from 'gray-matter';
import { amazonSearch, doorLinks, tagFor, withTag, type AttributionTags, type CtaKind, type DoorBase } from '../../src/utils/landing';
import { kindlePlusName, showFormerlyKU } from '../../src/utils/kindle-plus';

// The two ad landing pages: /series/sophie-feegle/box-set and the book landing
// template (/books/ward-breaker/landing). The pixel script is stubbed (its queue is
// what we read), and clicks on the buttons are kept from leaving for Amazon. The pixel
// sends only from site-config pixelHosts, so stubOutside adds localhost to them unless
// a test is walking a non-production host.

const BOX_SET = '/series/sophie-feegle/box-set/';
const WARD_BREAKER = '/books/ward-breaker/landing/';
const EVENTS = { ku: 'LandingClickKU', buy: 'LandingClickBuy', paperback: 'LandingClickPaperback' } as const;
const CTAS = ['ku', 'buy', 'paperback'] as const;
const DOORS = ['ward-breaker', 'series-start', 'sophie'] as const;
// The expected tags are site-config's, read here as the build reads them: a copy of a
// tag in this file goes stale the day the tags are reimported.
// Each button's tag door, written out here rather than taken from landing.ts's CTA_DOOR.
const CTA_DOOR = { ku: 'ku', buy: 'kindle', paperback: 'print' } as const;
const TAGS: AttributionTags = matter(readFileSync('src/content/settings/site-config.md', 'utf8')).data.attributionTags;
/** A button's expected link: its bare /dp page with its product's tag for the button's door, if any. */
const linkFor = (product: string, cta: CtaKind, href: string) => withTag(href, tagFor(TAGS, product, CTA_DOOR[cta], href));
/** The same, for a button that must have a tag: fails, rather than expecting the bare link, when site-config has none. */
const taggedLink = (product: string, cta: CtaKind, href: string) => {
  expect(tagFor(TAGS, product, CTA_DOOR[cta], href), `site-config attributionTags for ${product} · ${CTA_DOOR[cta]}`).toBeTruthy();
  return linkFor(product, cta, href);
};
// The Sophie box set (its own product, boxSetSlug) and book one in print.
const BOX_SET_KINDLE = 'https://www.amazon.com/dp/B0CK55M553';
const BOOK_ONE_PRINT = 'https://www.amazon.com/dp/B08CWM839H';
// Functions, so a missing tag fails the tests that need it, not the whole file.
const boxSetKu = () => taggedLink('sophie-boxset', 'ku', BOX_SET_KINDLE);
const boxSetBuy = () => taggedLink('sophie-boxset', 'buy', BOX_SET_KINDLE);
const bookOnePrint = () => taggedLink('sophie-and-the-odd-ones', 'paperback', BOOK_ONE_PRINT);
// A made-up tag for the pure tests.
// Ward Breaker's three doors: each button's bare page and the product it is.
const WB_DOORS: DoorBase[] = [
  { target: 'ward-breaker', kindleUrl: 'https://www.amazon.com/dp/B0HJGDMMLM', paperbackUrl: amazonSearch('Ward Breaker Gwen DeMarco paperback', true), product: 'ward-breaker', printProduct: 'ward-breaker' },
  { target: 'series-start', kindleUrl: 'https://www.amazon.com/dp/B0CT9ZX865', paperbackUrl: 'https://www.amazon.com/dp/1963906004', product: 'gideon-bean', printProduct: 'gideon-bean' },
  { target: 'sophie', kindleUrl: BOX_SET_KINDLE, paperbackUrl: BOOK_ONE_PRINT, product: 'sophie-boxset', printProduct: 'sophie-and-the-odd-ones' },
];
const bareOf = (door: DoorBase, cta: CtaKind) => (cta === 'paperback' ? door.paperbackUrl : door.kindleUrl);
const productOf = (door: DoorBase, cta: CtaKind) => (cta === 'paperback' ? door.printProduct : door.product);
const ANY_TAG = 'maas=maas_adg_0000_afap_abs&ref_=aa_maas&tag=maas';

const CTR = 'https://press.example.test/ctr';

/**
 * Stub the pixel script and the beacon, and rewrite each page's built-in landing config:
 * localhost becomes a production host (unless `production: false`), then `edit` runs
 * (Attribution rows, beacon endpoint).
 */
async function stubOutside(page: Page, { production = true, edit }: { production?: boolean; edit?: (config: any) => void } = {}) {
  await page.route('**/connect.facebook.net/**', (route) => route.fulfill({ body: '' }));
  await page.route(CTR, (route) => route.fulfill({ body: 'ok' }));
  await page.route('**/*', async (route) => {
    if (route.request().resourceType() !== 'document') return route.fallback();
    const response = await route.fetch();
    const html = (await response.text()).replace(/const landingConfig = (\{.*?\});\n/, (_, json) => {
      const config = JSON.parse(json);
      if (production) config.pixelHosts.push('localhost');
      edit?.(config);
      return `const landingConfig = ${JSON.stringify(config)};\n`;
    });
    await route.fulfill({ response, body: html });
  });
  await page.addInitScript(() => {
    document.addEventListener('click', (e) => {
      if ((e.target as Element).closest('a[data-landing-cta]')) e.preventDefault();
    });
  });
}

/** The page's `[pixel] …` console lines (the non-production path). */
function pixelLines(page: Page) {
  const lines: string[] = [];
  page.on('console', (msg) => {
    if (msg.text().startsWith('[pixel] ')) lines.push(msg.text());
  });
  return lines;
}

const fbqCalls = (page: Page) =>
  page.evaluate(() => ((window as any).fbq?.queue ?? []).map((args: IArguments) => Array.from(args)));

const customEvents = async (page: Page) => (await fbqCalls(page)).filter((call: unknown[]) => call[0] === 'trackCustom');

test.describe('attribution links (pure)', () => {
  test('withTag keeps only the query string of a whole Attribution URL', () => {
    expect(withTag('https://www.amazon.com/dp/B0HJGDMMLM', `https://www.amazon.com/dp/OTHER?${ANY_TAG}`)).toBe(
      `https://www.amazon.com/dp/B0HJGDMMLM?${ANY_TAG}`,
    );
    expect(withTag('https://www.amazon.com/dp/B0HJGDMMLM', '  ')).toBe('https://www.amazon.com/dp/B0HJGDMMLM');
  });

  test('a button takes its product\'s tag for its door, in its storefront, only for its own product page', () => {
    const tags = {
      US: {
        'ward-breaker': { ku: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=ku', kindle: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=kindle' },
        'sophie-boxset': { kindle: 'https://www.amazon.com/dp/OTHERASIN0?maas=wrong' },
      },
      UK: { 'ward-breaker': { ku: 'maas=uk' } },
    };
    expect(tagFor(tags, 'ward-breaker', 'ku', 'https://www.amazon.com/dp/B0HJGDMMLM')).toBe('https://www.amazon.com/dp/B0HJGDMMLM?maas=ku');
    expect(tagFor(tags, 'ward-breaker', 'ku', 'https://www.amazon.co.uk/dp/B0HJGDMMLM')).toBe('maas=uk');
    expect(tagFor(tags, 'ward-breaker', 'print', 'https://www.amazon.com/dp/1963906004')).toBeUndefined();
    // A tag for another product page is not this button's.
    expect(tagFor(tags, 'sophie-boxset', 'kindle', 'https://www.amazon.com/dp/B0CK55M553')).toBeUndefined();

    const door = { target: 'ward-breaker', kindleUrl: 'https://www.amazon.com/dp/B0HJGDMMLM', paperbackUrl: 'https://www.amazon.com/dp/1963906004', product: 'ward-breaker', printProduct: 'ward-breaker' };
    expect(doorLinks(door, tags)).toEqual({
      links: {
        ku: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=ku',
        buy: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=kindle',
        paperback: 'https://www.amazon.com/dp/1963906004',
      },
      missing: [{ product: 'ward-breaker', door: 'print', href: 'https://www.amazon.com/dp/1963906004' }],
    });
  });
});

test.describe('box-set page', () => {
  test.use({ timezoneId: 'America/Chicago' });

  test('the box set\'s tags on KU and Buy, book one\'s Print tag on the paperback, whatever the campaign; clicks carry the utm_* unchanged', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${BOX_SET}?utm_campaign=sophie-feegle-set-us-landing&utm_source=meta&utm_medium=paid&utm_content=ad-a`);
    await expect(page.locator('aside [data-landing-cta="ku"]')).toHaveAttribute('href', boxSetKu());
    await expect(page.locator('aside [data-landing-cta="buy"]')).toHaveAttribute('href', boxSetBuy());
    await expect(page.locator('aside [data-landing-cta="paperback"]')).toHaveAttribute('href', bookOnePrint());
    expect(await fbqCalls(page)).toContainEqual(['track', 'PageView', { campaign: 'sophie-feegle-set-us-landing' }]);

    for (const cta of CTAS) await page.locator(`aside [data-landing-cta="${cta}"]`).click();
    const utm = { utm_campaign: 'sophie-feegle-set-us-landing', utm_source: 'meta', utm_medium: 'paid', utm_content: 'ad-a' };
    expect(await customEvents(page)).toEqual(
      CTAS.map((cta) => ['trackCustom', EVENTS[cta], { page: 'sophie-feegle-box-set', cta, source: 'ad', campaign: 'sophie-feegle-set-us-landing', ...utm }]),
    );
  });

  test('another campaign, or none, gets the same tags', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${BOX_SET}?utm_campaign=x`);
    await expect(page.locator('aside [data-landing-cta="buy"]')).toHaveAttribute('href', boxSetBuy());
    await page.goto(BOX_SET);
    await expect(page.locator('aside [data-landing-cta="ku"]')).toHaveAttribute('href', boxSetKu());
    await expect(page.locator('aside [data-landing-cta="paperback"]')).toHaveAttribute('href', bookOnePrint());
    const config = JSON.parse((await page.content()).match(/const landingConfig = (\{.*?\});\n/)![1]);
    expect(config.missingTags).toEqual([]);
  });

  test('a stored "denied" blocks the pixel even in a US zone', async ({ page }) => {
    await stubOutside(page);
    await page.addInitScript(() => localStorage.setItem('gd_marketing_consent', 'denied'));
    await page.goto(BOX_SET);
    expect(await page.evaluate(() => typeof (window as any).fbq)).toBe('undefined');
    await expect(page.locator('#consent-bar')).toBeHidden();
  });
});

test.describe('box-set page outside the US', () => {
  test.use({ timezoneId: 'Europe/London' });

  test('the consent bar shows and no pixel loads until Allow', async ({ page }) => {
    await stubOutside(page);
    await page.goto(BOX_SET);
    await expect(page.locator('#consent-bar')).toBeVisible();
    expect(await page.evaluate(() => typeof (window as any).fbq)).toBe('undefined');
    await page.locator('[data-consent="granted"]').click();
    expect(await page.evaluate(() => typeof (window as any).fbq)).toBe('function');
  });
});

test.describe('Ward Breaker landing page', () => {
  test.use({ timezoneId: 'America/New_York' });

  test('three doors in order, three buttons each, each door its own product\'s tags', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${WARD_BREAKER}?utm_campaign=x`);
    await expect(page.locator('[data-door]')).toHaveCount(3);
    expect(await page.locator('[data-door]').evaluateAll((els) => els.map((el) => (el as HTMLElement).dataset.door))).toEqual([...DOORS]);
    await expect(page.locator('[data-landing-cta]')).toHaveCount(9);
    for (const door of DOORS) {
      expect(
        await page.locator(`[data-door="${door}"] [data-landing-cta]`).evaluateAll((els) =>
          els.map((el) => [(el as HTMLElement).dataset.landingCta, (el as HTMLElement).dataset.landingTarget]),
        ),
      ).toEqual(CTAS.map((cta) => [cta, door]));
    }
    const href = (door: string, cta: string) => page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).getAttribute('href');
    // Each button: its bare page with its product's site-config tag for its door, if it has one.
    for (const door of WB_DOORS) {
      for (const cta of CTAS) expect(await href(door.target, cta), `${door.target} · ${cta}`).toBe(linkFor(productOf(door, cta), cta, bareOf(door, cta)));
    }
    // Sophie's world is the Sophie box set (and book one in print): their tags, as on the box-set page.
    expect(await href('sophie', 'ku')).toBe(boxSetKu());
    expect(await href('sophie', 'buy')).toBe(boxSetBuy());
    expect(await href('sophie', 'paperback')).toBe(bookOnePrint());
    await expect(page.locator('[data-door="sophie"] [data-landing-cta="buy"]')).toHaveText('Buy the Kindle box set — $9.99');
    await expect(page.locator('[data-door="ward-breaker"] [data-landing-cta="buy"]')).toHaveText('Buy for Kindle — $3.99');
  });

  test('every one of the nine buttons fires its event with its door as target, and the beacon', async ({ page }) => {
    await stubOutside(page, {
      edit: (config) => {
        config.ctrEndpoint = CTR;
      },
    });
    const beacons: unknown[] = [];
    page.on('request', (req) => {
      if (req.url() === CTR) beacons.push(JSON.parse(req.postData() ?? '{}'));
    });
    await page.goto(`${WARD_BREAKER}?utm_campaign=x`);
    expect(await fbqCalls(page)).toContainEqual(['track', 'PageView', { campaign: 'x' }]);

    const expected = DOORS.flatMap((door) =>
      CTAS.map((cta) => ({ page: 'ward-breaker-landing', cta, source: 'organic', campaign: 'x', target: door, utm_campaign: 'x' })),
    );
    for (const door of DOORS) {
      for (const cta of CTAS) await page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).click();
    }
    expect(await customEvents(page)).toEqual(expected.map((detail) => ['trackCustom', EVENTS[detail.cta], detail]));
    await expect.poll(() => beacons.length).toBe(9);
    expect(beacons).toEqual(expected.map((detail) => ({ metric: 'press.landing.ctr', ...detail })));
  });

  test('a missing tag falls back to the bare /dp link, and the page lists it as missing', async ({ page }) => {
    // The /dp buttons site-config has no tag for, found from the data rather than assumed.
    const untagged = WB_DOORS.flatMap((door) => CTAS.map((cta) => ({ door, cta, bare: bareOf(door, cta), product: productOf(door, cta) })))
      .filter(({ cta, bare, product }) => bare.includes('/dp/') && !tagFor(TAGS, product, CTA_DOOR[cta], bare));
    test.skip(untagged.length === 0, 'every Ward Breaker /dp button has a site-config tag; the fallback is covered by the pure tests');
    await stubOutside(page);
    await page.goto(`${WARD_BREAKER}?utm_campaign=wb-test`);
    const href = (door: string, cta: string) => page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).getAttribute('href');
    for (const { door, cta, bare } of untagged) expect(await href(door.target, cta), `${door.target} · ${cta}`).toBe(bare);
    const config = JSON.parse((await page.content()).match(/const landingConfig = (\{.*?\});\n/)![1]);
    // Every untagged button, /dp or not (a book with no paperback ASIN is a search link), in door order.
    expect(config.missingTags).toEqual(WB_DOORS.flatMap((door) => doorLinks(door, TAGS).missing));
    for (const { product, cta, bare } of untagged) expect(config.missingTags).toContainEqual({ product, door: CTA_DOOR[cta], href: bare });
    expect(config).not.toHaveProperty('campaignLinks');
  });
});

test.describe('Asphalt Coven landing page (book one: no series-start door)', () => {
  test.use({ timezoneId: 'America/New_York' });
  const ASPHALT_COVEN = '/books/asphalt-coven/landing/';
  const AC_DOORS = ['asphalt-coven', 'sophie'] as const;

  test('two doors, six /dp/ buttons with their door as target, the pull quote and no reviews section', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${ASPHALT_COVEN}?utm_campaign=x`);
    expect(await page.locator('[data-door]').evaluateAll((els) => els.map((el) => (el as HTMLElement).dataset.door))).toEqual([...AC_DOORS]);
    await expect(page.locator('#doors h2')).toHaveText('Two ways in');
    for (const door of AC_DOORS) {
      expect(
        await page.locator(`[data-door="${door}"] [data-landing-cta]`).evaluateAll((els) =>
          els.map((el) => [(el as HTMLElement).dataset.landingCta, (el as HTMLElement).dataset.landingTarget]),
        ),
      ).toEqual(CTAS.map((cta) => [cta, door]));
    }
    const hrefs = await page.locator('[data-landing-cta]').evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).href));
    expect(hrefs).toEqual([
      linkFor('asphalt-coven', 'ku', 'https://www.amazon.com/dp/B0G4BFY4YS'),
      linkFor('asphalt-coven', 'buy', 'https://www.amazon.com/dp/B0G4BFY4YS'),
      linkFor('asphalt-coven', 'paperback', 'https://www.amazon.com/dp/1963906373'),
      boxSetKu(),
      boxSetBuy(),
      bookOnePrint(),
    ]);
    // Rule 33: every Amazon link is amazon.<tld>/dp/<ASIN>, with at most its Attribution tag
    expect(hrefs.every((h) => /^https:\/\/www\.amazon\.[a-z.]+\/dp\/[0-9A-Z]{10}(\?maas=[^&]+&ref_=aa_maas&tag=maas)?$/.test(h))).toBe(true);

    const pull = page.locator('section figure').first();
    await expect(pull).toContainText('not knowing they have magical powers');
    await expect(pull.locator('figcaption')).toHaveText('Jillian K, Goodreads review of Asphalt Coven');
    await expect(page.locator('[data-door="sophie"] figcaption')).toHaveText('Rhonda Jones, Amazon review of the Sophie Feegle box set');
    await expect(page.getByRole('heading', { name: 'What readers say' })).toHaveCount(0);
  });

  test('every one of the six buttons fires its event with its door as target', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${ASPHALT_COVEN}?utm_campaign=asphalt-coven-us-landing`);
    const expected = AC_DOORS.flatMap((door) =>
      CTAS.map((cta) => ({ page: 'asphalt-coven-landing', cta, source: 'organic', campaign: 'asphalt-coven-us-landing', target: door, utm_campaign: 'asphalt-coven-us-landing' })),
    );
    for (const door of AC_DOORS) {
      for (const cta of CTAS) await page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).click();
    }
    expect(await customEvents(page)).toEqual(expected.map((detail) => ['trackCustom', EVENTS[detail.cta], detail]));
  });
});

test.describe('production hosts only', () => {
  test.use({ timezoneId: 'America/New_York' });

  test('site-config names the production hosts, and the built page carries them', async ({ page }) => {
    await page.goto(WARD_BREAKER);
    const html = await page.content();
    const config = JSON.parse(html.match(/const landingConfig = (\{.*?\});\n/)![1]);
    expect(config.pixelHosts).toEqual(['gwendemarco.com', 'www.gwendemarco.com']);
  });

  test('on localhost nothing is sent: PageView, clicks and beacon are console lines', async ({ page }) => {
    const sent: string[] = [];
    page.on('request', (req) => {
      if (req.url().includes('facebook') || req.url() === CTR) sent.push(req.url());
    });
    const lines = pixelLines(page);
    await stubOutside(page, {
      production: false,
      edit: (config) => {
        config.ctrEndpoint = CTR;
      },
    });
    await page.goto(`${WARD_BREAKER}?utm_campaign=x`);
    await page.locator('[data-door="ward-breaker"] [data-landing-cta="ku"]').click();
    const detail = { page: 'ward-breaker-landing', cta: 'ku', source: 'organic', campaign: 'x', target: 'ward-breaker', utm_campaign: 'x' };
    await expect.poll(() => lines.length).toBe(3);
    expect(lines).toEqual([
      '[pixel] PageView {"campaign":"x"}',
      `[pixel] LandingClickKU ${JSON.stringify(detail)}`,
      `[pixel] beacon ${JSON.stringify({ metric: 'press.landing.ctr', ...detail })}`,
    ]);
    expect(await page.evaluate(() => typeof (window as any).fbq)).toBe('undefined');
    expect(sent).toEqual([]);
  });

  test('a production host sends and logs nothing to the console', async ({ page }) => {
    const lines = pixelLines(page);
    await stubOutside(page);
    await page.goto(`${WARD_BREAKER}?utm_campaign=x`);
    expect(await fbqCalls(page)).toContainEqual(['track', 'PageView', { campaign: 'x' }]);
    expect(lines).toEqual([]);
  });

});

// The small covers and share images are made by the build (src/integrations/landing-covers.mjs).
test.describe('landing covers', () => {
  for (const path of [BOX_SET, WARD_BREAKER, '/books/asphalt-coven/landing/']) {
    test(`${path}: its covers are the build's small copies, and they and the share image load`, async ({ page, request }) => {
      await stubOutside(page);
      await page.goto(path);
      const covers = await page.locator('img[src^="/images/landing/"]').evaluateAll((imgs) =>
        (imgs as HTMLImageElement[]).map((img) => ({ src: img.getAttribute('src'), loaded: img.complete && img.naturalWidth > 0 })),
      );
      expect(covers.length).toBeGreaterThan(1);
      for (const cover of covers) expect(cover, cover.src ?? '').toMatchObject({ loaded: true });
      const share = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(share).toMatch(/\/images\/landing\/[^/]+-og\.jpg$/);
      const response = await request.get(new URL(share!).pathname);
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toBe('image/jpeg');
    });
  }
});

// Kindle Unlimited is Kindle+ (2026-10-22). Readers see "Kindle+"; "formerly Kindle Unlimited"
// shows under a page's first mention through site-config kindlePlusFormerlyUntil. The
// code keeps "ku" (data-landing-cta, LandingClickKU, the tag door), tested above.
test.describe('Kindle+ (formerly Kindle Unlimited)', () => {
  const until = matter(readFileSync('src/content/settings/site-config.md', 'utf8')).data.kindlePlusFormerlyUntil;
  const formerly = showFormerlyKU(until);

  test('the site-config date switch: on through the whole of the date, off after it, off with no date', () => {
    expect(until).toBe('2027-01-20');
    expect(showFormerlyKU('2027-01-20', new Date('2026-10-27T12:00:00Z'))).toBe(true);
    expect(showFormerlyKU('2027-01-20', new Date('2027-01-20T23:59:59Z'))).toBe(true);
    expect(showFormerlyKU('2027-01-20', new Date('2027-01-21T00:00:00Z'))).toBe(false);
    expect(showFormerlyKU(new Date('2027-01-20'), new Date('2027-01-20T12:00:00Z'))).toBe(true);
    expect(showFormerlyKU(undefined)).toBe(false);
    expect(showFormerlyKU('soon')).toBe(false);
    expect(kindlePlusName(true)).toBe('Kindle+ (formerly Kindle Unlimited)');
    expect(kindlePlusName(false)).toBe('Kindle+');
  });

  // Text outside the formerly lines, readers' quoted reviews and blog-post cards (their
  // words stand as written, dated): no "Kindle Unlimited", no "KU".
  const readerText = (page: Page) =>
    page.locator('body').evaluate((body) => {
      const copy = body.cloneNode(true) as HTMLElement;
      copy.querySelectorAll('[data-formerly-ku], blockquote, a[href^="/blog/"], script, style').forEach((el) => el.remove());
      return copy.innerText || copy.textContent || '';
    });

  for (const [path, buttons] of [[BOX_SET, 3], [WARD_BREAKER, 3], ['/books/asphalt-coven/landing/', 2]] as const) {
    test(`${path}: every ku button reads "Read free with Kindle+" over "Free for Kindle+ members"${formerly ? ' · formerly Kindle Unlimited' : ''}; the meta description too`, async ({ page }) => {
      await stubOutside(page);
      await page.goto(path);
      const ku = page.locator('[data-landing-cta="ku"]');
      await expect(ku).toHaveCount(buttons);
      for (const text of await ku.allTextContents()) expect(text.trim()).toBe('Read free with Kindle+');
      const lines = await ku.evaluateAll((els) => els.map((el) => el.nextElementSibling?.textContent?.trim()));
      expect(lines).toEqual(Array(buttons).fill(formerly ? 'Free for Kindle+ members · formerly Kindle Unlimited' : 'Free for Kindle+ members'));
      await expect(page.locator('[data-formerly-ku]')).toHaveCount(formerly ? buttons : 0);
      expect(await page.locator('meta[name="description"]').getAttribute('content')).toContain(kindlePlusName(formerly));
      const text = await page.content();
      expect(text).toContain('LandingClickKU');
      expect(await readerText(page)).not.toMatch(/Kindle Unlimited|\bKU\b/);
    });
  }

  test('a book page: "Read free with Kindle+" with the formerly line under it; the home page and grids say Kindle+', async ({ page }) => {
    await page.goto('/books/ward-breaker/');
    const button = page.getByRole('link', { name: 'Read free with Kindle+' });
    await expect(button).toHaveCount(1);
    await expect(page.locator('[data-formerly-ku]')).toHaveCount(formerly ? 1 : 0);
    expect(await readerText(page)).not.toMatch(/Kindle Unlimited|\bKU\b/);
    for (const path of ['/', '/books/', '/series/sophie-feegle/']) {
      await page.goto(path);
      expect(await readerText(page), path).not.toMatch(/Kindle Unlimited|\bKU\b/);
      expect(await readerText(page), path).toContain('Kindle+');
    }
    await page.goto('/');
    await expect(page.locator('[data-formerly-ku]')).toHaveCount(formerly ? 1 : 0);
  });
});
