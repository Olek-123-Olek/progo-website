"use client";

import { useTranslations } from "next-intl";

type PreviewType =
  | "map"
  | "plan"
  | "driver"
  | "docs"
  | "messages"
  | "accounting"
  | "sos"
  | "collab"
  | "fleet"
  | "monitor";

interface FeaturePreviewProps {
  type: PreviewType;
}

export function FeaturePreview({ type }: FeaturePreviewProps) {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-white/5 bg-navy-950/60 p-3 h-[72px] flex items-center justify-center">
      {type === "map" && <MapPreview />}
      {type === "plan" && <PlanPreview />}
      {type === "driver" && <DriverPreview />}
      {type === "docs" && <DocsPreview />}
      {type === "messages" && <MessagesPreview />}
      {type === "accounting" && <AccountingPreview />}
      {type === "sos" && <SosPreview />}
      {type === "collab" && <CollabPreview />}
      {type === "fleet" && <FleetPreview />}
      {type === "monitor" && <MonitorPreview />}
    </div>
  );
}

function MapPreview() {
  return (
    <svg viewBox="0 0 120 48" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="routeGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff3344" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 12}
          x2="120"
          y2={i * 12}
          stroke="rgba(0,229,255,0.08)"
          strokeWidth="0.5"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={`v${i}`}
          x1={i * 24}
          y1="0"
          x2={i * 24}
          y2="48"
          stroke="rgba(0,229,255,0.08)"
          strokeWidth="0.5"
        />
      ))}
      <path
        d="M10 36 Q40 28 70 20 T110 8"
        stroke="url(#routeGlow)"
        strokeWidth="2"
        fill="none"
        className="route-line-animate"
      />
      <circle cx="10" cy="36" r="3" fill="#00e5ff" className="animate-pulse-glow" />
      <circle cx="70" cy="20" r="2.5" fill="#22d3ee" />
      <circle cx="110" cy="8" r="3" fill="#ff3344" className="animate-pulse-glow" />
    </svg>
  );
}

function PlanPreview() {
  const t = useTranslations("preview");
  const rows = [
    { id: "PG-1042", status: t("inTransit"), color: "bg-cyan-glow/20 text-cyan-soft" },
    { id: "PG-1043", status: t("loading"), color: "bg-amber-500/20 text-amber-300" },
    { id: "PG-1044", status: t("delivered"), color: "bg-emerald-500/20 text-emerald-300" },
  ];

  return (
    <div className="w-full space-y-1.5 text-[9px] font-mono">
      <div className="grid grid-cols-3 gap-1 text-text-muted px-1">
        <span>{t("job")}</span>
        <span>{t("route")}</span>
        <span>{t("status")}</span>
      </div>
      {rows.map((row) => (
        <div
          key={row.id}
          className="grid grid-cols-3 gap-1 items-center rounded bg-white/[0.03] px-1 py-1"
        >
          <span className="text-cyan-soft">{row.id}</span>
          <span className="text-text-muted truncate">DE→PL</span>
          <span className={`rounded px-1 py-0.5 text-center ${row.color}`}>{row.status}</span>
        </div>
      ))}
    </div>
  );
}

