import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export function CTAButton({ label, href = '#', onClick }: CTAButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2 text-[var(--accent-gold)] font-medium hover:gap-3 transition-all duration-300 group cursor-pointer"
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
