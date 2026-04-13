import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding bg-bg-primary relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] -translate-y-1/2 bg-white opacity-[0.015] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch relative z-10">
        
        {/* Left: Decorative Elements / Title */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
               <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
                 About Me
               </p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
              Engineering precise <br />
              <span className="text-white/40">digital solutions.</span>
            </h2>
          </motion.div>

          {/* Premium Blockquote / Callout */}
          <motion.div
            style={{ y: yOffset }}
            className="hidden lg:flex flex-col gap-6 mt-12 pl-8 border-l border-white/10"
          >
            <p className="text-xl font-heading text-white/80 leading-relaxed max-w-sm italic">
              "Dedicated to the art of clean code, seamless interactions, and functional scalable systems."
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
              Based in Cebu City, PH
            </p>
          </motion.div>
        </div>

        {/* Right: Content Bento/Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass-panel p-8 md:p-10"
          >
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
               <span className="w-2 h-2 rounded-full border border-white/20" />
               Background
             </h3>
             <p className="text-text-secondary leading-relaxed text-lg">
               I am a motivated Information Technology graduate specialized in building and deploying modern web applications. I focus on delivering functional digital solutions that combine clean code architectures with powerful technologies.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 hover:bg-white/[0.03] transition-colors"
          >
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
               <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
               AI Integration
             </h3>
             <p className="text-text-secondary leading-relaxed">
               Expertise in AI-assisted development and rapid prototyping. I iterate on complex systems with speed and precision, using state-of-the-art tools.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 md:p-10 hover:bg-white/[0.03] transition-colors flex flex-col justify-between items-start"
          >
            <div>
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                 <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                 Philosophy
               </h3>
               <p className="text-text-secondary leading-relaxed">
                 Committed to staying at the forefront of the industry, delivering products that help businesses succeed through cutting-edge technology.
               </p>
            </div>
            <div className="mt-8">
              <a href="#contact" className="text-sm font-bold text-white uppercase tracking-widest hover:text-white/70 transition-colors flex items-center gap-2">
                Let's Connect
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
