import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LINKS } from "@/lib/constants";

const AUDIENCE_KEYS = ["carriers", "shippers", "producers"] as const;
const POINT_KEYS = ["access", "stay", "leave"] as const;

export function TrialBanner() {
  const t = useTranslations("trialBanner");

  return (
    <section
      id="trial"
      className="relative pt-28 pb-6 md:pt-32 md:pb-8 overflow-hidden"
      aria-label={t("ariaLabel")}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-glow/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="trial-banner relative overflow-hidden rounded-2xl md:rounded-3xl border border-cyan-glow/30 bg-gradient-to-br from-navy-800/90 via-navy-900/95 to-navy-950/90 p-6 md:p-8 lg:p-10 glow-cyan animate-fade-in-up">
          <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-cyan-glow/15 blur-3xl trial-banner-orb" />
          <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl trial-banner-orb delay-300" />
          <div className="absolute inset-0 trial-banner-shine pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/40 bg-cyan-glow/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-cyan-glow shadow-[0_0_20px_rgba(0,229,255,0.25)]">
                  <Icon name="spark" size={16} />
                  {t("badge")}
                </span>
                <span className="text-xs font-medium text-text-muted md:text-sm">
                  {t("badgeHint")}
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-text-primary md:text-3xl lg:text-4xl">
                {t.rich("title", {
                  highlight: (chunks) => (
                    <span className="bg-gradient-to-r from-cyan-soft via-cyan-glow to-purple-400 bg-clip-text text-transparent">
                      {chunks}
                    </span>
                  ),
                })}
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                {t("subtitle")}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {AUDIENCE_KEYS.map((key) => (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-cyan-soft md:text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_6px_#00e5ff]" />
                    {t(`audiences.${key}`)}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5">
                {POINT_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-text-secondary md:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-glow/15 text-cyan-glow">
                      <Icon name="check" size={12} />
                    </span>
                    {t(`points.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={LINKS.platform} size="lg" external className="trial-banner-cta">
                  <Icon name="platform" size={20} />
                  {t("cta")}
                  <Icon name="arrow" size={18} className="arrow-accent" />
                </Button>
                <p className="text-xs text-text-muted sm:max-w-[220px] md:text-sm">{t("ctaHint")}</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="trial-banner-badge relative flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-cyan-glow/50 bg-gradient-to-br from-cyan-glow/20 to-purple-600/20 shadow-[0_0_40px_rgba(0,229,255,0.3)]">
                <span className="text-5xl font-black leading-none text-cyan-glow text-glow">
                  {t("daysNumber")}
                </span>
                <span className="mt-1 text-center text-sm font-bold uppercase tracking-widest text-cyan-soft">
                  {t("daysLabel")}
                </span>
                <span className="mt-2 text-xs font-medium text-text-muted">{t("freeLabel")}</span>
                <div className="absolute inset-0 rounded-full border border-cyan-glow/30 trial-banner-ring" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
