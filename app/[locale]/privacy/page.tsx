import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { type Locale } from "@/i18n/routing";

const SECTION_KEYS = [
  "intro",
  "dataCollected",
  "howWeUse",
  "contactForm",
  "cookies",
  "retention",
  "rights",
  "contact",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });

  return {
    title: t("title"),
    description: t("description"),
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("privacy");
  const tc = await getTranslations("common");

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-soft mb-3">
            {t("label")}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t("title")}</h1>
          <p className="text-text-secondary leading-relaxed mb-10">{t("updated")}</p>

          <div className="space-y-8">
            {SECTION_KEYS.map((key) => {
              const paragraphs = t.raw(`sections.${key}.paragraphs`) as string[];
              return (
                <section key={key} className="privacy-section">
                  <h2 className="text-xl font-semibold text-text-primary mb-3">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/#contact" size="sm">
              {tc("contact")}
            </Button>
            <Link href="/" className="inline-flex items-center text-sm text-text-secondary hover:text-cyan-soft">
              ← {t("backHome")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
