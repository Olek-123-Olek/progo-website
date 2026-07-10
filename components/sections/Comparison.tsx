import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ROW_KEYS = [
  "liveMap",
  "sharedView",
  "documents",
  "statuses",
  "onePlatform",
  "accounting",
  "driverWorkflow",
] as const;

const COLUMN_KEYS = ["whatsapp", "excel", "portals", "progo"] as const;

type CellValue = "yes" | "no" | "partial";

function ComparisonCell({ value, label }: { value: CellValue; label: string }) {
  if (value === "yes") {
    return (
      <span className="comparison-cell comparison-cell-yes" aria-label={label}>
        <Icon name="check" size={18} />
      </span>
    );
  }

  if (value === "partial") {
    return (
      <span className="comparison-cell comparison-cell-partial" aria-label={label}>
        ~
      </span>
    );
  }

  return (
    <span className="comparison-cell comparison-cell-no" aria-label={label}>
      —
    </span>
  );
}

export function Comparison() {
  const t = useTranslations("comparison");

  return (
    <section id="comparison" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-glow/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="comparison-table-wrap glass-card rounded-2xl overflow-hidden animate-fade-in-up">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col" className="comparison-th comparison-th-feature">
                  {t("featureColumn")}
                </th>
                {COLUMN_KEYS.map((key) => (
                  <th
                    key={key}
                    scope="col"
                    className={`comparison-th ${key === "progo" ? "comparison-th-progo" : ""}`}
                  >
                    {t(`columns.${key}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROW_KEYS.map((rowKey) => (
                <tr key={rowKey}>
                  <th scope="row" className="comparison-td-feature">
                    {t(`rows.${rowKey}.label`)}
                  </th>
                  {COLUMN_KEYS.map((colKey) => {
                    const value = t(`rows.${rowKey}.${colKey}`) as CellValue;
                    const valueLabel = t(`values.${value}`);
                    return (
                      <td
                        key={colKey}
                        className={`comparison-td ${colKey === "progo" ? "comparison-td-progo" : ""}`}
                      >
                        <ComparisonCell value={value} label={valueLabel} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-text-muted">{t("footnote")}</p>
      </div>
    </section>
  );
}
