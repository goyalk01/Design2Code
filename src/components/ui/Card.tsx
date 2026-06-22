'use client';

import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
  hoverLift?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className,
  spotlight = true,
  hoverLift = true,
  glass = false,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative rounded-[20px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        glass
          ? 'glass'
          : 'bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[0_2px_16px_rgba(0,0,0,0.3)]',
        hoverLift && 'hover:-translate-y-2 hover:scale-[1.015]',
        isHovered && 'border-[rgba(212,175,55,0.25)] shadow-[0_0_30px_rgba(212,175,55,0.12),0_8px_32px_rgba(0,0,0,0.5)]',
        className
      )}
      {...props}
    >
      {/* Spotlight overlay */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(212,175,55,0.06), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
