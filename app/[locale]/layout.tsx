import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import { LINKS, SITE_URL } from "@/lib/constants";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
  it: "it_IT",
  fr: "fr_FR",
  uk: "uk_UA",
  pl: "pl_PL",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const canonical = `${SITE_URL}/${locale}`;
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, `${SITE_URL}/${loc}`]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${SITE_URL}/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      type: "website",
      url: canonical,
      locale: OG_LOCALES[locale] ?? OG_LOCALES[routing.defaultLocale],
      alternateLocale: routing.locales
        .filter((loc) => loc !== locale)
        .map((loc) => OG_LOCALES[loc]),
      siteName: "ProGo",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ProGo",
      url: SITE_URL,
      description: t("description"),
      sameAs: [LINKS.facebook],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ProGo",
      url: SITE_URL,
      inLanguage: locale,
    },
  ];

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy-950 text-text-primary`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
