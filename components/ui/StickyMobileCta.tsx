"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LINKS } from "@/lib/constants";

const SHOW_AFTER_PX = 480;

export function StickyMobileCta() {
  const t = useTranslations("stickyCta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-mobile-cta" role="region" aria-label={t("ariaLabel")}>
      <div className="sticky-mobile-cta-inner">
        <div className="sticky-mobile-cta-text">
          <span className="sticky-mobile-cta-badge">{t("badge")}</span>
          <span className="sticky-mobile-cta-sub">{t("hint")}</span>
        </div>
        <Button href={LINKS.platform} size="sm" external className="sticky-mobile-cta-btn shrink-0">
          {t("cta")}
          <Icon name="arrow" size={14} className="arrow-accent" />
        </Button>
      </div>
    </div>
  );
}
