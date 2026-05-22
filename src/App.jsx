import { useEffect, useState, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Preloader from './components/Preloader';

// Lazy loaded below-the-fold components to significantly improve Top Level parsing performance
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const WhyHireMe = lazy(() => import('./components/WhyHireMe'));

const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync Lenis with anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const id = anchor.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          lenis.scrollTo(element);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-primary pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-white opacity-[0.012] blur-[80px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-white opacity-[0.015] blur-[80px] animate-blob mix-blend-screen" style={{ animationDelay: '5s', animationDuration: '25s' }} />
        <div className="absolute top-[40%] left-[20%] w-[25vw] h-[25vw] rounded-full bg-white opacity-[0.01] blur-[60px] animate-blob mix-blend-screen" style={{ animationDelay: '10s', animationDuration: '30s' }} />
      </div>

      <div className="noise-panel" />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main className="bg-transparent">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center opacity-0 transition-opacity duration-1000" />}>
          <Stats />
          <Services />
          <About />
          <WhyHireMe />

          <Projects />
          <Education />
          <CallToAction />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
