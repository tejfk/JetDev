import { motion } from 'framer-motion';

const timeline = [
  {
    school: 'Cebu Eastern College',
    degree: 'BS Information Technology',
    period: '2022 – 2026',
    status: 'Graduated',
    description: 'Focused on core Information Technology principles, software engineering, and advanced web development. Developed a strong foundation in building robust, scalable systems and modern user architectures.',
  },
  {
    school: 'Abellana National High School',
    degree: 'Junior & Senior High School',
    period: '2016 – 2022',
    status: 'Graduated',
    description: 'Completed secondary education with a specialized focus on academic achievement and early exploration of computer science and technical logic.',
  },
  {
    school: 'City Central Elementary School',
    degree: 'Elementary Education',
    period: '2010 – 2016',
    status: 'Graduated',
    description: 'Completed primary education foundations with a consistent focus on academic excellence and early participation in school activities.',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-bg-section border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Background
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Education Timeline<span className="text-white/20">.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl relative pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-2 top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Marker */}
                <div className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full border border-white bg-bg-section group-hover:bg-white transition-colors duration-500 z-10" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                      {item.school}
                    </h3>
                    <p className="text-text-secondary font-medium mt-1">{item.degree}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.status && (
                      <span className="text-[0.6rem] font-black uppercase tracking-[0.1em] px-3 py-1 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {item.status}
                      </span>
                    )}
                    <span className="text-[0.75rem] font-medium tracking-tight text-white/40 tabular-nums">
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
