import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, onVideoClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-bg-primary border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Image Area */}
      <div className="relative aspect-video overflow-hidden bg-bg-section">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        
        {/* Play Button Overlay (if video exists) */}
        {project.videoUrl && (
          <button
            onClick={() => onVideoClick(project.videoUrl)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black scale-90 group-hover:scale-100 transition-transform duration-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[0.6rem] font-bold uppercase tracking-widest text-text-secondary border border-white/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-6 mt-auto">
          <a
            href={project.link}
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-text-secondary transition-colors inline-flex items-center gap-2"
          >
            Case Study
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {project.github && (
            <a
              href={project.github}
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-text-secondary transition-colors"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
