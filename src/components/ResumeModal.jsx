import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 md:p-10"
        >
          {/* Action Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-[101]">
            <div className="flex gap-4">
               <a 
                href="/assets/resume/Jet-Jet_Jancinal_Resume.pdf"
                download="Jet-Jet_Jancinal_Resume.pdf"
                className="px-6 py-2 bg-white text-black text-[0.65rem] font-bold rounded-full hover:bg-white/90 transition-colors uppercase shadow-lg"
                title="Download Resume"
              >
                DOWNLOAD PDF
              </a>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/40 hover:text-white transition-colors duration-300"
              title="Close Viewer"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Resume Content Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            className="w-full max-w-5xl h-[85vh] bg-bg-section overflow-hidden shadow-2xl relative rounded-xl border border-white/10"
          >
            {isMobile ? (
              /* Mobile Digital Resume Preview - High Fidelity UI fallback */
              <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center space-y-6 bg-gradient-to-b from-[#111] to-black">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] mb-4">
                  <span className="text-2xl font-heading font-bold text-white/20 uppercase tracking-tighter">JC</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-bold text-white tracking-tighter">
                    Jet Jet C. Jancinal
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                    BSIT Graduate | Aspiring IT Professional
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/5 my-8" />

                <div className="space-y-6 max-w-xs mx-auto">
                   <div className="space-y-2">
                     <span className="text-[0.65rem] text-white/30 uppercase tracking-widest font-bold">Education</span>
                     <p className="text-sm text-white/70 leading-relaxed">
                        BS Information Technology Graduate<br/>
                        <span className="text-xs text-white/40 italic">Cebu Eastern College</span>
                     </p>
                   </div>
                   
                   <div className="space-y-2">
                     <span className="text-[0.65rem] text-white/30 uppercase tracking-widest font-bold">Expertise</span>
                     <p className="text-sm text-white/70 leading-relaxed">
                        UI/UX Design, React Development, & AI-Driven Workflows
                     </p>
                   </div>
                </div>

                <div className="pt-10">
                   <a 
                    href="/assets/resume/Jet-Jet_Jancinal_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white hover:bg-white/5 transition-all duration-500"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">Open Full PDF</span>
                    <svg className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <p className="absolute bottom-10 left-0 right-0 text-white/20 text-[0.6rem] font-medium uppercase tracking-[0.2em]">
                   JetDev Portfolio © 2026
                </p>
              </div>
            ) : (
              /* Native PDF Viewer for Desktop with "Clipped Scrollbar" technique */
              <div className="w-full h-full overflow-hidden">
                <iframe 
                  src="/assets/resume/Jet-Jet_Jancinal_Resume.pdf#toolbar=0" 
                  className="w-[calc(100%+16px)] h-full border-none"
                  title="Resume Preview"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
