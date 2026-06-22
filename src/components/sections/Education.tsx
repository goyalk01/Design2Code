'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { CTAButton } from '@/components/shared/CTAButton';
import { educationData, certifications } from '@/data/education';
import { GraduationCap, Award } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';

export function Education() {
  return (
    <section id="education" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <FadeIn direction="up">
          <SectionHeader
            label="Education & Certifications"
            title="My Background"
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-8 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--accent-gold)]" />
                Education
              </h3>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <FadeIn direction="down" duration={1.5} delay={0.2} className="absolute left-4 top-0 bottom-0 w-px bg-[var(--card-border)]" />

              <StaggerReveal className="space-y-8" staggerDelay={0.15}>
                {educationData.map((edu) => (
                  <StaggerItem key={edu.id} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-gold)] border-2 border-[var(--bg-secondary)]" />

                    {/* Date */}
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--text-muted)] block mb-1">
                      {edu.startYear} — {edu.endYear}
                    </span>

                    <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-[var(--text-muted)] mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-8 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--accent-gold)]" />
                Certifications
              </h3>
            </FadeIn>

            <StaggerReveal className="space-y-4" staggerDelay={0.15}>
              {certifications.map((cert) => (
                <StaggerItem key={cert.id}>
                  <Card className="p-5" hoverLift={false}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-[var(--accent-gold)]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          {cert.platform} · {cert.year}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <FadeIn direction="up" delay={0.4} className="mt-6">
              <CTAButton label="View All Certifications" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
