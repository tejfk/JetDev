import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Systems Developed', value: '2+' },
  { label: 'Graduate', value: '2026' },
];

export default function Stats() {
  return (
    <section className="bg-bg-primary py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center lg:items-start group"
          >
            <span className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter transition-transform group-hover:scale-105 duration-300">
              {stat.value}
            </span>
            <span className="mt-2 text-[0.65rem] md:text-[0.75rem] font-bold text-text-secondary uppercase tracking-[0.2em]">
              {stat.label}
            </span>
            {/* Minimal accent line */}
            <div className="mt-4 w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-white transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
