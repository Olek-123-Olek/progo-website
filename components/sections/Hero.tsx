import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroOperationsMap } from "@/components/sections/HeroOperationsMap";
import { LINKS } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section className="relative min-h-0 flex items-center overflow-hidden pt-10 pb-20 md:pt-14">
      <div className="absolute inset-0 bg-mesh bg-mesh-animated" />
      <div className="absolute inset-0 grid-overlay map-grid-animate" />
      <div className="absolute inset-0 hero-route-glow opacity-40" />

      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-glow/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-purple-500/5 blur-3xl animate-float delay-300" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl lg:max-w-none">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 px-4 py-1.5 text-sm text-cyan-soft animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-cyan-glow animate-pulse-glow" />
              {t("badge")}
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-text-primary md:text-5xl lg:text-[3.25rem] animate-fade-in-up delay-100">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="bg-gradient-to-r from-cyan-soft via-cyan-glow to-cyan-soft bg-clip-text text-transparent text-glow">
                    {chunks}
                  </span>
                ),
              })}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl animate-fade-in-up delay-200">
              {t("paragraph1")}
            </p>

            <p className="mt-4 text-base text-text-muted animate-fade-in-up delay-300">
              {t("paragraph2")}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-in-up delay-400">
              <Button href={LINKS.platform} size="lg" external>
                <Icon name="platform" size={20} />
                {tc("openPlatform")}
                <Icon name="arrow" size={18} className="arrow-accent" />
              </Button>
              <Button href={LINKS.facebook} variant="secondary" size="lg" external>
                <Icon name="facebook" size={20} />
                {tc("joinFacebook")}
              </Button>
              <Button href={LINKS.email} variant="ghost" size="lg">
                <Icon name="email" size={20} />
                {tc("contactUs")}
              </Button>
            </div>
          </div>

          <div className="relative min-h-[480px] md:min-h-[520px] animate-fade-in delay-500">
            <HeroOperationsMap />
          </div>
        </div>
      </div>
    </section>
  );
}
