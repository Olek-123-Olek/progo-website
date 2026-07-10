import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrialBanner } from "@/components/sections/TrialBanner";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pricing } from "@/components/sections/Pricing";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { type Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Header />
      <main>
        <TrialBanner />
        <Hero />
        <TrustStrip />
        <div className="section-divider mx-auto max-w-7xl" />
        <Problem />
        <div className="section-divider mx-auto max-w-7xl" />
        <WhyDifferent />
        <div className="section-divider mx-auto max-w-7xl" />
        <Solution />
        <div className="section-divider mx-auto max-w-7xl" />
        <HowItWorks />
        <div className="section-divider mx-auto max-w-7xl" />
        <Features />
        <div className="section-divider mx-auto max-w-7xl" />
        <Pricing />
        <FinalCta />
        <ContactSection />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
