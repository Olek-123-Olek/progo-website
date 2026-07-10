import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #0f2744 100%)",
          borderRadius: 8,
          border: "2px solid rgba(0, 229, 255, 0.4)",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "2px solid #00e5ff",
            boxShadow: "0 0 12px rgba(0, 229, 255, 0.6)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
