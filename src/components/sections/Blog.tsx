'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CTAButton } from '@/components/shared/CTAButton';
import { blogPosts } from '@/data/blog';
import { ArrowRight, Clock } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerReveal, StaggerItem } from '@/components/animations/StaggerReveal';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Blog() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isLight = mounted && currentTheme === 'light';

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <FadeIn direction="up">
          <SectionHeader
            label="Articles & Insights"
            title="Latest from the Blog"
          />
        </FadeIn>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <Card glass className="h-full flex flex-col group cursor-pointer overflow-hidden">
                {/* Image Placeholder */}
                <div className={`relative h-48 sm:h-56 ${isLight ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-tertiary)]'} overflow-hidden shrink-0`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${isLight ? 'from-[var(--accent-gold)]/5' : 'from-[var(--accent-gold)]/10'} to-transparent`} />
                  <div className={`absolute inset-0 flex items-center justify-center ${isLight ? 'opacity-20' : 'opacity-30'} group-hover:scale-110 transition-transform duration-500`}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--text-primary)]">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="accent" className="bg-[var(--bg-primary)]/80 backdrop-blur-md">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] font-[family-name:var(--font-mono)] mb-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold)] transition-colors duration-300 break-words">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                      Read Article
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-gold)] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <FadeIn direction="up" delay={0.2} className="text-center">
          <CTAButton label="View All Articles" />
        </FadeIn>
      </div>
    </section>
  );
}
