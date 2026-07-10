import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { ProGoLogo } from "@/components/ui/ProGoLogo";
import { Icon } from "@/components/ui/Icon";
import { COPYRIGHT_YEAR, LINKS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("common");

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <ProGoLogo showTagline size="lg" className="mb-4" />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {t("about")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-soft mb-4">
              {t("platform")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={LINKS.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-cyan-soft"
                >
                  <Icon name="platform" size={16} />
                  {tc("openPlatform")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-soft mb-4">
              {t("community")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg glass-card text-text-secondary transition-colors hover:text-cyan-soft hover:border-cyan-glow/30"
                aria-label={tc("facebookCommunity")}
              >
                <Icon name="facebook" size={18} />
              </a>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg glass-card text-text-muted opacity-50 cursor-not-allowed"
                aria-label="TikTok (coming soon)"
                title="Coming soon"
              >
                <Icon name="tiktok" size={18} />
              </span>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg glass-card text-text-muted opacity-50 cursor-not-allowed"
                aria-label="Instagram (coming soon)"
                title="Coming soon"
              >
                <Icon name="instagram" size={18} />
              </span>
            </div>
            <p className="mt-4 text-xs text-text-muted">{tc("comingSoonSocial")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-soft mb-4">
              {t("taglineHeading")}
            </h3>
            <p className="text-lg font-semibold text-text-primary">{tc("tagline")}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button href={LINKS.platform} size="sm" external>
                {tc("openPlatform")}
              </Button>
              <Button href={LINKS.contact} variant="secondary" size="sm">
                <Icon name="email" size={16} />
                {tc("contact")}
              </Button>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>{t("copyright", { year: COPYRIGHT_YEAR })}</p>
          <p>{tc("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
