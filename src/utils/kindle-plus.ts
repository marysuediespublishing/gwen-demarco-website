// Kindle Unlimited became Kindle+ on 2026-10-22. Reader-facing copy says "Kindle+", with
// "formerly Kindle Unlimited" in small text under a page's first mention until site-config
// `kindlePlusFormerlyUntil` (a date, inclusive); after it the line drops on the next build.
// Code keeps "ku": the cta kind, LandingClickKU, the attribution tag door, utm values.
// Pure, so the tests can import it without Astro.

export const KINDLE_PLUS = 'Kindle+';
export const FORMERLY_KU = 'formerly Kindle Unlimited';

/** True through the whole of `until` (YYYY-MM-DD, UTC); false with no date or a bad one. */
export const showFormerlyKU = (until?: string | Date, now: Date = new Date()) => {
  if (!until) return false;
  const day = until instanceof Date ? until.toISOString().slice(0, 10) : until.trim().slice(0, 10);
  const end = Date.parse(`${day}T23:59:59.999Z`);
  return Number.isFinite(end) && now.getTime() <= end;
};

/** "Kindle+ (formerly Kindle Unlimited)" in the window, else "Kindle+": for titles and meta text. */
export const kindlePlusName = (formerly: boolean) => (formerly ? `${KINDLE_PLUS} (${FORMERLY_KU})` : KINDLE_PLUS);
