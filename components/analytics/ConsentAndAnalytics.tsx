"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CONSENT_KEY = "progo-cookie-consent";

type ConsentValue = "analytics" | "essential";

export function ConsentAndAnalytics() {
  const t = useTranslations("cookie");
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "analytics" || stored === "essential") {
      setConsent(stored);
    }
    setMounted(true);
  }, []);

  function saveConsent(value: ConsentValue) {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  const showBanner = mounted && consent === null;
  const analyticsEnabled = consent === "analytics";

  return (
    <>
      {analyticsEnabled && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {showBanner && (
        <div className="cookie-banner" role="dialog" aria-label={t("title")}>
          <div className="cookie-banner-inner">
            <p className="cookie-banner-text">
              {t("message")}{" "}
              <Link href="/privacy" className="text-cyan-soft hover:underline">
                {t("privacy")}
              </Link>
            </p>
            <div className="cookie-banner-actions">
              <button
                type="button"
                className="cookie-banner-btn cookie-banner-btn-secondary"
                onClick={() => saveConsent("essential")}
              >
                {t("essential")}
              </button>
              <button
                type="button"
                className="cookie-banner-btn cookie-banner-btn-primary"
                onClick={() => saveConsent("analytics")}
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
