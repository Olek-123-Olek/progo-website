import { type CSSProperties, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
  accent?: "cyan" | "red" | "green" | "amber" | "none";
  style?: CSSProperties;
}

export function GlassCard({
  children,
  className = "",
  highlight = false,
  accent = "none",
  style,
}: GlassCardProps) {
  const accentBorder =
    accent === "cyan"
      ? "border-cyan-glow/20 hover:border-cyan-glow/35"
      : accent === "red"
        ? "border-red-accent/20 hover:border-red-accent/35"
        : accent === "green"
          ? "border-green-accent/25 hover:border-green-glow/40"
          : accent === "amber"
            ? "border-amber-accent/25 hover:border-amber-glow/40"
            : "";

  return (
    <div
      className={`glass-card rounded-2xl p-6 ${highlight ? "pricing-highlight" : ""} ${accentBorder} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
