import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding bg-bg-section border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">

        {/* Decorative Side / Branding */}
        <div className="hidden lg:block space-y-4">
          <motion.div
            style={{ x: xOffset }}
            className="text-[12rem] font-heading font-bold text-white/[0.02] leading-none select-none whitespace-nowrap"
          >
            ABOUT ME
          </motion.div>
          <div className="pl-4 border-l border-white/10">
            <p className="text-text-secondary text-sm font-medium max-w-xs leading-relaxed">
              BS Information Technology Graduate from Cebu Eastern College, dedicated to the art of clean code and functional systems.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Specialized in Frontend & AI-Assisted Development<span className="text-white/20">.</span>
          </h2>

          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              I am a motivated and adaptable Information Technology graduate with hands-on experience in building and deploying modern web applications. Based in Cebu City, I focus on delivering functional digital solutions that combine clean code with powerful technology.
            </p>
            <p>
              My expertise lies in AI-assisted development and rapid prototyping. I have a strong focus on creating user-friendly interfaces that solve real-world problems. By integrating AI tools into my development workflow, I am able to build and iterate on complex systems with speed and precision.
            </p>
            <p>
              Professionalism and passion for web technologies are at the core of my work. I am committed to stay at the forefront of the industry, constantly exploring new ways to integrate AI into functional digital products that help businesses succeed through cutting-edge technology.
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
