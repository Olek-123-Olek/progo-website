import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 px-4 py-1.5 text-sm text-cyan-soft">
              <Icon name="email" size={16} />
              {t("badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t("title")}</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{t("description")}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-text-secondary">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                  <Icon name="check" size={16} />
                </span>
                <p className="text-sm leading-relaxed">{t("point1")}</p>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                  <Icon name="check" size={16} />
                </span>
                <p className="text-sm leading-relaxed">{t("point2")}</p>
              </div>
              <div className="flex items-start gap-3 text-text-secondary">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                  <Icon name="check" size={16} />
                </span>
                <p className="text-sm leading-relaxed">{t("point3")}</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-text-muted">
              {t("emailNote")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-soft hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
