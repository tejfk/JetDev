import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'Fast Learner',
    description: "I pick up new frameworks and tools quickly — and I've proven it across multiple shipped projects.",
  },
  {
    number: '02',
    title: 'Design + Code',
    description: "I don't just implement designs — I think in design systems, spacing, and user flow.",
  },
  {
    number: '03',
    title: 'AI-Powered Workflow',
    description: 'Smart tooling means faster delivery, cleaner code, and more time for polish.',
  },
  {
    number: '04',
    title: 'Detail-Oriented',
    description: "Every pixel, every interaction, every edge case — I sweat the details so users don't have to.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyHireMe() {
  return (
    <section className="section-padding bg-bg-section border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/4 w-[35vw] h-[35vw] bg-white opacity-[0.012] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
            <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
              Why Work With Me
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
            Why hire <br className="hidden md:block" />
            <span className="text-white/40">me.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              variants={itemVariants}
              className="glass-panel p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 group flex gap-6 items-start"
            >
              <span className="text-3xl md:text-4xl font-heading font-bold text-white/10 group-hover:text-white/25 transition-colors duration-500 shrink-0 leading-none pt-1">
                {reason.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
