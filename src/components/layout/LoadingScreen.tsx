'use client';

import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 70 ? 4 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="text-[var(--accent-gold)]">
          <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
          <path d="M10 22L16 10L22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12.5" y1="18" x2="19.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-[var(--card-border)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--accent-gold)] transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-4 text-xs font-[family-name:var(--font-mono)] text-[var(--text-muted)] tabular-nums">
        {progress}%
      </p>
    </div>
  );
}
