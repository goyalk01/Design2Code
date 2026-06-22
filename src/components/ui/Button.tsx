'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, target, rel, ...props }, ref) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group overflow-hidden';

    const variants = {
      primary:
        'bg-[var(--accent-gold)] text-[#050505] hover:bg-[var(--accent-gold-hover)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]',
      secondary:
        'border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] bg-transparent hover:bg-[var(--accent-gold)] hover:text-[#050505]',
      ghost:
        'text-[var(--text-secondary)] hover:text-[var(--accent-gold)] bg-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-[10px] gap-1.5',
      md: 'px-6 py-3 text-base rounded-[14px] gap-2',
      lg: 'px-8 py-4 text-lg rounded-[14px] gap-2.5',
    };

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        suppressHydrationWarning
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
