import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LINKS } from "@/lib/constants";

export function SocialLinks() {
  const t = useTranslations("social");

  return (
    <section className="py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-secondary text-sm">{t("text")}</p>
          <div className="flex items-center gap-3">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass-card text-text-secondary transition-all hover:text-cyan-soft hover:border-cyan-glow/30"
              aria-label="Facebook Community"
            >
              <Icon name="facebook" size={20} />
            </a>
            <Button variant="social" size="sm" disabled aria-label="TikTok coming soon">
              <Icon name="tiktok" size={18} />
            </Button>
            <Button variant="social" size="sm" disabled aria-label="Instagram coming soon">
              <Icon name="instagram" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
