'use client';

import { useEffect, useRef } from 'react';
import type { Stat } from '@/types';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

const statIcons = [
  // Briefcase/projects
  <svg key="proj" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9" y1="14.5" x2="15" y2="14.5"/></svg>,
  // Clock/experience
  <svg key="exp" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  // Users/clients
  <svg key="clients" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Code/technologies
  <svg key="tech" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
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
    <section id="statistics" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Rich multi-layer background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.07)_0%,transparent_65%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />

      <div className="container-custom relative z-10">
        <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="stat-card-glow relative rounded-2xl p-6 sm:p-8 text-center group hover:border-[var(--accent-gold)]/30 transition-all duration-500 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-gold)]/5 rounded-bl-3xl" />
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[rgba(212,175,55,0.08)] text-[var(--accent-gold)] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {statIcons[index]}
                </div>
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-1 font-[family-name:var(--font-mono)] tracking-tight">
                  <Counter value={stat.value} />
                  <span className="text-[var(--accent-gold)]">{stat.suffix}</span>
                </div>
                {/* Label */}
                <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
