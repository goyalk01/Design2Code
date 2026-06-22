import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { Statistics } from '@/components/sections/Statistics';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Clients } from '@/components/sections/Clients';
import { Testimonials } from '@/components/sections/Testimonials';
import { Education } from '@/components/sections/Education';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { jsonLd } from '@/config/seo';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CommandPalette } from '@/components/layout/CommandPalette';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CommandPalette />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Statistics />
        <Projects />
        <Experience />
        <Clients />
        <Testimonials />
        <Education />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
