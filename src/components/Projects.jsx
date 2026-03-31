import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';

// Mock data - same as before but B&W theme-ready
const projects = [
  {
    title: 'Marketplace Engine',
    description: 'A custom bidding and marketplace system built for high-performance transactions and user trust.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['React', 'Firebase', 'Tailwind'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Admin Analytics Suite',
    description: 'Decision-support dashboard with real-time data visualization and automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Chart.js', 'PostgreSQL'],
    videoUrl: null,
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Client Management Tool',
    description: 'Streamlined CRM designed specifically for freelance developers and non-tech users.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'Supabase'],
    videoUrl: null,
    link: '#',
    github: '#',
    featured: false,
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
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
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block max-w-sm text-text-secondary text-sm leading-relaxed"
          >
            Building systems that bridge the gap between complex backend logic and user-friendly interfaces.
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onVideoClick={setSelectedVideo}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="btn-bw-secondary inline-flex">
            Explore More on Github
          </a>
        </motion.div>
      </div>

      {selectedVideo && (
        <VideoModal url={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
}
