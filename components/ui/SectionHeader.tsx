interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  id,
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div id={id} className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {label && (
        <p className="text-cyan-soft text-sm font-medium tracking-widest uppercase mb-3 animate-fade-in-up">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight animate-fade-in-up delay-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed animate-fade-in-up delay-200">
          {description}
        </p>
      )}
    </div>
  );
}
