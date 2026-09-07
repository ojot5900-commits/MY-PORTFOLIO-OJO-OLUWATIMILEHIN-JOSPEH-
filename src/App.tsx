import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      id="portfolio-canvas"
      className="min-h-screen w-full bg-[#090909] text-white flex flex-col items-center justify-start py-0 md:py-8 lg:py-12 px-0 md:px-4 selection:bg-[#FF5728] selection:text-white antialiased"
      style={{
        background: 'linear-gradient(135deg, #7A2B18 0%, #351513 50%, #090909 100%)',
      }}
    >
      {/* Central Editorial Website Container */}
      <main
        id="portfolio-container"
        className="w-full max-w-[1040px] bg-[#0B0B0B] rounded-none md:rounded-[36px] overflow-hidden shadow-2xl border-0 md:border md:border-white/[0.08] relative"
      >
        {/* 01 - Hero Section (with Embedded Navigation) */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 02 - Client / Brand Trust Section */}
        <TrustSection />

        {/* 03 - About / Design Philosophy */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 04 - Project Showcase (3-Column Portrait Grid) */}
        <ProjectShowcase />

        {/* Footer Editorial Note */}
        <footer
          id="site-footer"
          className="w-full border-t border-white/10 px-6 md:px-10 lg:px-12 py-8 bg-[#0B0B0B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#747474]"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">Folioblox</span>
            <span>—</span>
            <span>Creative Direction & Brand Identity</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="hover:text-white transition-colors"
            >
              Back to top ↑
            </a>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </footer>
      </main>

      {/* Global Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
