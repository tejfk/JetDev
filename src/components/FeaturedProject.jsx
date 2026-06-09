import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function FeaturedProject() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-white opacity-[0.015] blur-[150px] rounded-full pointer-events-none -translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-screen-2xl mx-auto px-0 md:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 px-6 md:px-12 lg:px-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
              Featured Project
            </p>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
            thriftstudio<span className="text-white/20">.</span>
          </h2>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-6 md:mx-12 lg:mx-20"
        >
          <div className="glass-panel overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-72 md:h-96 lg:h-auto lg:min-h-[500px] overflow-hidden group" style={{ backgroundColor: '#0a0a0a' }}>
                <img
                  src="/assets/thrift_studio.jpg"
                  alt="thriftstudio — Archival fashion digital experience"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]/30 opacity-40" />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Framer Motion', 'Motion', 'High-Noir'].map(tag => (
                    <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-widest text-text-secondary border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tighter mb-6">
                  thriftstudio.
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="border-l-2 border-white/10 pl-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">The Problem</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Archival fashion needed a curated, elevated digital showcase that went beyond a standard e-commerce layout.
                    </p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">My Solution</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Designed a scroll-driven, era-based fashion archive with horizontal sticky galleries and cinematic motion design.
                    </p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">The Result</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Elevated visual storytelling with high user engagement and a unique browsing experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Magnetic>
                    <a
                      href="https://thriftstudio.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-bw-primary px-8"
                    >
                      View Live Site
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
