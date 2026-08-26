import { useTranslations } from "next-intl";
import { TRUST_ITEM_COUNT } from "@/lib/constants";

const DOT_CLASSES = [
  "trust-dot-cyan",
  "trust-dot-green",
  "trust-dot-amber",
  "trust-dot-red",
  "trust-dot-cyan",
] as const;

export function TrustStrip() {
  const t = useTranslations("trust");

  return (
    <section className="relative border-y border-white/5 bg-navy-900/25 backdrop-blur-[2px] py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {Array.from({ length: TRUST_ITEM_COUNT }, (_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[i % DOT_CLASSES.length]}`} />
              <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
                {t(`items.${i}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
