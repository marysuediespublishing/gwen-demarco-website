import { expect, test, type Page } from '@playwright/test';
import { buildCampaignLinks, doorLinks, withTag } from '../../src/utils/landing';

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
const SOPHIE_LPV_TAG = 'maas=maas_adg_D5817D714E2827419DF4FB3D60036461_afap_abs&ref_=aa_maas&tag=maas';
const SOPHIE_PAPERBACK_TAG = 'maas=maas_adg_1E93BCBC747961A6E7FE8EBE1F6CF616_afap_abs&ref_=aa_maas&tag=maas';

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
    expect(withTag('https://www.amazon.com/dp/B0HJGDMMLM', `https://www.amazon.com/dp/OTHER?${SOPHIE_LPV_TAG}`)).toBe(
      `https://www.amazon.com/dp/B0HJGDMMLM?${SOPHIE_LPV_TAG}`,
    );
    expect(withTag('https://www.amazon.com/dp/B0HJGDMMLM', '  ')).toBe('https://www.amazon.com/dp/B0HJGDMMLM');
  });

  test('rows go to the door their target names; no target is the box-set page', () => {
    const doors = [
      { target: 'ward-breaker', kindleUrl: 'https://www.amazon.com/dp/WB', paperbackUrl: 'https://www.amazon.com/dp/WBP' },
      { target: 'sophie', kindleUrl: 'https://www.amazon.com/dp/BS', paperbackUrl: 'https://www.amazon.com/dp/SP' },
    ];
    const links = buildCampaignLinks(
      [
        { campaign: 'wb', target: 'ward-breaker', tag: 'maas=a', paperbackTag: 'maas=b' },
        { campaign: 'wb', target: 'sophie', tag: '', paperbackTag: 'maas=c' },
        { campaign: 'box', tag: 'maas=z' },
        { campaign: 'wb', target: 'nobody', tag: 'maas=x' },
      ],
      doors,
    );
    expect(links).toEqual({
      wb: {
        'ward-breaker': { ku: 'https://www.amazon.com/dp/WB?maas=a', buy: 'https://www.amazon.com/dp/WB?maas=a', paperback: 'https://www.amazon.com/dp/WBP?maas=b' },
        sophie: { ku: 'https://www.amazon.com/dp/BS', buy: 'https://www.amazon.com/dp/BS', paperback: 'https://www.amazon.com/dp/SP?maas=c' },
      },
    });
    const boxSet = { target: '', kindleUrl: 'https://www.amazon.com/dp/BS', paperbackUrl: 'https://www.amazon.com/dp/SP', defaultTag: 'maas=d' };
    expect(buildCampaignLinks([{ campaign: 'box', tag: '' }, { campaign: 'wb', target: 'sophie', tag: 'maas=c' }], [boxSet])).toEqual({
      box: { '': doorLinks(boxSet) },
    });
  });
});

