import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: "thriftstudio.",
    description: "An archival-themed digital fashion experience showcasing curated heritage pieces from Cebu City.",
    detailedDescription: "A high-end, cinematic web experience for an archival fashion brand. Built with React and Framer Motion, it features sophisticated scroll-triggered animations, horizontal sticky gallery sections, and a custom era-based calibration system.",
    problem: "Archival fashion needed a curated, elevated digital showcase that went beyond a standard e-commerce layout.",
    solution: "Designed a scroll-driven, era-based fashion archive with horizontal sticky galleries and cinematic motion design.",
    result: "Elevated visual storytelling with high user engagement and a unique browsing experience.",
    image: "/assets/thrift_studio.png",
    videoUrl: "/assets/thrift_studio_hover.png",
    tags: ["React", "Framer Motion", "Motion", "High-Noir"],
    websiteUrl: "https://thriftstudio.vercel.app/",
    github: "#",
  },
  {
    id: 2,
    title: "Brew Theory | BTCafe",
    description: "A premium, cinematic digital café experience featuring interactive 3D elements and immersive storytelling.",
    detailedDescription: "An editorial-inspired web platform for a modern café. Built with React 19 and Tailwind v4, it integrates Spline 3D scenes, cinematic scroll-triggered animations via Framer Motion, and a sophisticated smooth-scrolling experience using Lenis. The project emphasizes visual excellence and modern typography.",
    problem: "A local café brand needed a digital presence that matched the quality of their product — something beyond a generic template.",
    solution: "Built a cinematic, 3D-enhanced web experience with editorial-inspired design, scroll-triggered animations, and immersive storytelling.",
    result: "Premium brand perception with an immersive, engaging user experience that sets the café apart from competitors.",
    image: "/assets/btcafe_final.png",
    videoUrl: "/assets/btcafe_final.png",
    tags: ["React", "TypeScript", "3D Design", "Framer Motion"],
    websiteUrl: "https://bt-cafe.vercel.app/",
    github: "#",
    objectPosition: "left",
    containImage: true,
    backgroundColor: "#F7F5F2",
  },
  {
    id: 3,
    title: "Crave",
    description: "A premium, cinematic digital food delivery platform featuring an 'Elite Editorial' design system.",
    detailedDescription: "A high-end food delivery web application built with a focus on immersive aesthetics. Features include advanced glassmorphism, cinematic scroll-driven interactions, variable typography, and a seamless Framer Motion-powered authentication system.",
    problem: "Standard food delivery platforms lack a premium, high-end visual aesthetic and engaging micro-interactions.",
    solution: "Developed an interface using advanced glassmorphism, cinematic motion, and an immersive dark-mode UI.",
    result: "A highly engaging, world-class digital experience that elevates the food delivery ordering process.",
    image: "/assets/crave_final.png",
    videoUrl: "/assets/crave_final.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Design System"],
    websiteUrl: "https://crave-silk.vercel.app/",
    github: "#",
    containImage: false,
    modalContain: false,
    imageScale: "scale-[1.04]",
    backgroundColor: "#0A0A0A",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-bg-primary overflow-hidden py-32 border-t border-white/[0.02]">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white opacity-[0.015] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-20 flex flex-col">
        <motion.div
           variants={headerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
               <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
                 Selected Works
               </p>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
              Featured Projects<span className="text-white/20">.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-base lg:text-lg max-w-md pb-2 font-medium">
            A curated selection of my recent work focusing on premium UI design, responsive layouts, and modern tech stacks.
          </p>
        </motion.div>

        {/* CSS Grid for Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              project={project}
              index={i}
              onOpenDetails={() => setSelectedProject(project)}
            />
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
