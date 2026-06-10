import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Reset loading state when project changes
  useEffect(() => {
    setIframeLoaded(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
          className="relative bg-bg-section w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-[2rem] border border-white/10 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Live Preview Side */}
            <div
              className="relative h-72 lg:h-auto min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]"
              style={{ backgroundColor: project.backgroundColor || 'var(--color-bg-primary)' }}
            >
              {project.videoUrl && project.videoUrl.endsWith('.mp4') ? (
                /* Live video preview */
                <>
                  <div className="absolute inset-0 overflow-hidden">
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full h-full ${project.containImage ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-white/70">Live Preview</span>
                  </div>
                </>
              ) : isMobile ? (
                /* Mobile: Static image fallback */
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-section via-transparent to-transparent" />
                </>
              ) : (
                /* Desktop: Live iframe embed */
                <>
                  {/* Loading spinner */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                      <div className="w-8 h-8 border-2 border-white/10 border-t-white/60 rounded-full animate-spin" />
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30">Loading preview...</p>
                    </div>
                  )}
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={project.websiteUrl}
                      title={`${project.title} Live Preview`}
                      className={`h-full border-none transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{ width: 'calc(100% + 20px)' }}
                      onLoad={() => setIframeLoaded(true)}
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                  </div>
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.15em] text-white/70">Live Preview</span>
                  </div>
                </>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-widest text-text-secondary border border-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter mb-6">
                {project.title}
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {project.detailedDescription || project.description}
              </p>

              {/* Case Study Breakdown */}
              {project.problem && (
                <div className="space-y-4 mb-8 border-t border-white/5 pt-8">
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Problem</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Solution</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">Result</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.result}</p>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-6 md:gap-8">
                {project.websiteUrl && project.websiteUrl !== "#" && project.websiteUrl !== "" && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bw-primary px-6 md:px-10"
                  >
                    Visit Live
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
