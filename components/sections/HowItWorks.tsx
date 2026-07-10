import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div
              key={step}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 120}ms` }}
            >
              {i < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-cyan-glow/40 to-cyan-glow/10" />
              )}
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-dim/30 to-cyan-glow/20 border border-cyan-glow/30 text-cyan-glow font-bold text-lg glow-cyan">
                  {step}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t(`steps.${step}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
