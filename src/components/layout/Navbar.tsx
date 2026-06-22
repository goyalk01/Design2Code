'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { navItems } from '@/constants/nav';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--card-border)]/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="container-custom flex items-center justify-between h-20" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2 text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors duration-300 min-w-0 shrink"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[var(--accent-gold)]">
            <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
            <path d="M10 22L16 10L22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12.5" y1="18" x2="19.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="truncate max-w-[140px] sm:max-w-none">{siteConfig.name}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${activeSection === item.href.replace('#', '')
                  ? 'text-[var(--accent-gold)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-gold)]" />
              )}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
            href={siteConfig.resumeUrl}
          >
            <Download className="w-4 h-4" />
            Download CV
          </Button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] hover:border-[var(--accent-gold)] transition-colors duration-300 cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--card-border)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-h-[calc(100vh-80px)] overflow-y-auto ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="container-custom py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${activeSection === item.href.replace('#', '')
                  ? 'text-[var(--accent-gold)] bg-[rgba(212,175,55,0.08)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--card-border)] mt-2">
            <Button variant="secondary" size="md" className="w-full" href={siteConfig.resumeUrl}>
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}