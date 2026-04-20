import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import profileImg from '../assets/profile.png';
import Magnetic from './Magnetic';

export default function Hero({ onOpenResume }) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for parallax
  const springX = useSpring(mouseX, { damping: 25, stiffness: 80 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      mouseX.set(x * 60); 
      mouseY.set(y * 60);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Marquee items
  const techStack = [
    "REACT 19", "TAILWIND CSS V4", "FRAMER MOTION", "TYPESCRIPT", 
    "NEXT.JS", "UI/UX DESIGN", "AI-ASSISTED DEV"
  ];
  // Duplicate for seamless infinite loop
  const marqueeItems = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center bg-transparent overflow-hidden pt-28 pb-10 md:pb-0"
    >
      <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 flex-grow">

        {/* Left Side: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-left relative z-10 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm w-fit">
             <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
             <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
               Available for work
             </p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] md:leading-[1] tracking-tighter"
          >
            I Build Interfaces <br className="hidden md:block"/>
            <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 tracking-normal pr-4">
              That Convert.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-0 leading-relaxed font-medium"
          >
            Modern, high-performing web experiences — designed to engage users and drive results.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm sm:text-base text-white/40 max-w-lg mx-0 leading-relaxed"
          >
            I'm <span className="text-white/70">Jet-Jet</span> — a frontend developer obsessed with clean code, AI-powered workflows, and pixel-perfect design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-start gap-4 md:gap-6"
          >
            <Magnetic>
              <a href="#projects" className="btn-bw-primary group">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="btn-bw-secondary"
              >
                Hire Me
              </a>
            </Magnetic>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-16 flex items-center gap-6 opacity-60"
          >
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border-2 border-bg-primary bg-white/10 backdrop-blur-md flex items-center justify-center">
                 <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-bg-primary bg-white/10 backdrop-blur-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">Follow My Dev Journey</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative group mt-8 lg:mt-0 flex justify-center lg:justify-end"
        >
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative w-[18rem] md:w-[28rem] lg:w-[45rem] aspect-square lg:aspect-auto lg:h-[75vh] flex items-center justify-center p-4 lg:p-0"
          >
            {/* The Image Wrapper - Soft masked container */}
            <div
              className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out flex items-center justify-center"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 100%)',
                maskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 100%)'
              }}
            >
              <img
                src={profileImg}
                alt="Jet Jet C. Jancinal"
                loading="lazy"
                className="w-full h-full object-contain contrast-[1.15] brightness-[1.1] scale-[1.1] sm:scale-[1.2] lg:scale-[1.1] origin-center drop-shadow-2xl"
              />
            </div>
            
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="w-full mt-12 py-6 border-y border-white/[0.05] bg-bg-section/30 backdrop-blur-sm overflow-hidden flex relative z-20">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8 mx-8">
              <span className="text-white/40 font-heading text-sm md:text-base lg:text-lg font-bold tracking-[0.2em] uppercase">
                {item}
              </span>
              <span className="text-white/20 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

