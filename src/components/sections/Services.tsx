'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { FadeIn } from '@/components/animations/FadeIn';
import { Code, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Building responsive, performant websites with clean, maintainable code that scales.',
    features: ['Next.js & React', 'TypeScript', 'REST & GraphQL'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Creating seamless, pixel-perfect experiences across all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Touch Optimized'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improving speed, Core Web Vitals, and SEO for measurably better user experiences.',
    features: ['Lighthouse 90+', 'Core Web Vitals', 'Image Optimization'],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Subtle spotlight background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <SectionHeader
            label="Services"
            title="What I Can Do For You"
          />
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <Card className="h-full p-8 group relative overflow-hidden">
                  {/* Number watermark */}
                  <div className="absolute top-4 right-6 text-[80px] font-bold text-[var(--text-primary)] opacity-[0.025] font-[family-name:var(--font-mono)] leading-none select-none">
                    0{index + 1}
                  </div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.12)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[rgba(212,175,55,0.12)] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[var(--accent-gold)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                    {service.features.map((f) => (
                      <span key={f} className="text-[11px] text-[var(--text-muted)] font-medium font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-full border border-[var(--card-border)] bg-[var(--bg-tertiary)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
