// Shared by the ad landing pages (/series/<slug>/box-set and /books/<slug>/landing).
// Pure functions only, so the tests can import them without Astro.

export type CtaKind = 'ku' | 'buy' | 'paperback';
export type CtaLinks = Record<CtaKind, string>;

/** Amazon Attribution tags per product and door (Press ad_desk_007): site-config
 *  `attributionTags.<market>.<product slug>.<door>`, each the whole Attribution URL. */
export type TagDoor = 'ku' | 'kindle' | 'print';
export type AttributionTags = Record<string, Record<string, Partial<Record<TagDoor, string>>>>;

/** The tag door each button takes: KU's, Kindle's (the Buy button), Print's. */
export const CTA_DOOR: Record<CtaKind, TagDoor> = { ku: 'ku', buy: 'kindle', paperback: 'print' };

/** A door's Amazon pages and the products they are: `product` for the Kindle page
 *  (KU and Buy), `printProduct` for the paperback (a box set's is book one's). */
export interface DoorBase {
  target: string;
  kindleUrl: string;
  paperbackUrl: string;
  product: string;
  printProduct: string;
}

/** A button with no tag: it links to the bare product page. */
export interface MissingTag {
  product: string;
  door: TagDoor;
  href: string;
}

// Amazon Attribution: a tag may be the whole Attribution URL; only its query string is used.
export const withTag = (href: string, tag?: string) => {
  const query = tag?.trim().replace(/^[^?]*\?/, '');
  if (!query) return href;
  const url = new URL(href);
  new URLSearchParams(query).forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
};

/** The ASIN of an Amazon `/dp/<ASIN>` link, or ''. */
export const dpAsin = (href?: string) => /\/dp\/([0-9A-Z]{10})(?=[/?#]|$)/i.exec(href ?? '')?.[1]?.toUpperCase() ?? '';

const MARKETS: Record<string, string> = {
  'www.amazon.com': 'US',
  'www.amazon.co.uk': 'UK',
  'www.amazon.ca': 'CA',
  'www.amazon.de': 'DE',
  'www.amazon.fr': 'FR',
  'www.amazon.it': 'IT',
  'www.amazon.es': 'ES',
};

/** The storefront a link goes to, as Press names it ('US'), or ''. */
export const marketOf = (href: string) => {
  try {
    return MARKETS[new URL(href).hostname.toLowerCase()] ?? '';
  } catch {
    return '';
  }
};

/** The tag for one button: the product's tag for the door, in the link's storefront,
 *  and only when the tag is for the button's own product page. */
export const tagFor = (tags: AttributionTags | undefined, product: string, door: TagDoor, href: string) => {
  const tag = tags?.[marketOf(href)]?.[product]?.[door]?.trim();
  if (!tag) return undefined;
  const asin = dpAsin(tag);
  return !asin || asin === dpAsin(href) ? tag : undefined;
};

/** A door's three links, each with its (book, door) tag, and the buttons that have none. */
export const doorLinks = (door: DoorBase, tags?: AttributionTags): { links: CtaLinks; missing: MissingTag[] } => {
  const missing: MissingTag[] = [];
  const link = (cta: CtaKind) => {
    const href = cta === 'paperback' ? door.paperbackUrl : door.kindleUrl;
    const product = cta === 'paperback' ? door.printProduct : door.product;
    const tag = tagFor(tags, product, CTA_DOOR[cta], href);
    if (!tag) missing.push({ product, door: CTA_DOOR[cta], href });
    return withTag(href, tag);
  };
  return { links: { ku: link('ku'), buy: link('buy'), paperback: link('paperback') }, missing };
};

/** "sophie-boxset · KU, sophie-and-the-odd-ones · Print": the build's missing-tag line. */
export const missingLine = (missing: MissingTag[]) =>
  missing.map((m) => `${m.product} · ${{ ku: 'KU', kindle: 'Kindle', print: 'Print' }[m.door]}`).join(', ');

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
