import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      id="main-navbar"
      className="relative z-30 w-full px-6 md:px-8 pt-6 pb-4 flex items-center justify-between"
    >
      {/* Brand Wordmark */}
      <a
        id="brand-logo"
        href="#home"
        className="text-[14px] md:text-[15px] font-bold tracking-tight text-white transition-opacity hover:opacity-85 select-none"
      >
        Folioblox
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-7 lg:gap-8">
        <div className="flex items-center space-x-7 lg:space-x-8 text-[11px] text-[#B8B8B8] font-medium uppercase tracking-widest">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              id={`nav-link-${item.id}`}
              href={item.href}
              className="text-[#B8B8B8] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Get in touch Pill */}
        <button
          id="nav-cta-btn"
          type="button"
          onClick={onOpenContact}
          className="group bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:bg-neutral-100 hover:shadow-sm active:scale-95 cursor-pointer"
        >
          <span>Get in touch</span>
          <span className="w-4 h-4 bg-[#FF5A1F] rounded-full flex items-center justify-center text-[10px] text-white transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center gap-3">
        <button
          id="mobile-nav-cta"
          type="button"
          onClick={onOpenContact}
          className="bg-white text-black px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider"
        >
          <span>Contact</span>
          <span className="w-3.5 h-3.5 bg-[#FF5A1F] rounded-full flex items-center justify-center text-[9px] text-white">
            <ArrowRight className="w-2 h-2 stroke-[2.5]" />
          </span>
        </button>
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-white/90 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute top-full left-4 right-4 mt-2 bg-[#121212]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-between bg-[#FF5A1F] text-white px-4 py-2.5 rounded-xl text-[13px] font-medium"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
