import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Magnetic from './Magnetic';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Basic scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY === 0) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'bg-bg-primary/70 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.substring(1) || (link.href === '#' && activeSection === 'home');
            
            return (
              <motion.a
                key={link.label}
                href={link.href === '#home' ? '#' : link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative text-lg font-semibold text-text-secondary hover:text-white transition-colors py-2 px-1"
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full text-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Magnetic>
            <button onClick={onOpenResume} className="text-text-secondary hover:text-white font-medium transition-colors text-sm uppercase tracking-widest">
              Resume
            </button>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-bw-primary scale-90 md:scale-100 origin-right">
              Hire Me
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 z-50"
          aria-label="Toggle Menu"
        >
          <motion.div animate={mobileOpen ? "open" : "closed"} className="flex flex-col gap-1.5">
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }} className="w-6 h-0.5 bg-white block transition-all" />
            <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="w-6 h-0.5 bg-white block transition-all" />
            <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} className="w-6 h-0.5 bg-white block transition-all" />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 h-screen md:hidden bg-bg-primary/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl overflow-hidden z-[40]"
          >
            <div className="flex flex-col gap-6 px-10 py-32 h-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href === '#home' ? '#' : link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-bold text-text-secondary hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="w-full h-px bg-white/10 my-2" />
              <button 
                onClick={() => { setMobileOpen(false); onOpenResume(); }}
                className="text-left text-lg font-bold text-white uppercase tracking-widest"
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-bw-primary w-full text-center mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
