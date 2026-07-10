import { useTranslations } from "next-intl";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROBLEM_KEYS } from "@/lib/constants";

const iconMap = {
  portals: "portals",
  status: "status",
  documents: "documents",
  chat: "chat",
  excel: "excel",
  payment: "payment",
} as const;

export function Problem() {
  const t = useTranslations("problem");

  return (
    <section id="problem" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-accent/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_KEYS.map((key, i) => (
            <GlassCard
              key={key}
              accent="red"
              className="animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-accent/10 text-red-accent glow-red">
                <Icon name={iconMap[key]} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {t(`cards.${key}.description`)}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
