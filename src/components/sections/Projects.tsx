'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CTAButton } from '@/components/shared/CTAButton';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects, projectCategories } from '@/data/projects';
import { ProjectModal } from '@/components/sections/ProjectModal';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

// Unique visual fingerprint per project thumbnail
const thumbClasses = [
  'project-thumb-1',
  'project-thumb-2',
  'project-thumb-3',
  'project-thumb-4',
  'project-thumb-5',
  'project-thumb-6',
];

// Unique SVG illustration per project category
function ProjectThumbIllustration({ index }: { index: number }) {
  const configs = [
    // E-commerce - shopping bag + lines
    { color: '#4A90D9', paths: (<><rect x="5" y="8" width="14" height="13" rx="2" stroke="#4A90D9" strokeWidth="1.5"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#4A90D9" strokeWidth="1.5"/><line x1="12" y1="12" x2="12" y2="17" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="14.5" x2="15" y2="14.5" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round"/></>) },
    // Dashboard - chart bars
    { color: '#9B59B6', paths: (<><rect x="3" y="14" width="4" height="7" rx="1" fill="#9B59B6" fillOpacity="0.4" stroke="#9B59B6" strokeWidth="1"/><rect x="10" y="9" width="4" height="12" rx="1" fill="#9B59B6" fillOpacity="0.4" stroke="#9B59B6" strokeWidth="1"/><rect x="17" y="5" width="4" height="16" rx="1" fill="#9B59B6" fillOpacity="0.4" stroke="#9B59B6" strokeWidth="1"/><path d="M3 7l6-4 6 5 6-6" stroke="#9B59B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>) },
    // Restaurant - fork and knife
    { color: '#2ECC71', paths: (<><path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="2" x2="7" y2="22" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/><path d="M21 15.5c0 3-1.5 5.5-5 5.5V2c2.8 0 5 4 5 9v4.5z" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/></>) },
    // Education - graduation cap
    { color: '#E67E22', paths: (<><path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>) },
    // Social/Blog - message bubble
    { color: '#E74C3C', paths: (<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="9" y1="9" x2="15" y2="9" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="13" x2="13" y2="13" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round"/></>) },
    // Portfolio - layers
    { color: '#1ABC9C', paths: (<><polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="2 17 12 22 22 17" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="2 12 12 17 22 12" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>) },
  ];
  const c = configs[index % configs.length];
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
      {c.paths}
    </svg>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative" style={{background: 'var(--bg-primary)'}}>
      {/* Subtle section bg variation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
      
      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
          />
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-14 flex-wrap">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[var(--accent-gold)] text-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--card-border)] hover:text-[var(--text-primary)] hover:border-[var(--accent-gold)]/40 hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="overflow-hidden group cursor-pointer h-full flex flex-col" onClick={() => setSelectedProject(project)}>
                  {/* Thumbnail with unique gradient */}
                  <div className={`relative h-52 overflow-hidden shrink-0 ${thumbClasses[index % thumbClasses.length]}`}>
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }} />
                    {/* Glow orb */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full blur-2xl opacity-20" style={{background: 'rgba(212,175,55,0.5)'}} />
                    </div>
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <ProjectThumbIllustration index={index} />
                      </div>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="accent" className="text-[10px] bg-black/40 backdrop-blur-md border-white/10 text-white/80">
                        {project.category}
                      </Badge>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="w-11 h-11 rounded-xl bg-[var(--accent-gold)] text-[#050505] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors duration-300 flex items-start justify-between gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-0.5" />
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--card-border)]">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-[11px] text-[var(--text-muted)]">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <FadeIn direction="up" delay={0.2} className="text-center mt-14">
          <CTAButton label="View All Projects" />
        </FadeIn>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
