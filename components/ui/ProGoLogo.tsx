"use client";

import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";

interface ProGoLogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { icon: 36, text: "text-lg", tagline: "text-[10px]" },
  md: { icon: 44, text: "text-xl", tagline: "text-xs" },
  lg: { icon: 52, text: "text-2xl", tagline: "text-sm" },
};

export function ProGoLogo({
  showTagline = false,
  size = "md",
  className = "",
}: ProGoLogoProps) {
  const t = useTranslations("common");
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative shrink-0">
        <div
          className="flex items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 border border-cyan-glow/25 glow-cyan"
          style={{ width: s.icon, height: s.icon }}
        >
          <svg
            viewBox="0 0 40 40"
            className="h-[70%] w-[70%]"
            aria-hidden="true"
          >
            {/* Globe */}
            <circle
              cx="20"
              cy="20"
              r="11"
              fill="none"
              stroke="url(#globeGrad)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="20"
              cy="20"
              rx="5"
              ry="11"
              fill="none"
              stroke="rgba(0,229,255,0.35)"
              strokeWidth="0.8"
            />
            <path
              d="M9 20H31M12 14H28M12 26H28"
              stroke="rgba(0,229,255,0.25)"
              strokeWidth="0.8"
            />
            {/* Red arrow route */}
            <path
              d="M8 28L18 18L28 14L34 10"
              stroke="#ff3344"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#arrowGlow)"
            />
            <path
              d="M30 10H34V14"
              stroke="#ff3344"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <defs>
              <linearGradient id="globeGrad" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
              <filter id="arrowGlow">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-glow animate-pulse-glow shadow-[0_0_8px_#00e5ff]" />
      </div>

      <div className="min-w-0">
        <div className={`font-bold tracking-tight leading-none ${s.text}`}>
          <span className="text-text-primary">Pro</span>
          <span className="text-cyan-glow text-glow">Go</span>
        </div>
        {showTagline && (
          <p
            className={`mt-1 font-medium tracking-wide text-cyan-soft/80 uppercase ${s.tagline}`}
          >
            {t("tagline")}
          </p>
        )}
      </div>
    </div>
  );
}

export function ProGoLogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-dim to-cyan-glow text-navy-950 glow-cyan ${className}`}
    >
      <Icon name="logo" size={20} />
    </span>
  );
}
