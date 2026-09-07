import React from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE, SERVICES } from '../data';
import { Navbar } from './Navbar';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden rounded-b-[50px] md:rounded-b-[60px] bg-[#0B0B0B] select-none"
      style={{
        borderBottomLeftRadius: '60px',
        borderBottomRightRadius: '60px',
        background:
          'radial-gradient(circle at 75% 50%, rgba(255, 87, 40, 0.4) 0%, rgba(139, 0, 0, 0.2) 40%, #0B0B0B 80%)',
      }}
    >
      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Editorial Photo */}
        <motion.div
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.03 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="relative w-full h-full"
        >
          <img
            src={HERO_IMAGE}
            alt="Creative Director silhouette with round sunglasses in profile with cinematic crimson and orange lighting"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[58%_35%] md:object-[54%_30%] opacity-90 mix-blend-luminosity"
          />
        </motion.div>

        {/* Cinematic Color Grading & Gradients matching theme */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle at 75% 50%, rgba(255, 87, 40, 0.4) 0%, rgba(139, 0, 0, 0.2) 40%, transparent 80%)',
          }}
        />
        <div
          className="absolute inset-0 z-0 opacity-45"
          style={{
            background: 'linear-gradient(to right, #0B0B0B 40%, transparent 70%)',
          }}
        />

        {/* Bottom Ambient Darkening for Services strip */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none" />
      </div>

      {/* Embedded Navigation */}
      <Navbar onOpenContact={onOpenContact} />

      {/* Hero Core Content */}
      <div className="relative z-10 w-full px-6 md:px-8 mt-6 md:mt-10 pb-8">
        {/* Main 2-Column Split: Headline vs Secondary Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Eyebrow + Huge Title */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              id="hero-eyebrow"
              className="text-[12px] text-[#FF5728] uppercase tracking-[0.2em] mb-2 font-semibold"
            >
              Hey, I'm a
            </p>
            <h1
              id="hero-heading"
              className="text-white text-[56px] sm:text-[72px] md:text-[80px] lg:text-[88px] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
            >
              Creative
              <br />
              Director
            </h1>
          </motion.div>

          {/* Right Column: Secondary Message */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 md:pt-10 lg:pt-12"
          >
            <h2
              id="hero-quote-heading"
              className="text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-tight font-semibold mb-3 tracking-tight"
            >
              Great design should
              <br />
              feel invisible.
            </h2>
            <p
              id="hero-quote-subtext"
              className="text-[13px] text-[#B8B8B8] max-w-[300px] leading-relaxed font-normal"
            >
              From logo to language, I build brands that connect and convert across all platforms.
            </p>
          </motion.div>
        </div>

        {/* Bottom Service Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          id="hero-services-strip"
          className="mt-14 md:mt-20 border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-4"
        >
          <div className="flex flex-wrap items-center gap-x-8 lg:gap-x-12 gap-y-2">
            {SERVICES.map((srv) => (
              <div
                key={srv.number}
                className="text-[10px] uppercase tracking-widest text-[#747474] font-medium flex items-center"
              >
                <span className="text-[#FF5728] mr-1.5 font-bold">
                  {srv.number.replace('#', '')}
                </span>
                <span>{srv.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
