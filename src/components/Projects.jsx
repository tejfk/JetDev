import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, animate } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const originalProjects = [
  {
    id: 1,
    title: "Atenay's Flower Shop",
    description: "A beautiful, interactive e-commerce platform for floral crafts, featuring custom themes and budget-friendly bouquet selections.",
    detailedDescription: "A specialized floral e-commerce platform designed for personalized gifting. It features dynamic theme switching, a custom bouquet builder, and a seamless checkout experience. Built with React and Framer Motion for premium interactivity.",
    image: "/assets/flower_shop.png",
    videoUrl: "/assets/flower_shop_hover.webp",
    tags: ["React", "E-commerce", "Framer Motion", "UI/UX"],
    websiteUrl: "https://atenays-flower-shop.vercel.app/",
    github: "#",
  },
  {
    id: 2,
    title: "Lifewood / AI & Data",
    description: "A professional landing page for a global AI & Data services company, showcasing scale across 16+ countries.",
    detailedDescription: "A modern, high-tech enterprise landing page for Lifewood, a global leader in AI & Data solutions. The design prioritizes trust, scale, and clarity, featuring globe-spanning service visualizations and interactive team insights.",
    image: "/assets/lifewood.png",
    videoUrl: "/assets/lifewood_hover.webp",
    tags: ["React", "Enterprise", "AI/Data", "Modern UI"],
    websiteUrl: "https://react-lifewood.vercel.app/",
    github: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const railRef = useRef(null);
  
  // High-performance motion values
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 150 });

  // Quadruple projects for infinite loop logic (Endless feel with 2 projects)
  const projects = useMemo(() => [...originalProjects, ...originalProjects, ...originalProjects, ...originalProjects], []);
  
  // Calculate original width for resetting
  const [originalWidth, setOriginalWidth] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initial position in the middle set
    const width = originalProjects.length * (window.innerWidth < 768 ? window.innerWidth * 0.9 + 24 : 500 + 32);
    setOriginalWidth(width);
    x.set(-width);

    return () => window.removeEventListener('resize', checkMobile);
  }, [x]);

  // Handle Loop Snapping
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (originalWidth === 0) return;
      if (latest <= -originalWidth * 2) {
        x.set(latest + originalWidth);
      } else if (latest >= 0) {
        x.set(latest - originalWidth);
      }
    });
    return () => unsubscribe();
  }, [originalWidth, x]);

  const handleWheel = (e) => {
    // Only scroll horizontally if mouse is over cards
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      x.set(x.get() - e.deltaY);
    } else {
      x.set(x.get() - e.deltaX);
    }
  };

  const scrollGallery = (direction) => {
    const step = isMobile ? window.innerWidth * 0.85 : 532;
    const target = direction === 'right' ? x.get() - step : x.get() + step;
    animate(x, target, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
  };

  return (
    <section id="projects" className="relative min-h-screen bg-bg-primary overflow-hidden py-24 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20 mb-16 relative z-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Selected Works
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Featured Projects<span className="text-white/20">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Navigation - Sides */}
      <div className="absolute inset-y-0 left-4 md:left-10 z-30 flex items-center pointer-events-none">
        <button
          onClick={() => scrollGallery('left')}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white transition-all pointer-events-auto hover:text-black group shadow-2xl"
          aria-label="Previous Project"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 md:right-10 z-30 flex items-center pointer-events-none">
        <button
          onClick={() => scrollGallery('right')}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white transition-all pointer-events-auto hover:text-black group shadow-2xl"
          aria-label="Next Project"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Rail */}
      <div 
        ref={containerRef}
        onWheel={handleWheel}
        className="relative z-10 w-full cursor-grab active:cursor-grabbing flex items-center select-none"
      >
        <motion.div
          ref={railRef}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
          style={{ x: springX }}
          className="flex gap-8 px-10 md:px-20"
        >
          {projects.map((project, i) => (
            <div 
              key={`${project.title}-${i}`} 
              className="flex-shrink-0 w-[85vw] md:w-[500px] pointer-events-none"
            >
              <div className="pointer-events-auto">
                <ProjectCard
                  project={project}
                  index={i % originalProjects.length}
                  onOpenDetails={() => setSelectedProject(project)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
