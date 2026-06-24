"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectLanguage(next: Locale) {
    router.replace(pathname, { locale: next });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-navy-900/60 px-3 text-sm text-text-secondary transition-colors hover:border-cyan-glow/30 hover:text-cyan-soft"
        aria-label="Language"
        aria-expanded={open}
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4 text-cyan-soft" aria-hidden="true">
          <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M2 10H18M10 2C12 5 12 15 10 18M10 2C8 5 8 15 10 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        <span className="hidden sm:inline font-medium uppercase">{locale}</span>
        <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-cyan-glow/20 bg-navy-900/95 py-1 shadow-xl backdrop-blur-xl glow-cyan">
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => selectLanguage(code)}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-cyan-glow/10 ${
                code === locale
                  ? "text-cyan-glow bg-cyan-glow/5"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{localeNames[code]}</span>
              <span className="text-xs font-mono uppercase opacity-60">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
