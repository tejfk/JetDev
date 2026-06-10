import { motion } from 'framer-motion';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/tejfk' },
    { name: 'Facebook', url: 'https://www.facebook.com/tejey03' },
  ];

  return (
    <footer className="bg-bg-primary border-t border-white/5 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">


        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[0.65rem] font-medium text-white/30 uppercase tracking-[0.2em]"
        >
          &copy; {currentYear} Jet Jet C. Jancinal. All rights reserved.
        </motion.div>

      </div>

      {/* Extreme Bottom Accent */}
      <div className="max-w-7xl mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </footer>
  );
}
