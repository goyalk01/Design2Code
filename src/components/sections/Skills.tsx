'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { CTAButton } from '@/components/shared/CTAButton';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

function SkillIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    HTML5: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#E44D26" d="M8 4l3.5 39.5L24 48l12.5-4.5L40 4H8z" />
        <path fill="#F16529" d="M24 6v38l10-3.5L37 6H24z" />
        <path fill="#fff" d="M24 18h-8l.5 5H24v-5zm0 10h-7l.5 5 6.5 2v-5.5L24 28zm0-16H14l.5 5H24v-5z" />
        <path fill="#EBEBEB" d="M24 28v5.5l6.5-2 .5-3.5H24zm0-10v5h7.5l.5-5H24zm0-6v5h14l.5-5H24z" />
      </svg>
    ),
    CSS3: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#1572B6" d="M8 4l3.5 39.5L24 48l12.5-4.5L40 4H8z" />
        <path fill="#33A9DC" d="M24 6v38l10-3.5L37 6H24z" />
        <path fill="#fff" d="M24 18h8l-.5 5H24v5h7l-1 6-6 2v-5.5l-6.5-2-.5-3.5h7z" />
        <path fill="#EBEBEB" d="M24 18h-8l.5 5H24v-5zm-1 10h-6l.5 5 6.5 2v-5.5l-1-1.5z" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect fill="#F7DF1E" width="48" height="48" rx="4" />
        <path d="M13 35l3-2c.6 1.1 1.2 2 2.5 2 1.2 0 2-.5 2-2.4V19h3.7v13.7c0 4-2.3 5.8-5.7 5.8-3 0-4.8-1.6-5.5-3.5zm13-0.3l3-1.9c.8 1.3 1.9 2.3 3.7 2.3 1.6 0 2.6-.8 2.6-1.9 0-1.3-.8-1.8-2.8-2.6l-1-.4c-2.8-1.2-4.6-2.7-4.6-5.8 0-2.9 2.2-5.1 5.6-5.1 2.4 0 4.2.8 5.4 3l-3 1.9c-.6-1.2-1.4-1.6-2.4-1.6-1.1 0-1.8.7-1.8 1.6 0 1.1.7 1.6 2.3 2.3l1 .4c3.3 1.4 5.1 2.9 5.1 6.1 0 3.5-2.7 5.4-6.4 5.4-3.6 0-5.9-1.7-7-3.9z" fill="#000" />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="4.5" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="2">
          <ellipse cx="24" cy="24" rx="18" ry="7" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
        </g>
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#339933" d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <path fill="#fff" d="M24 22c-3.3 0-4.8 1.7-4.8 3.1 0 2.1 1.6 2.7 4.6 3 3.6.3 5.4 1.2 5.4 3.9 0 2.4-2 3.8-5.4 3.8-3 0-4.5-1-5.4-2.8l2-.9c.6 1 1.5 1.7 3.4 1.7 2 0 3.2-.7 3.2-2 0-1.2-.5-1.7-3.4-2.2-2.7-.5-5.6-1.2-5.6-4.5 0-2.5 2-4.3 5.2-4.3 2.3 0 4 .7 5 2.5l-2 1c-.7-1-1.6-1.5-3-1.5-1.8 0-2.8.7-2.8 1.7z" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#F05032" d="M44.2 21.8L26.2 3.8c-1-1-2.6-1-3.6 0l-3.7 3.7 4.7 4.7c1.1-.4 2.3-.1 3.1.7.8.8 1.1 2 .7 3.1l4.5 4.5c1.1-.4 2.4-.1 3.2.7 1.2 1.2 1.2 3 0 4.2-1.2 1.2-3 1.2-4.2 0-1-1-1.1-2.4-.5-3.5l-4.2-4.2v11c.3.1.6.4.8.6 1.2 1.2 1.2 3 0 4.2-1.2 1.2-3 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2.3-.3.6-.5 1-.6V17.3c-.4-.1-.7-.3-1-.6-1-1-1.1-2.4-.5-3.5l-4.6-4.6-12.2 12.2c-1 1-1 2.6 0 3.6l18 18c1 1 2.6 1 3.6 0l17.8-17.8c1-1 1-2.7 0-3.7z" />
      </svg>
    ),
  };

  return <>{icons[name] || <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)]" />}</>;
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <SectionHeader
            label="My Skills"
            title="Technologies I work with"
          />
        </FadeIn>

        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill, index) => (
            <StaggerItem key={skill.name}>
              <Card glass className="p-6 text-center group cursor-pointer h-full">
                <div className="relative mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  {/* Progress ring */}
                  <svg className="absolute inset-0 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="var(--card-border)"
                      strokeWidth="3"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 35}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 35 * (1 - skill.level / 100) }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                      style={{ opacity: 0.7 }}
                    />
                  </svg>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <SkillIcon name={skill.name} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.category}
                </p>
                <p className="text-xs text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.yearsOfExperience}+ years
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="text-center">
          <CTAButton label="View All Skills" />
        </div>
      </div>
    </section>
  );
}
