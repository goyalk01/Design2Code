'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Search, ArrowRight, Download, Mail, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface CommandItem {
  id: string;
  label: string;
  category: string;
  action: () => void;
  icon: React.ReactNode;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = useCallback((id: string) => {
    setIsOpen(false);
    setQuery('');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const commands: CommandItem[] = useMemo(() => [
    { id: 'home', label: 'Go to Home', category: 'Navigate', action: () => navigateTo('home'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'about', label: 'Go to About', category: 'Navigate', action: () => navigateTo('about'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'services', label: 'Go to Services', category: 'Navigate', action: () => navigateTo('services'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'skills', label: 'Go to Skills', category: 'Navigate', action: () => navigateTo('skills'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'projects', label: 'Go to Projects', category: 'Navigate', action: () => navigateTo('projects'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'experience', label: 'Go to Experience', category: 'Navigate', action: () => navigateTo('experience'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'testimonials', label: 'Go to Testimonials', category: 'Navigate', action: () => navigateTo('testimonials'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'blog', label: 'Go to Blog', category: 'Navigate', action: () => navigateTo('blog'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'contact', label: 'Go to Contact', category: 'Navigate', action: () => navigateTo('contact'), icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'resume', label: 'Download Resume', category: 'Actions', action: () => { window.open(siteConfig.resumeUrl, '_blank'); setIsOpen(false); }, icon: <Download className="w-4 h-4" /> },
    { id: 'email', label: 'Send Email', category: 'Actions', action: () => { window.location.href = `mailto:${siteConfig.email}`; setIsOpen(false); }, icon: <Mail className="w-4 h-4" /> },
  ], [navigateTo]);

  const filtered = query
    ? commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => { setIsOpen(false); setQuery(''); }}
      />

      {/* Modal */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 border-b border-[var(--card-border)]">
            <Search className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              className="flex-1 py-4 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none text-sm"
              aria-label="Search commands"
            />
            <button
              onClick={() => { setIsOpen(false); setQuery(''); }}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto py-2">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="px-4 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  {category}
                </div>
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer"
                  >
                    <span className="text-[var(--text-muted)]">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-[var(--text-muted)]">
                No results found
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 border-t border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>Navigate with ↑↓ · Select with Enter</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[10px] font-mono">
              ESC
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
