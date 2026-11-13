// A product's edition in a landing page's language: the `editions.<lang>` block of a book
// or series (src/content.config.ts), or none, in which case no /<lang>/ page is built for it.
//
// LANDING_EDITIONS_FIXTURE (a JSON file path) is for the e2e build only: it adds editions
// and Attribution tags that the content does not carry, so the DE/FR templates are tested
// before Books has the editions (tests/fixtures/landing-editions.json). The content always
// wins over the fixture; a production build never sets it.
import { readFileSync } from 'node:fs';
import type { AttributionTags, LandingLang } from './landing';

export interface Edition {
  asin: string;
  paperbackAsin?: string;
  title: string;
  /** Required on a series (box-set) edition; a book's own landing page needs it too. */
  blurb?: string;
  kuEnrolled: boolean;
  cover?: string;
  seriesName?: string;
  hook?: string;
  tagline?: string;
  price?: string;
  separatePrice?: string;
  reviews: { title?: string; body: string; reviewer: string }[];
  doors?: Partial<Record<'book' | 'seriesStart' | 'sameWorld', { title?: string; line?: string }>>;
}
export type Editions = Partial<Record<Exclude<LandingLang, 'en'>, Edition>>;

interface Fixture {
  books?: Record<string, Editions>;
  series?: Record<string, Editions>;
  attributionTags?: AttributionTags;
}

let fixture: Fixture | undefined;
const loadFixture = (): Fixture => {
  if (fixture) return fixture;
  const path = process.env.LANDING_EDITIONS_FIXTURE;
  fixture = path ? (JSON.parse(readFileSync(path, 'utf8')) as Fixture) : {};
  for (const kind of ['books', 'series'] as const) {
    for (const editions of Object.values(fixture[kind] ?? {})) {
      for (const e of Object.values(editions)) e.reviews ??= [];
    }
  }
  return fixture;
};

/** The edition of a book or series in `lang`, or undefined (English has none: it is the original). */
export const editionOf = (
  kind: 'books' | 'series',
  entry: { id: string; data: { editions?: Editions } },
  lang: LandingLang,
): Edition | undefined => {
  if (lang === 'en') return undefined;
  return entry.data.editions?.[lang] ?? loadFixture()[kind]?.[entry.id]?.[lang];
};

/** Site-config's Attribution tags, with the fixture's for any market × product it lacks. */
export const withFixtureTags = (tags?: AttributionTags): AttributionTags | undefined => {
  const extra = loadFixture().attributionTags;
  if (!extra) return tags;
  const merged: AttributionTags = { ...(tags ?? {}) };
  for (const [market, products] of Object.entries(extra)) {
    merged[market] = { ...products, ...(merged[market] ?? {}) };
  }
  return merged;
};

/** A book's edition that its own /<lang>/ landing page can be built from: one with a blurb. */
export const landingEditionOf = (
  book: { id: string; data: { editions?: Editions } },
  lang: LandingLang,
): Edition | undefined => {
  const e = editionOf('books', book, lang);
  return e?.blurb?.trim() ? e : undefined;
};