test.describe('box-set page', () => {
  test.use({ timezoneId: 'America/Chicago' });

  test('a known campaign gets its own tags; clicks fire the events with campaign and no target', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${BOX_SET}?utm_campaign=sophie-feegle-set-us-landing&utm_source=meta`);
    const ku = page.locator('aside [data-landing-cta="ku"]');
    await expect(ku).toHaveAttribute('href', `https://www.amazon.com/dp/B0CK55M553?${SOPHIE_LPV_TAG}`);
    await expect(page.locator('aside [data-landing-cta="paperback"]')).toHaveAttribute(
      'href',
      `https://www.amazon.com/dp/B08CWM839H?${SOPHIE_PAPERBACK_TAG}`,
    );
    expect(await fbqCalls(page)).toContainEqual(['track', 'PageView', { campaign: 'sophie-feegle-set-us-landing' }]);

    for (const cta of CTAS) await page.locator(`aside [data-landing-cta="${cta}"]`).click();
    expect(await customEvents(page)).toEqual(
      CTAS.map((cta) => [
        'trackCustom',
        EVENTS[cta],
        { page: 'sophie-feegle-box-set', cta, source: 'ad', campaign: 'sophie-feegle-set-us-landing' },
      ]),
    );
  });

  test('an unknown campaign keeps the default tags', async ({ page }) => {
    await stubOutside(page, {
      edit: (config) => {
        config.campaignLinks.other = { '': { ku: 'https://x.test/ku', buy: 'https://x.test/buy', paperback: 'https://x.test/p' } };
      },
    });
    await page.goto(`${BOX_SET}?utm_campaign=x`);
    await expect(page.locator('aside [data-landing-cta="buy"]')).toHaveAttribute('href', `https://www.amazon.com/dp/B0CK55M553?${SOPHIE_LPV_TAG}`);
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

  test('three doors in order, three buttons each, plain links by default', async ({ page }) => {
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
    expect(await href('ward-breaker', 'ku')).toBe('https://www.amazon.com/dp/B0HJGDMMLM');
    expect(await href('ward-breaker', 'buy')).toBe('https://www.amazon.com/dp/B0HJGDMMLM');
    expect(await href('series-start', 'ku')).toBe('https://www.amazon.com/dp/B0CT9ZX865');
    expect(await href('series-start', 'paperback')).toBe('https://www.amazon.com/dp/1963906004');
    expect(await href('sophie', 'buy')).toBe('https://www.amazon.com/dp/B0CK55M553');
    expect(await href('sophie', 'paperback')).toBe('https://www.amazon.com/dp/B08CWM839H');
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
      CTAS.map((cta) => ({ page: 'ward-breaker-landing', cta, source: 'organic', campaign: 'x', target: door })),
    );
    for (const door of DOORS) {
      for (const cta of CTAS) await page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).click();
    }
    expect(await customEvents(page)).toEqual(expected.map((detail) => ['trackCustom', EVENTS[detail.cta], detail]));
    await expect.poll(() => beacons.length).toBe(9);
    expect(beacons).toEqual(expected.map((detail) => ({ metric: 'press.landing.ctr', ...detail })));
  });

  test("each door takes its own campaign's tags; other doors and campaigns are untouched", async ({ page }) => {
    await stubOutside(page, {
      edit: (config) => {
        config.campaignLinks['wb-test'] = {
          'ward-breaker': { ku: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=wb', buy: 'https://www.amazon.com/dp/B0HJGDMMLM?maas=wb', paperback: 'https://p.test/wb' },
          sophie: { ku: 'https://www.amazon.com/dp/B0CK55M553?maas=s', buy: 'https://www.amazon.com/dp/B0CK55M553?maas=s', paperback: 'https://p.test/s' },
        };
      },
    });
    await page.goto(`${WARD_BREAKER}?utm_campaign=wb-test`);
    const href = (door: string, cta: string) => page.locator(`[data-door="${door}"] [data-landing-cta="${cta}"]`).getAttribute('href');
    expect(await href('ward-breaker', 'buy')).toBe('https://www.amazon.com/dp/B0HJGDMMLM?maas=wb');
    expect(await href('ward-breaker', 'paperback')).toBe('https://p.test/wb');
    expect(await href('series-start', 'ku')).toBe('https://www.amazon.com/dp/B0CT9ZX865');
    expect(await href('sophie', 'ku')).toBe('https://www.amazon.com/dp/B0CK55M553?maas=s');
  });

  test('the box-set defaults never reach the book page', async ({ page }) => {
    await stubOutside(page);
    await page.goto(`${WARD_BREAKER}?utm_campaign=sophie-feegle-set-us-landing`);
    const hrefs = await page.locator('[data-landing-cta]').evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).href));
    expect(hrefs.filter((h) => h.includes('maas='))).toEqual([]);
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
      'https://www.amazon.com/dp/B0G4BFY4YS',
      'https://www.amazon.com/dp/B0G4BFY4YS',
      'https://www.amazon.com/dp/1963906373',
      'https://www.amazon.com/dp/B0CK55M553',
      'https://www.amazon.com/dp/B0CK55M553',
      'https://www.amazon.com/dp/B08CWM839H',
    ]);
    // Rule 33: every Amazon link is amazon.<tld>/dp/<ASIN>
    expect(hrefs.every((h) => /^https:\/\/www\.amazon\.[a-z.]+\/dp\/[0-9A-Z]{10}$/.test(h))).toBe(true);

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
      CTAS.map((cta) => ({ page: 'asphalt-coven-landing', cta, source: 'organic', campaign: 'asphalt-coven-us-landing', target: door })),
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
    const detail = { page: 'ward-breaker-landing', cta: 'ku', source: 'organic', campaign: 'x', target: 'ward-breaker' };
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
