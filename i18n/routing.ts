import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "it", "fr", "uk", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  fr: "Français",
  uk: "Українська",
  pl: "Polski",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
