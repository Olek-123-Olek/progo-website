import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PrivacyDocumentView } from "@/components/legal/PrivacyDocumentView";
import { type Locale } from "@/i18n/routing";
import { LEGAL } from "@/lib/legal";
import { localeAlternates } from "@/lib/metadata";
import { formatPrivacyUpdated, getPrivacyChoicesDocument } from "@/lib/privacy/localize";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getPrivacyChoicesDocument(locale as Locale);
  const title = `${doc.title} | ProGo`;
  const description =
    "Request access, correction, export or deletion of personal data related to ProGo website, platform and Driver app accounts.";

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: localeAlternates(locale, "privacy-choices"),
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/${locale}/privacy-choices`,
      siteName: "ProGo",
    },
  };
}

export default async function PrivacyChoicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const doc = getPrivacyChoicesDocument(locale as Locale);
  const updatedLabel = formatPrivacyUpdated(
    doc.updatedPrefix,
    LEGAL.privacyLastUpdated,
    locale as Locale,
  );

  return (
    <PrivacyDocumentView
      doc={doc}
      updatedLabel={updatedLabel}
      primaryHref="/privacy"
      primaryLabel={doc.privacyPolicyLink}
      secondaryHref="/"
      secondaryLabel={doc.backHome}
      requestLabel={doc.requestAccessLabel}
    />
  );
}
