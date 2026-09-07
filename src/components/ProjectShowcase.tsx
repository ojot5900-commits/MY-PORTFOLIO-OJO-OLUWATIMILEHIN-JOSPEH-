import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative w-full pb-10 md:pb-14 px-6 md:px-8 bg-[#0B0B0B]">
      {/* 3-Column Portrait Image Grid */}
      <div
        id="projects-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.id}
            id={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveProject(project)}
            className="group relative cursor-pointer overflow-hidden rounded-[16px] bg-[#151515] aspect-[3/4] select-none shadow-lg"
          >
            {/* Project Image */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none" />

            {/* Corner Indicator on Hover */}
            <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            {/* Editorial Bottom Title */}
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
              <p className="text-[10px] uppercase font-bold text-white/70 tracking-widest mb-1">
                Case 0{idx + 1}
              </p>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
                {project.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Editorial Lightbox / Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div
            id="project-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[65vh] md:max-h-[80vh] object-cover grayscale contrast-[1.08]"
                />
              </div>

              {/* Modal Editorial Details */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#FF5728] mb-2">
                    <span>Project {activeProject.number}</span>
                    <span>{activeProject.year}</span>
                  </div>
                  <h3 className="text-[22px] md:text-[26px] font-extrabold text-white tracking-tight leading-snug">
                    {activeProject.title}
                  </h3>
                  <p className="text-[13px] text-white/60 font-medium mt-1">
                    {activeProject.category}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-[12px] font-semibold text-white/90 uppercase tracking-wider mb-2">
                      Art Direction & Concept
                    </h4>
                    <p className="text-[14px] text-white/75 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[12px] text-white/50">Folioblox Archive</span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 bg-white text-black text-[12px] font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
