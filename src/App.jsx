import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-primary pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white opacity-[0.012] blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-white opacity-[0.015] blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '5s', animationDuration: '25s' }} />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-white opacity-[0.01] blur-[90px] animate-blob mix-blend-screen" style={{ animationDelay: '10s', animationDuration: '30s' }} />
      </div>

      <div className="noise-panel" />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main className="bg-transparent">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Stats />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
