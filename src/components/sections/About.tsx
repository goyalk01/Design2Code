'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { FadeIn as SingleFadeIn } from '@/components/animations/FadeIn';

const philosophyCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Design-Driven',
    body: 'I believe great engineering deserves great design.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Performance-First',
    body: 'Speed is a feature. Every millisecond counts.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{background: 'var(--bg-secondary)'}}>
      {/* Ambient glow top-left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Premium Profile Visual */}
          <div className="relative">
            <SingleFadeIn direction="right" delay={0.2} className="relative w-full max-w-sm mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute -inset-6 rounded-[40px] border border-[var(--accent-gold)]/8" />
              <div className="absolute -inset-3 rounded-[36px] border border-[var(--card-border)]/40" />
              
              {/* Main card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--card-bg)] border border-[var(--card-border)]">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(100,100,255,0.08) 0%, transparent 50%)',
                }} />
                
                {/* Grid dots */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }} />
                
                {/* Profile placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.04)] border border-[var(--accent-gold)]/20 flex items-center justify-center">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-gold)]/50">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-sm font-semibold text-[var(--text-primary)]/60">{siteConfig.name}</p>
                    <p className="text-xs text-[var(--text-muted)]/60 font-[family-name:var(--font-mono)]">{siteConfig.role}</p>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--card-bg)] to-transparent">
                  <div className="flex items-center justify-between text-[11px] font-medium">
                    <div className="flex items-center gap-1.5 text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {siteConfig.availability}
                    </div>
                    <span className="text-[var(--text-muted)] font-[family-name:var(--font-mono)]">{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--accent-gold)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[var(--text-primary)]">50+ Projects</p>
                    <p className="text-[10px] text-[var(--text-muted)]">Delivered</p>
                  </div>
                </div>
              </div>

              {/* Decorative gold dot grid */}
              <div className="absolute -bottom-6 -left-6 grid grid-cols-4 gap-2 opacity-25">
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
              <div className="-mt-6 space-y-4 mb-8">
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                  With over a decade of experience in front-end and back-end development, I love turning complex ideas into clean, functional, and highly scalable web applications.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  My approach combines technical excellence with aesthetic precision, ensuring every project not only functions flawlessly but looks extraordinary.
                </p>
              </div>
            </SingleFadeIn>

            <StaggerReveal className="grid sm:grid-cols-2 gap-4 mb-10" staggerDelay={0.1} initialDelay={0.3}>
              {philosophyCards.map((card) => (
                <StaggerItem key={card.title} className="p-5 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] hover:border-[var(--accent-gold)]/20 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-[var(--accent-gold)] mb-3 group-hover:bg-[rgba(212,175,55,0.12)] transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-[var(--text-primary)] font-semibold mb-1.5">{card.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{card.body}</p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <SingleFadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4">
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
