import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
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
          <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-[101]">
            <div className="flex gap-4">
               <a 
                href="/resume.pdf"
                download="Jet-Dev-Resume.pdf"
                className="px-6 py-2 bg-white text-black text-[0.65rem] font-bold rounded-full hover:bg-white/90 transition-colors uppercase"
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

          {/* Resume Content Container - PDF Viewer */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            className="w-full max-w-5xl h-[85vh] bg-bg-section overflow-hidden shadow-2xl relative rounded-xl border border-white/10"
          >
            {/* Native PDF Viewer with "Clipped Scrollbar" technique */}
            <div className="w-full h-full overflow-hidden">
               <iframe 
                src="/resume.pdf#toolbar=0" 
                className="w-[calc(100%+16px)] h-full border-none"
                title="Resume Preview"
              />
            </div>

            {/* Mobile Fallback Overlay - shown if iframe doesn't render well on some mobile browsers */}
            <div className="absolute inset-0 pointer-events-none md:hidden bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom justify-center p-8">
               <p className="text-white/60 text-[0.6rem] font-bold uppercase tracking-widest text-center">
                 Scroll or use the Download button for full view
               </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
