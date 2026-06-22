'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CTAButton } from '@/components/shared/CTAButton';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { projects, projectCategories } from '@/data/projects';
import { ProjectModal } from '@/components/sections/ProjectModal';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[var(--bg-tertiary)] relative">
      <div className="container-custom">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[var(--accent-gold)] text-[#050505]'
                  : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--card-border)] hover:text-[var(--text-primary)] hover:border-[var(--accent-gold)]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-[var(--bg-tertiary)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/5 to-transparent flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-muted)]">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[var(--bg-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="w-10 h-10 rounded-full bg-[var(--accent-gold)] text-[#050505] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] flex items-center justify-center hover:scale-110 transition-transform duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <CTAButton label="View All Projects" />
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
