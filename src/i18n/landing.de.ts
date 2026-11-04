// MACHINE-DRAFTED, NATIVE CHECK PENDING. German fixed copy for the /de/ ad landing pages
// (Press suite_006 §2.3): a German reader checks it before the first DE ad (a step of the
// first run's approve card). Kindle Unlimited keeps its name in the German store.
import type { LandingStrings } from './landing';

const WORDS = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
const word = (n: number) => WORDS[n] ?? String(n);
const KU = 'Kindle Unlimited';

export const de: LandingStrings = {
  lang: 'de',
  locale: 'de-DE',
  ku: KU,
  readFree: `Gratis lesen mit ${KU}`,
  freeFor: 'Für Kindle-Unlimited-Abonnenten kostenlos',
  buyKindle: (price) => (price ? `Als Kindle-E-Book kaufen – ${price}` : 'Als Kindle-E-Book kaufen'),
  buyBoxSet: (price) => (price ? `Kindle-Sammelband kaufen – ${price}` : 'Kindle-Sammelband kaufen'),
  buyPaperback: 'Taschenbuch kaufen',
  bookOnePaperback: 'Band 1 als Taschenbuch',
  preferPaper: 'Lieber auf Papier? Band 1 als Taschenbuch\u00a0→',
  completeSeries: (n) => `Die komplette Reihe · ${n} Bände`,
  booksInside: (n) => `Alle ${word(n)} Bände im Sammelband`,
  book: (n) => `Band ${n}`,
  booksRange: (n) => `Bände 1–${n}`,
  boxSet: 'Sammelband',
  isNew: 'Neu',
  seriesAverage: (rating) => `Im Schnitt ${rating} Sterne über die ganze Reihe`,
  ratingsAcross: (count, n) => `${count} Bewertungen für alle ${n} Bände zusammen`,
  ratings: 'Bewertungen',
  ratingsAcrossLabel: (n) => `Bewertungen für alle ${n} Bände zusammen`,
  valueLine: (n, price, separate) => `${n} Bände für ${price} – einzeln ${separate}`,
  allOneClick: (n) => `Alle ${word(n)} Bände mit einem Klick.`,
  waysIn: (n) => `${['Ein Weg', 'Zwei Wege', 'Drei Wege'][n - 1] ?? `${n} Wege`} in die Geschichte`,
  sameWorld: 'Alles spielt in derselben Welt. Such dir aus, wo du anfängst.',
  readNow: (title) => `${title} jetzt lesen`,
  startBoxSet: (series) => `Mit dem Sammelband ${series} beginnen`,
  startSeries: (title) => `Die Reihe mit ${title} beginnen`,
  about: (title) => `Über ${title}`,
  readersSay: 'Das sagen Leserinnen und Leser',
  readersSayAmazon: 'Das sagen Leserinnen und Leser auf Amazon',
  pickDoor: '↑ Wähle deinen Einstieg',
  coverAlt: (title) => `${title} von Gwen DeMarco`,
  coverOf: (title) => `Titelbild: ${title}`,
  boxSetCoverAlt: (_series, n, title) => `${title}, Bände 1–${n}, von Gwen DeMarco`,
  availableAtAmazon: 'Erhältlich bei Amazon',
  reviewCite: (reviewer) => `${reviewer}, Rezension auf Amazon.de`,
  boxSetTitle: (title, n) => `${title}: alle ${n} Bände | Gwen DeMarco`,
  boxSetDescription: (title, n, ku) => `${title}: alle ${word(n)} Bände in einem Sammelband.${ku ? ' Für Kindle-Unlimited-Abonnenten kostenlos.' : ''}`,
  bookTitle: (title, series, order) => `${title}${series ? `: ${series}, Band ${order}` : ''} | Gwen DeMarco`,
  bookDescription: (hook, ku, seriesStart) =>
    `${hook}${ku ? ` Gratis lesen mit ${KU}${seriesStart ? ' – oder die Reihe mit Band 1 beginnen' : ''}.` : ''}`,
  consent: {
    text: 'Wir messen unsere Anzeigen mit einem Meta-Pixel.',
    cookiePolicy: 'Cookie-Richtlinie',
    allow: 'Zulassen',
    deny: 'Nein, danke',
  },
  chrome: { skip: 'Zum Inhalt springen', privacy: 'Datenschutz', cookies: 'Cookies', contact: 'Kontakt' },
};
