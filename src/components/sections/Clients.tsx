'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';

const clients = [
  'Company One',
  'Company Two',
  'Company Three',
  'Company Four',
  'Company Five',
  'Company Six',
];

export function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-20 bg-[var(--bg-secondary)] border-y border-[var(--card-border)]">
      <div className="container-custom">
        <SectionHeader
          label="Clients"
          title="Trusted by Amazing Companies"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center h-20 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-gold)]/20 transition-all duration-300 cursor-default group"
            >
              <span className="text-sm font-semibold opacity-50 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">
                LOGO
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
