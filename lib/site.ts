import { locales, defaultLocale } from "@/i18n/routing";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.progo.one";

export const SITE_NAME = "ProGo";

/**
 * Builds canonical + hreflang alternates for a localized route so search
 * engines don't treat the six locale versions as duplicate content.
 * `path` is the route after the locale segment, e.g. "" or "/privacy".
 */
export function buildAlternates(locale: string, path = "") {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`;

  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages,
  };
}
