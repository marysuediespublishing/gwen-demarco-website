# landing_002 — German and French landing pages

**Status:** built, waiting on the editions' real ASINs (signals #6966) · **Spec:** of-tomorrow-press `specs/suite_006.md` §2 (card 1) · **Reads with:** `landing_001.md` (the template, its doors and events)

The box-set page and the book landing template also build at `/{de|fr}/…`, for each product that has an edition in that language (`editions.<lang>` in its frontmatter). They take the edition's words, the market's storefront and the market's Attribution tags. The English pages stay where they were. How it works: README "German and French landing pages".

## Rules (each one has a test in `tests/e2e/landing.spec.ts`)

1. A `/de/` page links only to `www.amazon.de` and a `/fr/` page only to `www.amazon.fr`. A button takes its product's tag from `attributionTags.DE` / `.FR`, and gets the plain link when there is none.
2. The KU button is there only when the edition's `kuEnrolled` is true, door by door on a book page.
3. On a book page, a door whose product has no edition in the language is left out.
4. No string from the English table (`src/i18n/landing.en.ts`) appears on a German or French page, and no English reader quote either.
5. `hreflang` links the three versions of a page to each other (with `x-default` pointing at English), and the sitemap lists all three.
6. Click events and the `press.landing.ctr` beacon carry `market`.
7. The English pages build the same HTML as before, compared as `tests/lib/normalize-html.mjs` says.

## Walk

**Task:** see where each button on the box-set page goes, in German and then in French, without buying anything. **Persona:** a reader in Berlin, then one in Paris, arriving from a Meta ad. The build uses `tests/fixtures/landing-editions.json`, because the content has no DE/FR editions yet. Its ASINs (`B0FIX…`) and DE tags are made up.

| Step | Does | Sees | Frame |
| --- | --- | --- | --- |
| de 0 | Opens `/de/series/sophie-feegle/box-set/?utm_campaign=sophie-feegle-set-de-landing&utm_source=meta` (Europe/Berlin) | The consent bar in German (Zulassen / Nein, danke), "Sophie Feegle Sammelband", the German hook and tagline, "Im Schnitt 4,7 Sterne", "Alle fünf Bände im Sammelband" | `assets/002/de-00-open.png` |
| de 1 | Hovers "Gratis lesen mit Kindle Unlimited" | → `https://www.amazon.de/dp/B0FIXDE001?maas=maas_adg_FIXTURE_DE_KU&ref_=aa_maas&tag=maas` · LandingClickKU {market: DE} | `de-01-ku.png` |
| de 2 | Hovers "Kindle-Sammelband kaufen – 9,99 €" | → `https://www.amazon.de/dp/B0FIXDE001?maas=maas_adg_FIXTURE_DE_KINDLE&ref_=aa_maas&tag=maas` · LandingClickBuy {market: DE} | `de-02-buy.png` |
| de 3 | Hovers "Lieber auf Papier? Band 1 als Taschenbuch →" | → `https://www.amazon.de/dp/B0FIXDE0P1` (no DE Print tag: plain) · LandingClickPaperback {market: DE} | `de-03-paperback.png` |
| fr 0 | Opens `/fr/series/sophie-feegle/box-set/?utm_campaign=sophie-feegle-set-fr-landing&utm_source=meta` (Europe/Paris) | The consent bar in French, "Sophie Feegle : l’intégrale", "11 720 évaluations". Only two buttons: the fixture's French edition is not in KU | `fr-00-open.png` |
| fr 1 | Hovers "Acheter l’intégrale Kindle" | → `https://www.amazon.fr/dp/B0FIXFR001` (no FR tags: plain) · LandingClickBuy {market: FR} | `fr-01-buy.png` |
| fr 2 | Hovers "Vous préférez le papier ? Le tome 1 en broché →" | → `https://www.amazon.fr/s?k=Sophie+et+les+Bizarres+Gwen+DeMarco&i=stripbooks` (book one's French edition has no paperback ASIN: a search) · LandingClickPaperback {market: FR} | `fr-02-paperback.png` |
| end | Clicks nothing | The URL is unchanged | `walk.mp4` |

Recording: `assets/002/walk.mp4`. Script: `assets/002/walk.mjs`.

**Still open:** the real editions (ASINs, titles, blurbs, KU status) come from Todd's #6968. The box-set hero shows the English cover until an edition has a `cover`. The German and French tables are machine-drafted and need a native check before the first ad.
