import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative w-full pt-10 md:pt-14 pb-8 md:pb-10 px-6 md:px-8 bg-[#0B0B0B]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left Column: Eyebrow + Powerful Editorial Headline */}
        <div className="md:col-span-7">
          <p
            id="about-eyebrow"
            className="text-[11px] text-[#FF5728] uppercase tracking-[0.2em] mb-4 font-bold"
          >
            Behind the Designs
          </p>
          <h2
            id="about-heading"
            className="text-white text-[38px] sm:text-[44px] lg:text-[48px] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase"
          >
            Shaping
            <br />
            Experiences That
            <br />
            Make Life Simpler
          </h2>
        </div>

        {/* Right Column: Statement Paragraph + Call to Action */}
        <div className="md:col-span-5 flex flex-col justify-between pt-2 md:pt-6">
          <p
            id="about-statement"
            className="text-[16px] text-[#B8B8B8] leading-snug font-medium mb-8 max-w-[420px]"
          >
            I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Subtext */}
            <div>
              <p
                id="about-subtext"
                className="text-[13px] text-[#747474] leading-tight font-normal"
              >
                Let's Build Something
                <br />
                Meaningful Together
              </p>
            </div>

            {/* Orange CTA Button */}
            <button
              id="about-cta-btn"
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center bg-[#FF5A1F] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider space-x-3 transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer shadow-lg shadow-[#FF5A1F]/20"
            >
              <span>Get in touch</span>
              <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
