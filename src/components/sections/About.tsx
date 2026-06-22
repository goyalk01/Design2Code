'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { FadeIn as SingleFadeIn } from '@/components/animations/FadeIn';

export function About() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Profile Image */}
          <div className="relative">
            <SingleFadeIn direction="right" delay={0.2} className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--card-border)]">
              {/* Decorative frame */}
              <div className="absolute -inset-1 rounded-3xl border-2 border-[var(--accent-gold)]/10" />
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-muted)]">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                ))}
              </div>
            </SingleFadeIn>
          </div>

          {/* Right — About Text */}
          <div>
            <SingleFadeIn direction="left" delay={0.1}>
              <SectionHeader
                label="About Me"
                title="I'm passionate about building digital experiences."
                centered={false}
              />
            </SingleFadeIn>

            <SingleFadeIn direction="left" delay={0.2}>
              <div className="-mt-8 space-y-4">
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  With over a decade of experience in front-end and back-end development, I love turning complex ideas into clean, functional, and highly scalable web applications.
                </p>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  My approach combines technical excellence with aesthetic precision, ensuring every project not only functions flawlessly but looks extraordinary.
                </p>
              </div>
            </SingleFadeIn>

            <StaggerReveal className="grid sm:grid-cols-2 gap-6 my-10" staggerDelay={0.1} initialDelay={0.3}>
              <StaggerItem className="p-5 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] shadow-sm">
                <h4 className="text-[var(--text-primary)] font-semibold mb-2">Design-Driven</h4>
                <p className="text-sm text-[var(--text-muted)]">I believe great engineering deserves great design.</p>
              </StaggerItem>
              <StaggerItem className="p-5 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] shadow-sm">
                <h4 className="text-[var(--text-primary)] font-semibold mb-2">Performance-First</h4>
                <p className="text-sm text-[var(--text-muted)]">Speed is a feature. Every millisecond counts.</p>
              </StaggerItem>
            </StaggerReveal>

            <SingleFadeIn direction="up" delay={0.4}>
              <div className="flex gap-4">
                <Button variant="primary" size="lg" href={siteConfig.resumeUrl}>
                  Download Resume
                </Button>
                <Button variant="secondary" size="lg" href="#contact">
                  Let&apos;s Talk
                </Button>
              </div>
            </SingleFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
