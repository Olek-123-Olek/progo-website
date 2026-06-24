import { type CSSProperties, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
  accent?: "cyan" | "red" | "none";
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
