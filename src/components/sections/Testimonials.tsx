'use client';

import { useState, useEffect, useCallback } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Glass layer background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />

      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <SectionHeader
            label="Testimonials"
            title="What Clients Say"
          />
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Cards container */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 transition-all duration-500 ${
                  index === current
                    ? 'ring-1 ring-[var(--accent-gold)]/20 shadow-[0_0_20px_rgba(212,175,55,0.08)]'
                    : ''
                }`}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[var(--accent-gold)] opacity-30 mb-4" />

                {/* Quote text */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[var(--text-muted)]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)] truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] truncate">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-[var(--accent-gold)] text-[var(--accent-gold)]'
                          : 'text-[var(--card-border)]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              suppressHydrationWarning
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  suppressHydrationWarning
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === current
                      ? 'bg-[var(--accent-gold)] w-6'
                      : 'bg-[var(--card-border)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              suppressHydrationWarning
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
