import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity Design',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="contact-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-12 h-12 text-[#FF5728] mb-3 animate-bounce" />
                <h3 className="text-[22px] font-bold tracking-tight text-white">Message Dispatched</h3>
                <p className="text-[14px] text-white/60 mt-1 max-w-xs">
                  Thank you for reaching out. We will connect within 24 hours to discuss your brand vision.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[#FF5728] text-[12px] font-bold uppercase tracking-wider">
                    Inquiries & Collaborations
                  </span>
                  <h3 className="text-[26px] font-extrabold tracking-tight text-white mt-1">
                    Get in touch.
                  </h3>
                  <p className="text-[13px] text-white/60 mt-1">
                    Let's create timeless brand identity, art direction, and digital experiences.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#FF5728] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="elena@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#FF5728] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Focus Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#FF5728] transition-colors"
                    >
                      <option value="Brand Strategy">01 // Brand Strategy</option>
                      <option value="Brand Identity Design">02 // Brand Identity Design</option>
                      <option value="Packaging Design">03 // Packaging Design</option>
                      <option value="Creative Direction">04 // Creative Direction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Brief Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the project timeline and scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#FF5728] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 bg-[#FF5A1F] hover:brightness-110 active:scale-[0.99] text-white font-semibold py-3 rounded-xl text-[13px] tracking-tight transition-all shadow-lg shadow-[#FF5A1F]/20 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
