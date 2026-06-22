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
        'relative overflow-hidden rounded-[20px] border border-[var(--card-border)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        glass
          ? 'bg-[rgba(24,24,27,0.6)] backdrop-blur-xl light:bg-[rgba(255,255,255,0.7)]'
          : 'bg-[var(--card-bg)]',
        hoverLift && 'hover:-translate-y-1.5 hover:scale-[1.01]',
        isHovered && 'border-[rgba(212,175,55,0.2)] shadow-[0_0_20px_rgba(212,175,55,0.1),0_4px_24px_rgba(0,0,0,0.4)]',
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
