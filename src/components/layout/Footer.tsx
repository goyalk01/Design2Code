'use client';

import { ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';
import { footerQuickLinks, footerServices, footerResources } from '@/constants/nav';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: GithubIcon, href: siteConfig.socials.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
    { icon: TwitterIcon, href: siteConfig.socials.twitter, label: 'Twitter' },
    { icon: InstagramIcon, href: siteConfig.socials.instagram, label: 'Instagram' },
  ];

  const renderColumn = (column: { title: string; links: { label: string; href: string }[] }) => (
    <div key={column.title}>
      <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
        {column.title}
      </h4>
      <ul className="space-y-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--card-border)]">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Logo + Tagline + Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-[var(--accent-gold)]">
                <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
                <path d="M10 22L16 10L22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12.5" y1="18" x2="19.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {siteConfig.name}
            </a>
            <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
              I build elegant websites and web applications that are fast, scalable and user-friendly.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          {renderColumn(footerQuickLinks)}

          {/* Column 3: Services */}
          {renderColumn(footerServices)}

          {/* Column 4: Resources */}
          {renderColumn(footerResources)}

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
              Stay updated with my latest projects and articles.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-3 py-2.5 text-sm rounded-xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors duration-300"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-3 py-2.5 rounded-xl bg-[var(--accent-gold)] text-[#050505] hover:bg-[var(--accent-gold-hover)] transition-colors duration-300 cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-green-500">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
