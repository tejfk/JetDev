import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-section border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Decorative Side / Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block space-y-4"
        >
          <div className="text-[12rem] font-heading font-bold text-white/[0.02] leading-none select-none">
            ABOUT
          </div>
          <div className="pl-4 border-l border-white/10">
            <p className="text-text-secondary text-sm font-medium max-w-xs leading-relaxed">
              BS Information Technology Graduate from Cebu Eastern College, dedicated to the art of clean code and functional systems.
            </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Professional Web Development based in Cebu City<span className="text-white/20">.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              I am Jet Jet, a dedicated web developer who prioritizes reliability and clear communication in every project. A graduate of Bachelor of Science in Information Technology from Cebu Eastern College, I have moved beyond academic theory to deliver practical high quality solutions for real world applications.
            </p>
            <p>
              I specialize in building robust web environments that streamline business operations. My experience includes developing intuitive marketplaces and architecting complex administrative tools. I focus on creating stable scalable codebases that provide a seamless experience for both users and administrators.
            </p>
            <p>
              Professionalism and attention to detail are at the core of my work. I am committed to delivering projects that meet industry standards while ensuring they are easy to maintain and grow. I am always seeking new challenges where I can contribute to meaningful projects and help businesses succeed through technology.
            </p>
          </div>

          <div className="mt-12">
            <a href="#contact" className="btn-bw-secondary inline-flex">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
