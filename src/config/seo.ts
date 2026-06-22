import { siteConfig } from './site';

export const seoConfig = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  jobTitle: 'Web Developer',
  description: siteConfig.description,
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
    siteConfig.socials.instagram,
  ],
};
