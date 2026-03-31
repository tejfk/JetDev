import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Firebase / Firestore', 'MySQL'],
  },
  {
    title: 'Systems & Design',
    skills: ['UI/UX Design', 'System Architecture', 'Marketplace Engines', 'Admin Dashboards', 'Data Visualization', 'Interactive Prototyping'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Expertise
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Technical Stack<span className="text-white/20">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 pb-4 border-b border-white/5">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center justify-between text-lg text-text-secondary hover:text-white transition-colors duration-300"
                  >
                    <span>{skill}</span>
                    <div className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
