'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-3xl shadow-2xl custom-scrollbar"
          >
            {/* Close Button */}
            <button
              suppressHydrationWarning
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image Area */}
            <div className="relative h-64 sm:h-80 bg-[var(--bg-tertiary)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 to-[var(--bg-tertiary)] flex items-center justify-center">
                 <div className="w-20 h-20 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shadow-2xl">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--accent-gold)]">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                    {project.title}
                  </h2>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" href={project.liveUrl} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Site
                  </Button>
                  <Button variant="secondary" href={project.githubUrl} target="_blank">
                    <GithubIcon className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>

              {/* Grid Layout for details */}
              <div className="grid md:grid-cols-3 gap-10">
                {/* Main Content (2/3) */}
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      Overview
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      The Challenge
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {project.caseStudy?.challenge || 'Building a highly scalable and performant application while ensuring an exceptional user experience across all devices and network conditions.'}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      The Solution
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {project.caseStudy?.solution || 'Implemented a modern architecture using Next.js and React, resulting in improved load times and smoother interactions.'}
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                      The Outcome
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {project.caseStudy?.outcome || 'Successfully launched the platform with positive feedback, exceeding performance targets.'}
                    </p>
                  </section>
                </div>

                {/* Sidebar (1/3) */}
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--card-border)]">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
