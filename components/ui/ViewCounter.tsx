"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type ViewStats = {
  today: number;
  month: number;
};

type ViewCounterProps = {
  compact?: boolean;
};

const POLL_MS = 15_000;

function sessionKeyForToday(): string {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Warsaw" });
  return `progo-view-${today}`;
}

async function fetchViewStats(method: "GET" | "POST"): Promise<ViewStats | null> {
  const res = await fetch(`/api/views?t=${Date.now()}`, {
    method,
    cache: "no-store",
    headers: { "Cache-Control": "no-cache" },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as { today: number | null; month: number | null };
  if (data.today === null || data.month === null) return null;

  return { today: data.today, month: data.month };
}

export function ViewCounter({ compact = false }: ViewCounterProps) {
  const t = useTranslations("viewCounter");
  const locale = useLocale();
  const [stats, setStats] = useState<ViewStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function applyStats(next: ViewStats) {
      if (cancelled) return;

      setStats((prev) => {
        if (prev && (prev.today !== next.today || prev.month !== next.month)) {
          setPulse(true);
          window.setTimeout(() => setPulse(false), 600);
        }
        return next;
      });
    }

    async function refresh() {
      const data = await fetchViewStats("GET");
      if (data) applyStats(data);
    }

    async function init() {
      try {
        const key = sessionKeyForToday();
        const alreadyRecorded = sessionStorage.getItem(key);
        const data = await fetchViewStats(alreadyRecorded ? "GET" : "POST");

        if (data) {
          applyStats(data);
          if (!alreadyRecorded) sessionStorage.setItem(key, "1");
        }
      } catch {
        /* optional */
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    const onVisible = () => {
      if (document.visibilityState === "visible") void refresh();
    };

    void init();
    const intervalId = setInterval(() => void refresh(), POLL_MS);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const format = (value: number | null) =>
    value !== null ? new Intl.NumberFormat(locale).format(value) : loading ? "···" : "0";

  const todayText = format(stats?.today ?? null);
  const monthText = format(stats?.month ?? null);

  return (
    <div
      className={`view-counter-pill ${compact ? "view-counter-pill-compact" : ""} ${loading ? "view-counter-pill-loading" : ""} ${pulse ? "view-counter-pill-pulse" : ""}`}
      aria-live="polite"
      aria-label={t("ariaLabel")}
    >
      <span className="view-counter-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" className="h-4 w-4">
          <path
            d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="10" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </span>

      <div className="view-counter-stats">
        <div className="view-counter-stat">
          <span className="view-counter-value font-mono tabular-nums">{todayText}</span>
          <span className="view-counter-stat-label">{compact ? t("todayShort") : t("today")}</span>
        </div>
        <span className="view-counter-divider" aria-hidden="true" />
        <div className="view-counter-stat">
          <span className="view-counter-value font-mono tabular-nums">{monthText}</span>
          <span className="view-counter-stat-label">{compact ? t("monthShort") : t("month")}</span>
        </div>
      </div>

      {!compact && (
        <span className="view-counter-live">
          <span className="view-counter-live-dot" />
          {t("live")}
        </span>
      )}
    </div>
  );
}
