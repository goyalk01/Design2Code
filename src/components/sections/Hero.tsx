'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import dynamic from 'next/dynamic';
const HeroScene = dynamic(() => import('@/components/sections/HeroScene').then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[var(--bg-secondary)] rounded-full animate-pulse" />
});
import { FadeIn } from '@/components/animations/FadeIn';

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
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="up" delay={0.1}>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-availability absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-400 light:text-green-600">
                  {siteConfig.availability}
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              {/* Greeting */}
              <p className="text-lg text-[var(--text-muted)] mb-2">Hi, I&apos;m</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              {/* Name */}
              <h1 className="mb-2">
                <span className="gradient-text">{siteConfig.name}</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              {/* Role */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-secondary)] mb-6 font-[family-name:var(--font-heading)]">
                Web Developer
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              {/* Description */}
              <p className="text-lg text-[var(--text-muted)] max-w-lg mb-8 leading-relaxed">
                {siteConfig.description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="primary" size="lg" href="#projects">
                  View My Work
                </Button>
                <Button variant="secondary" size="lg" href="#contact">
                  Contact Me
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.7}>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Hero Visual */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <FadeIn direction="left" delay={0.3} className="w-full">
              <div className="relative w-full max-w-lg aspect-square">
                <HeroScene />
                {/* Decorative rings around Three.js scene */}
                <div className="absolute inset-0 rounded-full border border-[var(--card-border)]/20 shadow-[0_0_80px_rgba(212,175,55,0.05)]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}
