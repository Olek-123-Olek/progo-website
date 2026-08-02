import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PrivacyDocumentView } from "@/components/legal/PrivacyDocumentView";
import { type Locale } from "@/i18n/routing";
import { LEGAL } from "@/lib/legal";
import { localeAlternates } from "@/lib/metadata";
import { formatPrivacyUpdated, getPrivacyDocument } from "@/lib/privacy/localize";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getPrivacyDocument(locale as Locale);
  const title = `${doc.title} | ProGo`;
  const description =
    "Learn how ProGo processes and protects personal data across the ProGo website, logistics platform, and ProGo Driver mobile application.";

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: localeAlternates(locale, "privacy"),
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/${locale}/privacy`,
      siteName: "ProGo",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const doc = getPrivacyDocument(locale as Locale);
  const updatedLabel = formatPrivacyUpdated(
    doc.updatedPrefix,
    LEGAL.privacyLastUpdated,
    locale as Locale,
  );

  return (
    <PrivacyDocumentView
      doc={doc}
      updatedLabel={updatedLabel}
      primaryHref={{ pathname: "/", hash: "contact" }}
      primaryLabel={doc.contactCta}
      secondaryHref="/"
      secondaryLabel={doc.backHome}
      requestLabel={doc.requestAccessLabel}
    />
  );
}
