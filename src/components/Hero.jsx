import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import profileImg from '../assets/profile.png';
import Magnetic from './Magnetic';

export default function Hero({ onOpenResume }) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate position as center-based percentage (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      mouseX.set(x * 50); // Move up to 50px
      mouseY.set(y * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const title = "Jet Jet C. Jancinal";
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center section-padding pt-0 pb-0 bg-bg-primary overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Side: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.p
            variants={wordVariants}
            className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            Frontend Web Developer | AI-Assisted Developer
          </motion.p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter flex flex-wrap justify-center lg:justify-start gap-x-4">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={word === "Jancinal" ? "opacity-40 italic block w-full lg:w-auto" : ""}
              >
                {word}
                {word === "C." && <br className="hidden lg:block" />}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={wordVariants}
            className="mt-8 text-lg md:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            I specialize in building modern web applications with a focus on AI-assisted development, rapid prototyping, and delivering functional digital solutions.
          </motion.p>

          <motion.div
            variants={wordVariants}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Magnetic>
              <a href="#projects" className="btn-bw-primary">
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={onOpenResume}
                className="btn-bw-secondary"
              >
                View CV
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative group"
        >
          {/* Subtle Glow - Mouse Reactive */}
          <motion.div
            style={{
              x: useSpring(mouseX, { damping: 40, stiffness: 200 }),
              y: useSpring(mouseY, { damping: 40, stiffness: 200 })
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-white/[0.02] rounded-full blur-[120px] pointer-events-none z-0"
          />

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

