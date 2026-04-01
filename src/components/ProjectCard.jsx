import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, onOpenDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover="hover"
      whileTap="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={onOpenDetails}
      className="group relative bg-bg-section border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-700 aspect-[4/5] md:aspect-[4/3] lg:aspect-square flex flex-col"
    >
      {/* Background Image & Video with Grayscale Toggle */}
      <div className="absolute inset-0 z-0">
        {/* Static Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 ease-out"
          variants={{
            hover: { grayscale: 0, brightness: 0.75, scale: 1.1, opacity: project.videoUrl ? 0 : 1 },
            initial: { grayscale: 1, brightness: 0.5, scale: 1, opacity: 1 }
          }}
        />
        
        {/* Hover Video Preview */}
        {project.videoUrl && (
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            variants={{
              hover: { opacity: 1 },
              initial: { opacity: 0 }
            }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={project.videoUrl} 
              alt={`${project.title} preview`}
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content Area - Bottom Aligned */}
      <div className="relative z-10 mt-auto p-8 md:p-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[0.6rem] font-bold uppercase tracking-widest text-white/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">
          {project.title}
        </h3>
        
        <p className="text-sm text-white/60 leading-relaxed max-w-sm line-clamp-2 italic">
          {project.description}
        </p>
      </div>

      {/* "View Details" Hover Overlay - Reduced dimming and removed blur to keep the video clear */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="w-32 h-32 rounded-full border border-white flex items-center justify-center"
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
            View Details
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

