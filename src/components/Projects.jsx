import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects = [
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
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
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
