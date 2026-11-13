# landing_002 — German and French landing pages

**Status:** built, with the Sophie box set's real German and French editions (signals #6966) · **Spec:** of-tomorrow-press `specs/suite_006.md` §2 (card 1) · **Reads with:** `landing_001.md` (the template, its doors and events)

The box-set page and the book landing template also build at `/{de|fr}/…`, for each product that has an edition in that language (`editions.<lang>` in its frontmatter). They take the edition's words, the market's storefront and the market's Attribution tags. The English pages stay where they were. How it works: README "German and French landing pages".

## Rules (each one has a test in `tests/e2e/landing.spec.ts`)

1. A `/de/` page links only to `www.amazon.de` and a `/fr/` page only to `www.amazon.fr`. A button takes its product's tag from `attributionTags.DE` / `.FR`, and gets the plain link when there is none.
2. The KU button is there only when the edition's `kuEnrolled` is true, door by door on a book page.
3. On a book page, a door whose product has no edition in the language is left out.
4. No string from the English table (`src/i18n/landing.en.ts`) appears on a German or French page, and no English reader quote either. "Kindle+" is the one name all three tables share (`KINDLE_PLUS`, the rename reached amazon.de and amazon.fr on 2026-10-22), and the "formerly" line is in the page's language (ehemals / anciennement Kindle Unlimited) through `kindlePlusFormerlyUntil`.
5. `hreflang` links the three versions of a page to each other (with `x-default` pointing at English), and the sitemap lists all three.
6. Click events and the `press.landing.ctr` beacon carry `market`.
7. The English pages build the same HTML as before, compared as `tests/lib/normalize-html.mjs` says.

## Walk

**Task:** see where each button on the box-set page goes, in German and then in French, without buying anything. **Persona:** a reader in Berlin, then one in Paris, arriving from a Meta ad. The build is the production one (no fixture): the content's real editions, B0GNPKZMXN "Sophie Feegle: Sammelband" and B0GNPL1PK7 "Sophie Feegle : L'Intégrale", both in KU, with their own covers. site-config has no DE or FR tags yet, so every button is the plain storefront link (the tagged DE case is in the e2e tests, from the fixture's made-up DE tags).

| Step | Does | Sees | Frame |
| --- | --- | --- | --- |
| de 0 | Opens `/de/series/sophie-feegle/box-set/?utm_campaign=sophie-feegle-set-de-landing&utm_source=meta` (Europe/Berlin) | The consent bar in German (Zulassen / Nein, danke), the German box-set cover, "Sophie Feegle: Sammelband", the German hook and tagline, "Im Schnitt 4,7 Sterne", "Alle fünf Bände im Sammelband" with "Band 1 · Sophie und die Sonderlinge" and its German cover | `assets/002/de-00-open.png` |
| de 1 | Hovers "Gratis lesen mit Kindle+" (under it: "Für Kindle+-Mitglieder kostenlos · ehemals Kindle Unlimited") | → `https://www.amazon.de/dp/B0GNPKZMXN` · LandingClickKU {market: DE} | `de-01-ku.png` |
| de 2 | Hovers "Kindle-Sammelband kaufen" (no price: the edition has none yet) | → `https://www.amazon.de/dp/B0GNPKZMXN` · LandingClickBuy {market: DE} | `de-02-buy.png` |
| de 3 | Hovers "Lieber auf Papier? Band 1 als Taschenbuch →" | → `https://www.amazon.de/s?k=Sophie+und+die+Sonderlinge+Gwen+DeMarco&i=stripbooks` (Books has no German paperback ASIN: a search) · LandingClickPaperback {market: DE} | `de-03-paperback.png` |
| fr 0 | Opens `/fr/series/sophie-feegle/box-set/?utm_campaign=sophie-feegle-set-fr-landing&utm_source=meta` (Europe/Paris) | The consent bar in French (Accepter / Non merci), the French cover, "Sophie Feegle : L’Intégrale", "11 720 évaluations", "Les cinq tomes réunis" with "Tome 1 · Sophie et les Singuliers" | `fr-00-open.png` |
| fr 1 | Hovers "Lire gratuitement avec Kindle+" ("Gratuit pour les membres Kindle+ · anciennement Kindle Unlimited") | → `https://www.amazon.fr/dp/B0GNPL1PK7` · LandingClickKU {market: FR} | `fr-01-ku.png` |
| fr 2 | Hovers "Acheter l’intégrale Kindle" | → `https://www.amazon.fr/dp/B0GNPL1PK7` · LandingClickBuy {market: FR} | `fr-02-buy.png` |
| fr 3 | Hovers "Vous préférez le papier ? Le tome 1 en broché →" | → `https://www.amazon.fr/s?k=Sophie+et+les+Singuliers+Gwen+DeMarco&i=stripbooks` · LandingClickPaperback {market: FR} | `fr-03-paperback.png` |
| end | Clicks nothing | The URL is unchanged | `walk.mp4` |

Recording: `assets/002/walk.mp4`. Script: `assets/002/walk.mjs`.

**Still open:** the box set's German and French hook, tagline and blurb are machine-drafted from the English series description (marked in `src/content/series/sophie-feegle.md`). Amazon's own blurbs replace them when someone copies them in, because amazon.de and amazon.fr refuse automated fetches. The five books' editions have no blurbs, so they get no landing pages of their own. Books has no German or French paperback ASINs, so the paperback link is a storefront search. No prices yet. The German and French tables and the drafts need a native check before the first ad. The box-set covers are Books' `coverSourceUrl` images with the white background cut out.
