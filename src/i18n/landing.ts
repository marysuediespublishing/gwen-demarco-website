// The ad landing pages' fixed copy, one table per language (landing.en.ts, landing.de.ts,
// landing.fr.ts). The product's own words (title, series line, hook, blurb, price) come
// from the content: English from the book or series, German and French from its
// `editions.<lang>` block. Pure, so the tests can import it without Astro.
import type { LandingLang } from '../utils/landing';

export interface LandingStrings {
  lang: LandingLang;
  /** Intl locale for numbers on the page */
  locale: string;
  /** The subscription programme's name on the KU button */
  ku: string;
  readFree: string;
  freeFor: string;
  /** The small "formerly Kindle Unlimited" line beside freeFor, through site-config
   *  kindlePlusFormerlyUntil (src/utils/kindle-plus.ts) */
  formerlyKU: string;
  buyKindle: (price?: string) => string;
  buyBoxSet: (price?: string) => string;
  buyPaperback: string;
  bookOnePaperback: string;
  preferPaper: string;
  completeSeries: (books: number) => string;
  booksInside: (books: number) => string;
  book: (order: number | string) => string;
  booksRange: (books: number) => string;
  boxSet: string;
  isNew: string;
  seriesAverage: (rating: string) => string;
  ratingsAcross: (count: string, books: number) => string;
  ratings: string;
  ratingsAcrossLabel: (books: number) => string;
  valueLine: (books: number, price: string, separate: string) => string;
  allOneClick: (books: number) => string;
  waysIn: (doors: number) => string;
  sameWorld: string;
  readNow: (title: string) => string;
  startBoxSet: (series: string) => string;
  startSeries: (title: string) => string;
  about: (title: string) => string;
  readersSay: string;
  readersSayAmazon: string;
  pickDoor: string;
  coverAlt: (title: string) => string;
  coverOf: (title: string) => string;
  boxSetCoverAlt: (series: string, books: number, title: string) => string;
  availableAtAmazon: string;
  reviewCite: (reviewer: string) => string;
  boxSetTitle: (title: string, books: number) => string;
  boxSetDescription: (title: string, books: number, ku: boolean, formerly?: boolean) => string;
  bookTitle: (title: string, series?: string, order?: number) => string;
  bookDescription: (hook: string, ku: boolean, seriesStart: boolean, formerly?: boolean) => string;
  consent: { text: string; cookiePolicy: string; allow: string; deny: string };
  chrome: { skip: string; privacy: string; cookies: string; contact: string };
}

/** A rating as the language writes it: 4.7, 4,7. */
export const formatRating = (s: LandingStrings, rating: number) =>
  s.lang === 'en' ? rating.toFixed(1) : rating.toLocaleString(s.locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** A count as the language writes it: 11,720, 11.720, 11 720 (French's narrow no-break
 *  space is not in the site's font, so it is a plain no-break space). */
export const formatCount = (s: LandingStrings, count: number) => count.toLocaleString(s.locale).replace(/\u202f/g, '\u00a0');
