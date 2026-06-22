interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Label chip */}
      <div className={`inline-flex items-center gap-2 mb-5 ${centered ? 'mx-auto' : ''}`}>
        <div className="h-px w-5 bg-[var(--accent-gold)]" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent-gold)] font-[family-name:var(--font-mono)]">
          {label}
        </span>
        <div className="h-px w-5 bg-[var(--accent-gold)]" />
      </div>
      <h2 className="mt-2 text-[var(--text-primary)] leading-tight">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-[var(--text-muted)] leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
