import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const alt = "ProGo — All Logistics. One Map.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #060d18 0%, #0a1628 40%, #0f2744 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "2px solid rgba(0, 229, 255, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(0, 229, 255, 0.25)",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: "3px solid #00e5ff",
              }}
            />
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em" }}>ProGo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              background: "linear-gradient(90deg, #7df9ff 0%, #00e5ff 50%, #a78bfa 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("ogTitle")}
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "#94a3b8", maxWidth: 820 }}>
            {t("ogDescription")}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#00e5ff" }}>
          <span>progo.one</span>
          <span style={{ color: "#475569" }}>·</span>
          <span style={{ color: "#cbd5e1" }}>{t("ogTagline")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
