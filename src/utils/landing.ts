// Shared by the ad landing pages (/series/<slug>/box-set and /books/<slug>/landing).
// Pure functions only, so the tests can import them without Astro.

export type CtaKind = 'ku' | 'buy' | 'paperback';
export type CtaLinks = Record<CtaKind, string>;
/** campaign (utm_campaign) → target ('' for a page without doors) → the three links */
export type CampaignLinks = Record<string, Record<string, CtaLinks>>;

export interface AttributionRow {
  campaign?: string;
  target?: string;
  tag?: string;
  paperbackTag?: string;
}

/** A door's Amazon pages and the Attribution tags it gets when the campaign has none. */
export interface DoorBase {
  target: string;
  kindleUrl: string;
  paperbackUrl: string;
  defaultTag?: string;
  defaultPaperbackTag?: string;
}

// Amazon Attribution: a tag may be the whole Attribution URL; only its query string is used.
export const withTag = (href: string, tag?: string) => {
  const query = tag?.trim().replace(/^[^?]*\?/, '');
  if (!query) return href;
  const url = new URL(href);
  new URLSearchParams(query).forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
};

export const doorLinks = (door: DoorBase, tag?: string, paperbackTag?: string): CtaLinks => {
  const kindle = withTag(door.kindleUrl, tag?.trim() || door.defaultTag);
  return {
    ku: kindle,
    buy: kindle,
    paperback: withTag(door.paperbackUrl, paperbackTag?.trim() || door.defaultPaperbackTag),
  };
};

// Per-campaign links. A row applies to the door whose target it names; a row with no
// target applies to a page without doors (target ''). An empty tag falls back to the
// door's default.
export const buildCampaignLinks = (rows: AttributionRow[], doors: DoorBase[]): CampaignLinks => {
  const links: CampaignLinks = {};
  for (const row of rows) {
    const campaign = row.campaign?.trim();
    if (!campaign) continue;
    const door = doors.find((d) => d.target === (row.target?.trim() ?? ''));
    if (!door) continue;
    links[campaign] ??= {};
    links[campaign][door.target] = doorLinks(door, row.tag, row.paperbackTag);
  }
  return links;
};

export const money = (value?: string) => {
  const amount = value?.trim().replace(/^\$/, '');
  return amount ? `$${amount}` : '';
};

export const amazonDp = (asin?: string) => (asin?.trim() ? `https://www.amazon.com/dp/${asin.trim()}` : '');

export const amazonSearch = (terms: string, paperback = false) =>
  `https://www.amazon.com/s?${new URLSearchParams({ k: terms, i: paperback ? 'stripbooks' : 'digital-text' })}`;

// Small copies of the covers live in /images/landing so the page stays light on a phone.
export const landingImage = (src: string, width: number) =>
  src.replace(/^\/images\/(.+)\.(jpe?g|png)$/, `/images/landing/$1-${width}.jpg`);

export interface Review {
  title: string;
  body: string;
  reviewer: string;
  bookId?: string;
}

// Testimonial quotes are "Review title\n\nReview body", or just a body (a long first
// line is a paragraph, not a title).
export const toReview = (
  testimonials: { id: string; data: { quote: string; reviewerName: string; bookTitle?: string } }[],
  id: string,
  excerpt?: string,
): Review | undefined => {
  const t = testimonials.find((entry) => entry.id === id);
  if (!t) return undefined;
  const [first, ...rest] = t.data.quote.trim().split('\n');
  const title = rest.length && first.trim().length <= 100 ? first.trim() : '';
  return {
    title,
    body: excerpt ?? (title ? rest.join(' ') : t.data.quote).replace(/\s+/g, ' ').trim(),
    reviewer: t.data.reviewerName,
    bookId: t.data.bookTitle,
  };
};
