import { motion } from 'framer-motion';

const timeline = [
  {
    school: 'Cebu Eastern College',
    degree: 'BS Information Technology',
    period: '2022 – Present',
    status: '3rd Year Student',
    description: 'Focusing on building high-performance web systems and mastering modern frontend architectures.',
  },
  {
    school: 'Abellana National School',
    degree: 'Senior High School',
    period: 'Graduated',
    status: null,
    description: 'Foundational studies in ICT and software logic.',
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
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full text-white/60">
                        {item.status}
                      </span>
                    )}
                    <span className="text-[0.7rem] font-bold uppercase tracking-widest text-text-secondary">
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
