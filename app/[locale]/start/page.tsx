import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StartAccess } from "@/components/sections/StartAccess";
import { type Locale } from "@/i18n/routing";
import { localeAlternates } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "startAccess" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: localeAlternates(locale, "start"),
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/${locale}/start`,
      siteName: "ProGo",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function StartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <StartAccess />;
}
