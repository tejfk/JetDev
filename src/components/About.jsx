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
              3rd Year IT Student at Cebu Eastern College, dedicated to the art of clean code and functional systems.
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
            The Human Behind the Code<span className="text-white/20">.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              I’m Jet-Jet, a developer based in Cebu City who believes that great technology shouldn't feel like a chore to use. As a 3rd-year IT student, I've spent less time on "hello world" exercises and more time building systems that actual people use—from digital marketplaces to complex admin dashboards.
            </p>
            <p>
              My focus is on **interactive web applications**. I enjoy the challenge of taking a complex business process and distilling it into a clean, intuitive interface. Whether it's a bidding system for a marketplace or a decision-tool for administrators, my goal is always the same: **Simplicity on the surface, power underneath.**
            </p>
            <p>
              When I'm not coding, I'm usually exploring new design trends or learning about the latest shifts in frontend architecture. I'm currently looking for opportunities where I can apply my "builder" mindset to real-world products.
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
