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
      'Building responsive and performant websites with clean code.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Creating seamless experiences across all devices and screen sizes.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improving speed, SEO and overall performance for better user experience.',
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

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <Card className="h-full p-8 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-[var(--accent-gold)]/50">
                    <Icon className="w-6 h-6 text-[var(--accent-gold)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
