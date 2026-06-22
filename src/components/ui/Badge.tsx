import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default:
      'bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--card-border)]',
    outline:
      'bg-transparent text-[var(--text-muted)] border border-[var(--card-border)]',
    accent:
      'bg-[rgba(212,175,55,0.1)] text-[var(--accent-gold)] border border-[rgba(212,175,55,0.2)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-[8px] tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
