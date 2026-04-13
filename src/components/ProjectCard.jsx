import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  // Note: For animated WebP/GIFs, conditionally mounting the img tag 
  // ensures it doesn't autoplay in the background and starts from frame 0 on hover
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      whileTap="hover"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      onClick={onOpenDetails}
      className="group relative bg-[#0a0a0a] border border-white/[0.05] rounded-[2rem] overflow-hidden cursor-pointer hover:border-white/20 transition-colors duration-500 aspect-[4/5] md:aspect-video flex flex-col shadow-2xl"
    >
      {/* Background Image & Video with Grayscale Toggle */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* Static Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          variants={{
             hover: { scale: 1.05, opacity: project.videoUrl ? 0 : 0.4 },
             initial: { scale: 1, opacity: 0.3 }
          }}
        />
        
        {/* Hover Video Preview */}
        {project.videoUrl && (
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            variants={{
              hover: { opacity: 0.5, scale: 1.05 },
              initial: { opacity: 0, scale: 1 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {isHovered && (
              <img 
                src={project.videoUrl} 
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      </div>

      {/* Content Area - Bottom Aligned */}
      <div className="relative z-10 mt-auto p-8 lg:p-10 flex flex-col justify-end h-full">
        <div className="flex flex-wrap gap-2 mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-widest text-white/80 border border-white/10 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tighter mb-4 transform transition-all duration-500 group-hover:-translate-y-2">
          {project.title}
        </h3>
        
        <p className="text-base text-white/60 leading-relaxed max-w-lg line-clamp-2 italic transform transition-all duration-500 group-hover:-translate-y-2 opacity-80 group-hover:opacity-100">
          {project.description}
        </p>
      </div>

      {/* "View Details" Hover Overlay Element */}
      <div className="absolute top-8 right-8 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700">
           <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </div>
      </div>
    </motion.div>
  );
}

