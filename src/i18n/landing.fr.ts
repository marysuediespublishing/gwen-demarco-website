// MACHINE-DRAFTED, NATIVE CHECK PENDING. French fixed copy for the /fr/ ad landing pages
// (Press suite_006 §2.3): a French reader checks it before the first FR ad (a step of the
// first run's approve card). Kindle Unlimited keeps its name in the French store.
import type { LandingStrings } from './landing';

const WORDS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'];
const word = (n: number) => WORDS[n] ?? String(n);
const KU = 'Kindle Unlimited';
// French puts a no-break space before ? : ! and inside « ».
const NBSP = ' ';

export const fr: LandingStrings = {
  lang: 'fr',
  locale: 'fr-FR',
  ku: KU,
  readFree: `Lire gratuitement avec ${KU}`,
  freeFor: `Gratuit pour les abonnés ${KU}`,
  buyKindle: (price) => (price ? `Acheter en version Kindle – ${price}` : 'Acheter en version Kindle'),
  buyBoxSet: (price) => (price ? `Acheter l’intégrale Kindle – ${price}` : 'Acheter l’intégrale Kindle'),
  buyPaperback: 'Acheter le livre broché',
  bookOnePaperback: 'Le tome 1 en broché',
  preferPaper: `Vous préférez le papier${NBSP}? Le tome 1 en broché${NBSP}→`,
  completeSeries: (n) => `La série complète · ${n} tomes`,
  booksInside: (n) => `Les ${word(n)} tomes réunis`,
  book: (n) => `Tome ${n}`,
  booksRange: (n) => `Tomes 1 à ${n}`,
  boxSet: 'Intégrale',
  isNew: 'Nouveauté',
  seriesAverage: (rating) => `${rating} de moyenne sur toute la série`,
  ratingsAcross: (count, n) => `${count} évaluations sur l’ensemble des ${n} tomes`,
  ratings: 'évaluations',
  ratingsAcrossLabel: (n) => `évaluations sur l’ensemble des ${n} tomes`,
  valueLine: (n, price, separate) => `${n} tomes pour ${price} – ${separate} à l’unité`,
  allOneClick: (n) => `Les ${word(n)} tomes, en un clic.`,
  waysIn: (n) => `${['Une porte', 'Deux portes', 'Trois portes'][n - 1] ?? `${n} portes`} d’entrée`,
  sameWorld: 'Tout se passe dans le même univers. À vous de choisir par où commencer.',
  readNow: (title) => `Lire ${title} maintenant`,
  startBoxSet: (series) => `Commencer avec l’intégrale ${series}`,
  startSeries: (title) => `Commencer la série avec ${title}`,
  // « À propos de Le … » would need the contraction (du), so the title leads.
  about: (title) => `${title} en quelques mots`,
  readersSay: 'Ce qu’en disent les lecteurs',
  readersSayAmazon: 'Ce qu’en disent les lecteurs sur Amazon',
  pickDoor: '↑ Choisir une porte',
  coverAlt: (title) => `${title} de Gwen DeMarco`,
  coverOf: (title) => `Couverture${NBSP}: ${title}`,
  boxSetCoverAlt: (_series, n, title) => `${title}, tomes 1 à ${n}, de Gwen DeMarco`,
  availableAtAmazon: 'Disponible sur Amazon',
  reviewCite: (reviewer) => `${reviewer}, avis sur Amazon.fr`,
  boxSetTitle: (title, n) => `${title}${NBSP}: les ${n} tomes | Gwen DeMarco`,
  boxSetDescription: (title, n, ku) => `${title}${NBSP}: les ${word(n)} tomes réunis en une intégrale.${ku ? ` Gratuit pour les abonnés ${KU}.` : ''}`,
  bookTitle: (title, series, order) => `${title}${series ? `${NBSP}: ${series}, tome ${order}` : ''} | Gwen DeMarco`,
  bookDescription: (hook, ku, seriesStart) =>
    `${hook}${ku ? ` Lisez-le gratuitement avec ${KU}${seriesStart ? ', ou commencez la série au tome 1' : ''}.` : ''}`,
  consent: {
    text: 'Nous utilisons un pixel Meta pour mesurer nos publicités.',
    cookiePolicy: 'Politique relative aux cookies',
    allow: 'Accepter',
    deny: 'Non merci',
  },
  chrome: { skip: 'Aller au contenu', privacy: 'Confidentialité', cookies: 'Cookies', contact: 'Contact' },
};
