'use client';

import { useEffect, useRef } from 'react';
import type { Stat } from '@/types';
import { Card } from '@/components/ui/Card';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Statistics() {
  return (
    <section id="statistics" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Card glass hoverLift={false} className="p-6 sm:p-8 text-center border-t-2 border-t-[var(--accent-gold)]">
                <div className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-mono)]">
                  <Counter value={stat.value} />
                  <span className="text-[var(--accent-gold)]">{stat.suffix}</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  {stat.label}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
