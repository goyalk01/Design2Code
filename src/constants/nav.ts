import type { NavItem, FooterColumn } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const footerQuickLinks: FooterColumn = {
  title: 'Quick Links',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Resume', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const footerServices: FooterColumn = {
  title: 'Services',
  links: [
    { label: 'Web Development', href: '#services' },
    { label: 'Responsive Design', href: '#services' },
    { label: 'Web Applications', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Performance Optimization', href: '#services' },
  ],
};

export const footerResources: FooterColumn = {
  title: 'Resources',
  links: [
    { label: 'Blog', href: '#blog' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#experience' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
};
