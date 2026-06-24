import { useTranslations } from "next-intl";
import { FeaturePreview } from "@/components/ui/FeaturePreview";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURE_KEYS } from "@/lib/constants";

const iconMap = {
  map: "map",
  plan: "plan",
  driver: "driver",
  docs: "docs",
  messages: "messages",
  accounting: "accounting",
  sos: "sos",
  collab: "collab",
  fleet: "fleet",
  monitor: "monitor",
} as const;

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURE_KEYS.map((feature, i) => (
            <GlassCard
              key={feature.key}
              accent={feature.accent}
              className="animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${(i % 8) * 80 + 100}ms` }}
            >
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${
                  feature.accent === "red"
                    ? "bg-red-accent/10 text-red-accent"
                    : "bg-cyan-glow/10 text-cyan-glow"
                }`}
              >
                <Icon name={iconMap[feature.key]} size={22} />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-1.5">
                {t(`items.${feature.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary flex-1">
                {t(`items.${feature.key}.description`)}
              </p>
              <FeaturePreview type={feature.preview} />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
