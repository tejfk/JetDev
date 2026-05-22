import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 2;
      });
    }, 8);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary overflow-hidden"
        >
          {/* Noise overlay for texture */}
          <div className="absolute inset-0 noise-panel opacity-5" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              {/* Brand Indicator */}
              <div className="flex flex-col items-center">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">
                  Initializing Portfolio
                </span>
                <h2 className="text-2xl font-heading font-bold text-white tracking-widest">
                  JET<span>-</span>JET <span className="text-white/20">©2026</span>
                </h2>
              </div>

              {/* Counter Display */}
              <div className="relative mt-8">
                <span className="text-7xl md:text-8xl font-heading font-bold text-transparent outline-text tracking-tighter opacity-10">
                  {counter}%
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter">
                  {counter}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-48 h-[1px] bg-white/10 mt-4 overflow-hidden rounded-full">
                <motion.div 
                   className="h-full bg-white"
                   initial={{ width: "0%" }}
                   animate={{ width: `${counter}%` }}
                   transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom attribution */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-10 overflow-hidden"
          >
            <p className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-white/20 flex items-center gap-4">
              <span>Experience Design</span>
              <span className="w-8 h-px bg-white/10" />
              <span>Fullstack Native</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
