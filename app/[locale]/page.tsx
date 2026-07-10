import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrialBanner } from "@/components/sections/TrialBanner";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Comparison } from "@/components/sections/Comparison";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pricing } from "@/components/sections/Pricing";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { type Locale } from "@/i18n/routing";
import { FAQ_KEYS } from "@/lib/constants";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: tFaq(`items.${key}.q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: tFaq(`items.${key}.a`),
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description: tMeta("description"),
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@progo.one",
      contactType: "customer support",
    },
  };

  return (
    <>
      <JsonLd data={[orgJsonLd, faqJsonLd]} />
      <Header />
      <main className="pb-20 lg:pb-0">
        <TrialBanner />
        <Hero />
        <TrustStrip />
        <div className="section-divider mx-auto max-w-7xl" />
        <Problem />
        <div className="section-divider mx-auto max-w-7xl" />
        <WhyDifferent />
        <div className="section-divider mx-auto max-w-7xl" />
        <Comparison />
        <div className="section-divider mx-auto max-w-7xl" />
        <Solution />
        <div className="section-divider mx-auto max-w-7xl" />
        <HowItWorks />
        <div className="section-divider mx-auto max-w-7xl" />
        <Features />
        <div className="section-divider mx-auto max-w-7xl" />
        <Pricing />
        <FinalCta />
        <Faq />
        <ContactSection />
        <SocialLinks />
      </main>
      <StickyMobileCta />
      <Footer />
    </>
  );
}
