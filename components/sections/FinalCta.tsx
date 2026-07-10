import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LINKS } from "@/lib/constants";

export function FinalCta() {
  const t = useTranslations("cta");
  const tc = useTranslations("common");

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-glow/20 bg-gradient-to-br from-navy-800/80 to-navy-900/80 p-10 md:p-16 text-center glow-cyan">
          <div className="absolute inset-0 bg-mesh opacity-50" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-glow/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-red-accent/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 animate-fade-in-up">
              {t("title")}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
              <Button href={LINKS.platform} size="lg" external>
                <Icon name="platform" size={20} />
                {tc("openPlatform")}
                <Icon name="arrow" size={18} className="arrow-accent" />
              </Button>
              <Button href={LINKS.contact} variant="secondary" size="lg">
                <Icon name="email" size={20} />
                {tc("contactUs")}
              </Button>
              <Button href={LINKS.facebook} variant="ghost" size="lg" external>
                <Icon name="facebook" size={20} />
                {tc("facebookCommunity")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
