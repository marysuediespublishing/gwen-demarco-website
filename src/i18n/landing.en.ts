// English fixed copy for the ad landing pages: the copy the English pages have always
// carried, word for word (the English pages must not change). See landing.ts. The English
// pages keep their own title and description lines (with the Kindle+ "formerly" window), so
// boxSetTitle, boxSetDescription and bookDescription here only complete the table and the
// English-copy check the German and French pages are tested against.
import { FORMERLY_KU, KINDLE_PLUS, kindlePlusName } from '../utils/kindle-plus';
import type { LandingStrings } from './landing';

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const word = (n: number) => WORDS[n] ?? String(n);
const Word = (n: number) => word(n).replace(/^./, (c) => c.toUpperCase());

export const en: LandingStrings = {
  lang: 'en',
  locale: 'en-US',
  ku: KINDLE_PLUS,
  readFree: `Read free with ${KINDLE_PLUS}`,
  freeFor: `Free for ${KINDLE_PLUS} members`,
  formerlyKU: FORMERLY_KU,
  buyKindle: (price) => (price ? `Buy for Kindle — ${price}` : 'Buy for Kindle'),
  buyBoxSet: (price) => (price ? `Buy the Kindle box set — ${price}` : 'Buy the Kindle box set'),
  buyPaperback: 'Buy the paperback',
  bookOnePaperback: 'Book 1 in paperback',
  preferPaper: 'Prefer paper? Book 1 in paperback →',
  completeSeries: (n) => `The complete series · ${n} books`,
  booksInside: (n) => `All ${word(n)} books inside`,
  book: (n) => `Book ${n}`,
  booksRange: (n) => `Books 1–${n}`,
  boxSet: 'Box set',
  isNew: 'New',
  seriesAverage: (rating) => `${rating} average across the series`,
  ratingsAcross: (count, n) => `${count} ratings across all ${n} books`,
  ratings: 'ratings',
  ratingsAcrossLabel: (n) => `ratings across all ${n} books`,
  valueLine: (n, price, separate) => `${n} books for ${price} — ${separate} bought separately`,
  allOneClick: (n) => `All ${word(n)} books, one click.`,
  waysIn: (n) => `${['One way', 'Two ways', 'Three ways'][n - 1] ?? `${n} ways`} in`,
  sameWorld: 'All in the same world. Pick where you want to start.',
  readNow: (title) => `Read ${title} now`,
  startBoxSet: (series) => `Start with the ${series} box set`,
  startSeries: (title) => `Start the series with ${title}`,
  about: (title) => `About ${title}`,
  readersSay: 'What readers say',
  readersSayAmazon: 'What readers say on Amazon',
  pickDoor: '↑ Pick a door',
  coverAlt: (title) => `${title} by Gwen DeMarco`,
  coverOf: (title) => `${title} cover`,
  boxSetCoverAlt: (series, n) => `${series} Box Set, Books 1–${n} by Gwen DeMarco`,
  availableAtAmazon: 'Available at Amazon',
  reviewCite: (reviewer) => `${reviewer}, Amazon review`,
  boxSetTitle: (title, n) => `${title}: All ${Word(n)} Books | Gwen DeMarco`,
  boxSetDescription: (title, n, ku, formerly = false) =>
    `${title}: all ${word(n)} books in one box set.${ku ? ` Free for ${kindlePlusName(formerly)} members.` : ''}`,
  bookTitle: (title, series, order) => `${title}${series ? `: ${series} Book ${order}` : ''} | Gwen DeMarco`,
  bookDescription: (hook, ku, seriesStart, formerly = false) =>
    `${hook}${ku ? ` Read it free with ${kindlePlusName(formerly)}${seriesStart ? ', or start the series from book one' : ''}.` : ''}`,
  consent: { text: 'We use a Meta pixel to measure our ads.', cookiePolicy: 'Cookie policy', allow: 'Allow', deny: 'No thanks' },
  chrome: { skip: 'Skip to main content', privacy: 'Privacy', cookies: 'Cookies', contact: 'Contact' },
};
