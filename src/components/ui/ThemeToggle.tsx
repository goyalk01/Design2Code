'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid synchronous setState in effect
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)]"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] hover:border-[var(--accent-gold)] transition-all duration-300 cursor-pointer group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={`w-5 h-5 text-[var(--accent-gold)] absolute transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        className={`w-5 h-5 text-[var(--accent-gold)] absolute transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}
