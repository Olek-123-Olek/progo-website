import { useTranslations } from "next-intl";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SOLUTION_KEYS } from "@/lib/constants";

const iconMap = {
  map: "map",
  plan: "plan",
  driver: "driver",
  docs: "docs",
  messages: "messages",
  accounting: "accounting",
} as const;

export function Solution() {
  const t = useTranslations("solution");

  return (
    <section id="solution" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-glow/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION_KEYS.map((key, i) => (
            <GlassCard
              key={key}
              accent="cyan"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-glow/10 text-cyan-glow glow-cyan transition-transform group-hover:scale-110">
                  <Icon name={iconMap[key]} size={24} />
                </div>
                <Icon name="arrow" size={20} className="arrow-accent opacity-60" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {t(`items.${key}.description`)}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
