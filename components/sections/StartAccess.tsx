import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_EMAIL, LINKS } from "@/lib/constants";

const STEP_KEYS = ["1", "2", "3"] as const;
const CHECKLIST_KEYS = ["company", "activity", "scale", "contact"] as const;

export function StartAccess() {
  const t = useTranslations("startAccess");
  const tc = useTranslations("common");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(t("emailBody"))}`;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-cyan-soft"
          >
            <Icon name="arrow" size={14} className="rotate-180" />
            {t("backHome")}
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-glow/20 bg-navy-950/55 p-6 md:p-10 lg:p-12 backdrop-blur-xl glow-cyan">
          <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-cyan-glow/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-cyan-glow/5 blur-3xl pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-cyan-glow">
                <Icon name="spark" size={16} />
                {t("badge")}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                {t("title")}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
                {t("description")}
              </p>

              <div className="mb-10 rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 p-5 md:p-6">
                <p className="text-sm text-text-secondary mb-3">{t("emailCta")}</p>
                <a
                  href={mailto}
                  className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-cyan-glow hover:text-cyan-soft transition-colors break-all"
                >
                  <Icon name="email" size={22} />
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-3 text-sm text-text-muted">{t("emailHint")}</p>
              </div>

              <h2 className="text-lg font-semibold text-text-primary mb-4">{t("stepsTitle")}</h2>
              <ol className="space-y-4 mb-10">
                {STEP_KEYS.map((key, index) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-bold text-cyan-glow">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-text-primary">{t(`steps.${key}.title`)}</p>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        {t(`steps.${key}.description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="text-lg font-semibold text-text-primary mb-3">{t("checklistTitle")}</h2>
              <ul className="space-y-2.5 mb-10">
                {CHECKLIST_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-glow/15 text-cyan-glow">
                      <Icon name="check" size={12} />
                    </span>
                    {t(`checklist.${key}`)}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-text-muted">
                {t("existingUser")}{" "}
                <a
                  href={LINKS.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-soft hover:underline"
                >
                  {t("openPlatform")}
                </a>
              </p>
            </div>

            <div>
              <div className="mb-5">
                <h2 className="text-xl font-semibold text-text-primary mb-2">{t("formTitle")}</h2>
                <p className="text-sm text-text-secondary">{t("formNote")}</p>
              </div>
              <ContactForm intent="access" />
              <div className="mt-6 flex justify-center sm:justify-start">
                <Button href={mailto} variant="ghost" size="sm" external>
                  <Icon name="email" size={16} />
                  {tc("getInTouch")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
