"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ViewCounter } from "@/components/ui/ViewCounter";
import { ProGoLogo } from "@/components/ui/ProGoLogo";
import { Icon } from "@/components/ui/Icon";
import { LINKS, NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/lib/use-active-section";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome);
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="group shrink-0">
          <ProGoLogo showTagline size="sm" className="md:hidden" />
          <ProGoLogo showTagline size="md" className="hidden md:flex" />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = isHome && activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-cyan-soft font-medium"
                    : "text-text-secondary hover:text-cyan-soft"
                }`}
              >
                {t(item.key)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {isHome && <ViewCounter compact />}
          <LanguageSwitcher />
          <Button href={LINKS.platform} size="sm" external className="hidden md:inline-flex">
            {tc("openPlatform")}
            <Icon name="arrow" size={16} className="arrow-accent" />
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label={tc("toggleMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-text-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-text-primary transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-text-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-navy-950/95 px-4 py-4 xl:hidden">
          {isHome && (
            <div className="mb-4 flex justify-center">
              <ViewCounter />
            </div>
          )}
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = isHome && activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive ? "text-cyan-soft font-medium" : "text-text-secondary hover:text-cyan-soft"}
                  onClick={() => setOpen(false)}
                >
                  {t(item.key)}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 pt-2">
              <Button href={LINKS.platform} size="sm" external className="w-full">
                {tc("openPlatform")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
