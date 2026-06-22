import { Badge } from '@/components/ui/Badge';

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
      <Badge variant="accent" className="mb-4">
        {label}
      </Badge>
      <h2 className="mt-4 text-[var(--text-primary)]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
