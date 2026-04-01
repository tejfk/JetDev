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
               <button 
                onClick={() => window.print()}
                className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-white/90 transition-colors"
                title="Download / Print Resume"
              >
                DOWNLOAD PDF
              </button>
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
            className="w-full max-w-4xl h-full bg-white text-black p-12 md:p-20 overflow-y-auto shadow-2xl relative custom-scrollbar flex flex-col gap-12"
          >
            {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-black/10 pb-12">
                <div>
                  <h1 className="text-5xl font-bold font-heading tracking-tighter leading-tight italic">Jet Jet C.<br />Jancinal</h1>
                  <p className="mt-4 text-black/50 font-bold uppercase tracking-[0.4em] text-[0.65rem]">BS Information Technology Graduate</p>
                </div>
                <div className="text-right space-y-1 text-sm font-medium">
                  <p className="text-black/60">Cebu City, Philippines</p>
                  <p className="text-black/60">jancinaljetjet@gmail.com</p>
                  <a href="https://www.facebook.com/tejey03" className="hover:underline block">facebook.com/tejey03</a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <h3 className="text-black/30 font-bold uppercase tracking-[0.3em] text-[0.6rem]">Objective</h3>
                <p className="text-xl text-black leading-relaxed font-medium">
                  A highly reliable and dedicated web developer specializing in building 
                  robust systems and interactive user experiences. Committed to delivering 
                  professional-grade solutions that focus on scalability and clean architecture.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-black/30 font-bold uppercase tracking-[0.3em] text-[0.6rem]">Academic Background</h3>
                <div className="space-y-8">
                  <div className="flex justify-between items-baseline gap-4">
                    <div className="grow">
                      <h4 className="text-xl font-bold font-heading">Cebu Eastern College</h4>
                      <p className="text-black/60 font-medium">Bachelor of Science in Information Technology</p>
                    </div>
                    <span className="text-black/40 text-xs font-bold whitespace-nowrap">2022 – 2026</span>
                  </div>
                   <div className="flex justify-between items-baseline gap-4">
                    <div className="grow">
                      <h4 className="text-xl font-bold font-heading">Abellana National School</h4>
                      <p className="text-black/60 font-medium">Junior & Senior High School</p>
                    </div>
                    <span className="text-black/40 text-xs font-bold whitespace-nowrap">2016 – 2022</span>
                  </div>
                </div>
              </div>

               {/* Experience or Skills */}
               <div className="space-y-6">
                <h3 className="text-black/30 font-bold uppercase tracking-[0.3em] text-[0.6rem]">Selected Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="space-y-2">
                    <h5 className="font-bold text-sm">Frontend Engineering</h5>
                    <p className="text-black/50 text-sm leading-relaxed">React, JavaScript (ES6+), Tailwind CSS, Framer Motion, Responsive Design</p>
                  </div>
                   <div className="space-y-2">
                    <h5 className="font-bold text-sm">Backend & Database</h5>
                    <p className="text-black/50 text-sm leading-relaxed">Node.js, Flask (Python), Firebase Firestore, MySQL, RESTful API Design</p>
                  </div>
                   <div className="space-y-2">
                    <h5 className="font-bold text-sm">System Architecture</h5>
                    <p className="text-black/50 text-sm leading-relaxed">Marketplace Engine Logic, Admin Analytical Dashboards, UI/UX Prototyping</p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-auto pt-12 border-t border-black/10 flex justify-between items-center opacity-40">
                <p className="text-[10px] font-bold uppercase tracking-widest italic">Jet Dev Portfolio • 2026</p>
                <p className="text-[10px] font-bold uppercase">Cebu City, Philippines</p>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
