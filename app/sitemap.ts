import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/privacy-choices"] as const;

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date("2026-08-02"),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.5,
    })),
  );
}