function DriverPreview() {
  const t = useTranslations("preview");
  const buttons = [t("loaded"), t("inTransit"), t("delivered")];

  return (
    <div className="flex flex-wrap gap-1.5 justify-center w-full">
      {buttons.map((label, i) => (
        <span
          key={label}
          className={`rounded-md px-2 py-1 text-[9px] font-medium ${
            i === 1
              ? "bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/40"
              : "bg-white/5 text-text-muted border border-white/10"
          }`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function DocsPreview() {
  const t = useTranslations("preview");

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-0.5">
        <div className="h-8 w-6 rounded border border-cyan-glow/30 bg-cyan-glow/10 flex items-center justify-center text-[7px] font-bold text-cyan-soft">
          {t("cmr")}
        </div>
        <span className="text-[8px] text-text-muted">{t("signed")}</span>
      </div>
      <div className="h-8 w-8 rounded border border-white/10 bg-white/5 flex items-center justify-center">
        <svg viewBox="0 0 16 16" className="h-4 w-4 text-text-muted">
          <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" fill="none" strokeWidth="1" />
          <circle cx="6" cy="7" r="1.5" fill="currentColor" opacity="0.5" />
          <path d="M2 11L6 8L9 10L14 6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="h-8 w-6 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-emerald-400">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <span className="text-[8px] text-emerald-400">OK</span>
      </div>
    </div>
  );
}

function MessagesPreview() {
  const t = useTranslations("preview");

  return (
    <div className="w-full space-y-1.5 px-1">
      <div className="rounded-lg rounded-tl-none bg-cyan-glow/10 border border-cyan-glow/20 px-2 py-1 text-[8px] text-cyan-soft max-w-[80%]">
        {t("eta")}
      </div>
      <div className="rounded-lg rounded-tr-none bg-white/5 border border-white/10 px-2 py-1 text-[8px] text-text-muted max-w-[70%] ml-auto">
        {t("cmrUploaded")}
      </div>
    </div>
  );
}

function AccountingPreview() {
  const t = useTranslations("preview");

  return (
    <div className="w-full font-mono text-[8px]">
      <div className="grid grid-cols-4 gap-1 text-text-muted border-b border-white/5 pb-1 mb-1">
        <span>{t("job")}</span>
        <span>{t("client")}</span>
        <span>{t("carrier")}</span>
        <span className="text-right">{t("amount")}</span>
      </div>
      <div className="grid grid-cols-4 gap-1 text-text-secondary">
        <span className="text-cyan-soft">1042</span>
        <span>Client A</span>
        <span>Carrier B</span>
        <span className="text-right text-emerald-400">€1,240</span>
      </div>
    </div>
  );
}

function SosPreview() {
  const t = useTranslations("preview");

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-red-accent/20 border-2 border-red-accent flex items-center justify-center sos-pulse">
          <span className="text-red-accent font-bold text-xs">SOS</span>
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-red-accent/40 sos-ring" />
      </div>
      <div className="text-[9px] text-text-muted">
        <p className="text-red-accent font-medium">{t("emergency")}</p>
        <p>{t("routeAlert")}</p>
      </div>
    </div>
  );
}

function CollabPreview() {
  const t = useTranslations("preview");
  const labels = [t("collabCarrier"), t("collabForwarder"), t("collabClient")];

  return (
    <div className="flex items-center gap-2 w-full justify-center">
      {labels.map((label, i) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <div
            className={`h-6 w-6 rounded-full border flex items-center justify-center text-[7px] font-bold ${
              i === 1
                ? "border-cyan-glow/50 bg-cyan-glow/15 text-cyan-soft"
                : "border-white/15 bg-white/5 text-text-muted"
            }`}
          >
            {label[0]}
          </div>
          <span className="text-[7px] text-text-muted">{label}</span>
        </div>
      ))}
      <svg viewBox="0 0 40 12" className="w-8 h-3 text-cyan-glow/40">
        <path d="M0 6H40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}

function FleetPreview() {
  const t = useTranslations("preview");
  const items = [
    { label: t("vehicle"), color: "text-cyan-glow" },
    { label: t("driver"), color: "text-cyan-soft" },
    { label: t("dispatch"), color: "text-text-muted" },
  ];

  return (
    <div className="flex gap-2 w-full justify-center">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 rounded bg-white/[0.03] px-2.5 py-1.5 border border-white/5"
        >
          <div className={`h-4 w-5 rounded-sm border border-current ${item.color} opacity-60`} />
          <span className="text-[7px] text-text-muted">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function MonitorPreview() {
  const t = useTranslations("preview");
  const tc = useTranslations("common");

  return (
    <div className="w-full flex flex-col items-center gap-1">
      <div className="w-full h-10 rounded border border-cyan-glow/20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute top-1/2 left-1/4 h-1.5 w-1.5 rounded-full bg-cyan-glow" />
        <div className="absolute top-1/3 left-1/2 h-1.5 w-1.5 rounded-full bg-cyan-soft" />
        <div className="absolute bottom-2 right-3 text-[7px] text-red-accent font-mono">{tc("live")}</div>
      </div>
      <span className="text-[8px] text-text-muted">{t("officeMode")}</span>
    </div>
  );
}
