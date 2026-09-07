import React from 'react';
import { CLIENT_LOGOS } from '../data';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="relative z-10 w-full bg-[#151515] py-5 px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shrink-0 select-none"
      style={{
        borderBottomLeftRadius: '60px',
        borderBottomRightRadius: '60px',
      }}
    >
      {/* Left Headline */}
      <div className="shrink-0">
        <p
          id="trust-heading"
          className="text-[11px] leading-tight text-[#B8B8B8] font-medium uppercase tracking-wider"
        >
          Trusted by brands
          <br />
          I've helped shape
        </p>
      </div>

      {/* Right Monochromatic Geometric Logos */}
      <div
        id="client-logos-grid"
        className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-80 hover:opacity-100 transition-opacity"
      >
        <div className="flex items-center space-x-2 text-white">
          <div className="w-3 h-3 bg-white shrink-0" />
          <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
            Supa Blox
          </span>
        </div>

        <div className="flex items-center space-x-2 text-white">
          <div className="w-3 h-3 bg-white rotate-45 shrink-0" />
          <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
            Hype Blox
          </span>
        </div>

        <div className="flex items-center space-x-2 text-white">
          <div className="w-3 h-3 border border-white shrink-0" />
          <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
            Frame Blox
          </span>
        </div>

        <div className="flex items-center space-x-2 text-white">
          <div className="w-3 h-3 bg-white rounded-full shrink-0" />
          <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-wider">
            Ultra Blox
          </span>
        </div>
      </div>
    </section>
  );
};
