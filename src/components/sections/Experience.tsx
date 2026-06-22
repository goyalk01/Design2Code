'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <FadeIn direction="up">
          <SectionHeader
            label="Experience"
            title="My Work Experience"
          />
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <FadeIn direction="down" duration={1.5} className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--card-border)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold)]/50 to-transparent" />
          </FadeIn>

          <StaggerReveal className="space-y-12" staggerDelay={0.15}>
            {experiences.map((exp) => (
              <StaggerItem key={exp.id} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                      : 'bg-[var(--bg-primary)] border-[var(--card-border)]'
                  }`} />
                </div>

                {/* Date */}
                <div className="mb-2">
                  <span className="text-sm font-[family-name:var(--font-mono)] text-[var(--text-muted)]">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[rgba(212,175,55,0.15)] transition-colors duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {exp.role}
                        <span className="text-[var(--text-muted)] font-normal"> · {exp.company}</span>
                      </h3>
                    </div>
                    {exp.isCurrent && (
                      <Badge variant="accent">Current</Badge>
                    )}
                  </div>
                  <p className="text-[var(--text-muted)] mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
