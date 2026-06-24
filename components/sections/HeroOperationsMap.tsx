import Image from "next/image";
import { useTranslations } from "next-intl";

const statKeys = ["statsVehicles", "statsLoads", "statsDocuments", "statsSos"] as const;
const statValues = ["24", "18", "3", "0"];
const statColors = ["text-cyan-glow", "text-cyan-soft", "text-amber-400", "text-text-muted"];

export function HeroOperationsMap() {
  const t = useTranslations("map");
  const tc = useTranslations("common");

  return (
    <div className="glass-card rounded-3xl p-4 md:p-5 glow-cyan h-full hero-map-shell">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="hero-map-corner text-cyan-glow/50" aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-soft">
            {t("title")}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-text-muted">
          <span className="hidden sm:inline">{t("region")}</span>
          <span className="flex items-center gap-1.5 text-red-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-red-accent animate-pulse-glow" />
            {tc("live")}
          </span>
        </div>
      </div>

      <div
        className="hero-platform-screenshot-wrap rounded-xl border border-cyan-glow/25 overflow-hidden"
        aria-label={t("ariaLabel")}
      >
        <div className="relative">
          <Image
            src="/images/hero-platform-map.png"
            alt={t("screenshotAlt")}
            width={1920}
            height={1080}
            className="hero-platform-screenshot w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="hero-platform-screenshot-vignette pointer-events-none" aria-hidden="true" />
          <div className="hero-platform-screenshot-scan pointer-events-none" aria-hidden="true" />
          <div className="hero-platform-screenshot-edge pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs sm:grid-cols-4">
        {statKeys.map((key, i) => (
          <div key={key} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-center">
            <p className="text-text-muted">{t(key)}</p>
            <p className={`font-bold text-lg ${statColors[i]}`}>{statValues[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
