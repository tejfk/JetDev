import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import Magnetic from './Magnetic';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-0 pb-0 bg-bg-primary"
    >
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            Web Developer & System Builder
          </motion.p>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
            Jet Jet C.<br />
            <span className="opacity-40 italic">Jancinal</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            “I design and build interactive web systems that feel simple, but work powerfully behind the scenes.”
          </p>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
            <Magnetic>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-bw-primary"
              >
                View Projects
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.button
                onClick={onOpenResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-bw-secondary"
              >
                Download CV
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative group"
        >
          {/* Subtle Glow - Extremely tight and dim to fix 'gray circle too big' */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-white/[0.01] rounded-full blur-[150px] pointer-events-none z-0" />
          
          <div className="relative z-10 w-full md:w-[40rem] lg:w-[55rem] h-[40vh] md:h-[65vh] lg:h-[85vh] flex items-center justify-center">
            {/* The Image Wrapper - Pure black container to eliminate box edge visible on black background */}
            <div 
              className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out flex items-center justify-center"
              style={{ 
                WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 75%, transparent 100%)',
                maskImage: 'radial-gradient(circle at 50% 40%, black 75%, transparent 100%)'
              }}
            >
               <img
                src={profileImg}
                alt="Jet Jet C. Jancinal"
                className="w-full h-full object-contain contrast-[1.1] brightness-[1.05] scale-110 lg:scale-[1.2] origin-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
