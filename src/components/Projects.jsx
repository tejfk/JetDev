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
    image: "/assets/thrift_studio.jpg",
    videoUrl: "/assets/thrift_studio.jpg",
    tags: ["React", "Framer Motion", "Motion", "High-Noir"],
    websiteUrl: "https://thriftstudio.vercel.app/",
    github: "#",
  },

  {
    id: 2,
    title: "Finest",
    description: "A beautifully crafted, privacy-first personal finance application with a 100% offline-first architecture.",
    detailedDescription: "Finest solves scattered finances by aggregating your entire financial life—cash, banks, e-wallets, and investments—into one unified, elegant dashboard. By keeping all data strictly local and offline-first, Finest ensures maximum privacy and speed, empowering users to make informed financial decisions without sacrificing their personal data.",
    problem: "Managing personal finances can often feel overwhelming and scattered across multiple bank apps and spreadsheets.",
    solution: "Built a privacy-first, offline-first dashboard aggregating all financial accounts (cash, banks, investments) into one place using React Native and SQLite.",
    result: "Users gain complete control over their money with maximum privacy, speed, and real-time net worth tracking.",
    image: "/assets/Finest_mockup.png",
    videoUrl: "/assets/Liveprev.mp4",
    playVideoOnHover: false,
    tags: ["React Native", "Expo", "SQLite", "Zustand"],
    websiteUrl: "#",
    github: "",
    containImage: true,
    backgroundColor: "#FAF9F6",
  },
  {
    id: 3,
    title: "Adlaw Café",
    description: "A warm, sun-inspired café landing page rooted in Cebuano identity and student culture.",
    detailedDescription: "An aesthetic web experience for Adlaw Café in Cebu. Built with Vite and GSAP, it features custom loading animations, sky/cloud parallax layering, text reveals, and a responsive menu showcase designed with high visual fidelity.",
    problem: "Local coffee shops need digital experiences that capture their unique culture and connect directly with their student demographic.",
    solution: "Created an immersive, scroll-triggered experience celebrating the Cebuano sun theme (Adlaw) with smooth micro-animations, student loyalty details, and a clean minimalist design.",
    result: "A visually stunning, interactive storytelling page that elevates the brand's local identity and drives customer engagement.",
    image: "/assets/adlaw-mockup.png",
    tags: ["Vanilla JS", "GSAP", "Vite", "Aesthetic"],
    websiteUrl: "https://adlaw-liard.vercel.app/",
    github: "",
    containImage: true,
    backgroundColor: "#FEFAF4",
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
