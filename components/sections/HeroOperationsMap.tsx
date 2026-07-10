import Image from "next/image";
import { useTranslations } from "next-intl";

const COMMAND_STATS = [
  { key: "commandVehicles", value: "1284", accent: "text-cyan-glow" },
  { key: "commandLoads", value: "356", accent: "text-cyan-soft" },
  { key: "commandDocuments", value: "8421", accent: "text-amber-400" },
  { key: "commandCompanies", value: "74", accent: "text-emerald-400" },
] as const;

const FLOAT_CARDS = [
  { key: "floatVehicle", meta: "floatVehicleRoute", position: "hero-float-tl", delay: "0s" },
  { key: "floatLoad", meta: "floatLoadRoute", position: "hero-float-tr", delay: "1.2s" },
  { key: "floatCmr", meta: "floatCmrStatus", position: "hero-float-bl", delay: "2.4s" },
  { key: "floatSos", meta: "floatSosLocation", position: "hero-float-br", delay: "0.6s", alert: true },
] as const;

const PULSE_MARKERS = [
  { type: "vehicle", x: 52, y: 36 },
  { type: "load", x: 44, y: 30 },
  { type: "vehicle", x: 38, y: 42 },
  { type: "load", x: 48, y: 48 },
  { type: "sos", x: 50, y: 40 },
] as const;

const ROUTES = [
  "M55 35 L48 32 L40 38",
  "M48 32 L40 38",
  "M52 38 L45 28",
  "M48 48 L50 42",
] as const;

export function HeroOperationsMap() {
  const t = useTranslations("map");
  const tc = useTranslations("common");

  return (
    <div className="hero-command-center h-full">
      <div className="hero-command-header">
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

      <div className="hero-command-strip" aria-hidden="true">
        {COMMAND_STATS.map((stat) => (
          <div key={stat.key} className="hero-command-stat">
            <p className="hero-command-stat-label">{t(stat.key)}</p>
            <p className={`hero-command-stat-value ${stat.accent}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="hero-command-stage" aria-label={t("ariaLabel")}>
        <div className="hero-command-map-frame">
          <Image
            src="/images/hero-platform-map.jpg"
            alt={t("screenshotAlt")}
            width={1024}
            height={512}
            className="hero-platform-screenshot w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />

          <svg
            className="hero-command-routes"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                <stop offset="40%" stopColor="#00e5ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {ROUTES.map((d, i) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="url(#heroRouteGrad)"
                strokeWidth="0.35"
                strokeLinecap="round"
                className="hero-command-route-line"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
            ))}
          </svg>

          {PULSE_MARKERS.map((marker, i) => (
            <span
              key={`${marker.type}-${i}`}
              className={`hero-command-pulse hero-command-pulse-${marker.type}`}
              style={{ left: `${marker.x}%`, top: `${marker.y}%`, animationDelay: `${i * 0.5}s` }}
              aria-hidden="true"
            />
          ))}

          {FLOAT_CARDS.map((card) => (
            <div
              key={card.key}
              className={`hero-float-card ${card.position} ${"alert" in card && card.alert ? "hero-float-alert" : ""}`}
              style={{ animationDelay: card.delay }}
              aria-hidden="true"
            >
              <p className={`hero-float-title ${"alert" in card && card.alert ? "text-red-accent" : "text-cyan-soft"}`}>
                {t(card.key)}
              </p>
              <p className="hero-float-meta">{t(card.meta)}</p>
            </div>
          ))}

          <div className="hero-platform-screenshot-vignette pointer-events-none" aria-hidden="true" />
          <div className="hero-platform-screenshot-scan pointer-events-none" aria-hidden="true" />
          <div className="hero-command-reflection pointer-events-none" aria-hidden="true" />
          <div className="hero-platform-screenshot-edge pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
