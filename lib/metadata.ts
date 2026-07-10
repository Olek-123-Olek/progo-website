import { locales } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

/** Canonical URL + hreflang alternates for a locale-prefixed path (e.g. `privacy`). */
export function localeAlternates(locale: string, path = "") {
  const suffix = path ? `/${path}` : "";
  const languages: Record<string, string> = {};

  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}${suffix}`;
  }
  languages["x-default"] = `${SITE_URL}/en${suffix}`;

  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages,
  };
}
