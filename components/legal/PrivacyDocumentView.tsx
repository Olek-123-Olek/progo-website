import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PRIVACY_REQUEST_MAILTO } from "@/lib/legal";
import type { PrivacyChoicesDocument, PrivacyDocument } from "@/lib/privacy/types";

type InternalHref = "/" | "/privacy" | "/privacy-choices" | { pathname: "/"; hash: string };

type Props = {
  doc: PrivacyDocument | PrivacyChoicesDocument;
  updatedLabel: string;
  primaryHref: InternalHref;
  primaryLabel: string;
  secondaryHref?: InternalHref;
  secondaryLabel?: string;
  showRequestButton?: boolean;
  requestLabel?: string;
};

export function PrivacyDocumentView({
  doc,
  updatedLabel,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showRequestButton = true,
  requestLabel,
}: Props) {
  return (
    <>
      <Header />
      <main className="privacy-page pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="privacy-layout">
            <aside className="privacy-toc" aria-label={doc.tocTitle}>
              <p className="privacy-toc-title">{doc.tocTitle}</p>
              <nav>
                <ul>
                  {doc.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="privacy-content">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-soft mb-3">
                {doc.label}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">{doc.title}</h1>
              <p className="text-text-secondary mb-6">{updatedLabel}</p>

              <div className="privacy-intro space-y-3 mb-10">
                {doc.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-sm md:text-base leading-relaxed text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>

              {showRequestButton && requestLabel && (
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href={PRIVACY_REQUEST_MAILTO} className="privacy-cta-primary">
                    {requestLabel}
                  </a>
                  {"privacyChoicesLink" in doc && (
                    <Link href="/privacy-choices" className="privacy-cta-secondary">
                      {doc.privacyChoicesLink}
                    </Link>
                  )}
                  {"privacyPolicyLink" in doc && (
                    <Link href="/privacy" className="privacy-cta-secondary">
                      {doc.privacyPolicyLink}
                    </Link>
                  )}
                </div>
              )}

              <div className="space-y-6">
                {doc.sections.map((section) => (
                  <section key={section.id} id={section.id} className="privacy-card scroll-mt-28">
                    <h2 className="text-xl font-semibold text-text-primary mb-3">{section.title}</h2>
                    <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="privacy-bullets">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link href={primaryHref} className="privacy-cta-primary">
                  {primaryLabel}
                </Link>
                {secondaryHref && secondaryLabel && (
                  <Link href={secondaryHref} className="privacy-cta-secondary">
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
