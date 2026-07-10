import { useTranslations } from "next-intl";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQ_KEYS = [
  "whatIsProgo",
  "whoFor",
  "freeTrial",
  "afterTrial",
  "difference",
  "driverApp",
  "pricingModel",
  "dataPrivacy",
  "howToStart",
] as const;

export function Faq() {
  const t = useTranslations("faq");

  const items = FAQ_KEYS.map((key) => ({
    id: `faq-${key}`,
    question: t(`items.${key}.q`),
    answer: t(`items.${key}.a`),
  }));

  return (
    <section id="faq" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-glow/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
