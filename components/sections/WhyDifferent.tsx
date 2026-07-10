import { useTranslations } from "next-intl";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyDifferent() {
  const t = useTranslations("whyProgo");

  return (
    <section id="why-progo" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard accent="red" className="animate-fade-in-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-accent/10 text-red-accent">
                <Icon name="portals" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{t("traditionalTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {t.raw("traditional").map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-accent/70" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard accent="cyan" className="animate-fade-in-up delay-200">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow glow-cyan">
                <Icon name="map" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{t("progoTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {t.raw("progo").map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <Icon name="arrow" size={14} className="arrow-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
