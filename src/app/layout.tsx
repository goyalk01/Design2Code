import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import { seoConfig } from '@/config/seo';
import { Providers } from '@/components/providers/Providers';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
