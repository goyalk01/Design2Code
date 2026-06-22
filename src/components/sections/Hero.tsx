'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import dynamic from 'next/dynamic';
const HeroScene = dynamic(() => import('@/components/sections/HeroScene').then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />,
});
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    { icon: GithubIcon, href: siteConfig.socials.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
    { icon: TwitterIcon, href: siteConfig.socials.twitter, label: 'Twitter' },
    { icon: InstagramIcon, href: siteConfig.socials.instagram, label: 'Instagram' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-mesh), var(--bg-primary)' }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Large ambient glow behind right side */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(212,175,55,0.07) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div className="order-1 lg:order-1">
            <FadeIn direction="up" delay={0.1}>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(34,197,94,0.07)] border border-[rgba(34,197,94,0.18)] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-availability absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-400">
                  {siteConfig.availability}
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              {/* Greeting + Name */}
              <p className="text-base sm:text-lg text-[var(--text-muted)] mb-1 font-medium">Hi, I&apos;m</p>
              <h1 className="mb-0 leading-none break-words">
                <span className="gradient-text">{siteConfig.name}</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              {/* Role with decorative line */}
              <div className="flex items-center gap-4 mt-3 mb-6">
                <div className="h-px w-8 bg-[var(--accent-gold)]/40" />
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)] font-[family-name:var(--font-heading)] tracking-wide">
                  Web Developer
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              {/* Description */}
              <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-md mb-8 leading-relaxed">
                {siteConfig.description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.55}>
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Button variant="primary" size="lg" href="#projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="secondary" size="lg" href="#contact">
                  Contact Me
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.65}>
              {/* Social divider + icons */}
              <div className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-medium">Follow</span>
                <div className="h-px w-6 bg-[var(--card-border)]" />
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Hero 3D Visual */}
          <div className="order-2 lg:order-2 flex items-center justify-center">
            <FadeIn direction="left" delay={0.3} className="w-full">
              <div className="relative w-full max-w-[480px] mx-auto aspect-square">
                {/* Outer decorative orbits */}
                <div className="absolute inset-0 rounded-full border border-[var(--card-border)]/15 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-[var(--accent-gold)]/8 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-[var(--card-border)]/10 animate-[spin_25s_linear_infinite]" />

                {/* Three.js canvas */}
                <HeroScene />

                {/* Orbiting dot (decorative) */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--accent-gold)] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
                </div>

                {/* Central glow */}
                <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}