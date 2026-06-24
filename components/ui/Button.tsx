import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "social";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-dim to-cyan-soft text-navy-950 font-semibold hover:from-cyan-soft hover:to-cyan-glow glow-cyan btn-shimmer",
  secondary:
    "glass-card text-text-primary hover:border-cyan-glow/40 font-medium",
  ghost:
    "border border-white/10 text-text-secondary hover:text-text-primary hover:border-cyan-glow/30",
  social:
    "glass-card text-text-muted cursor-not-allowed opacity-50 font-medium",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  children,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/50";
  const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "pointer-events-none" : ""} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={styles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}
