import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (windowHeight === 0) {
        setScrollProgress(0);
        return;
      }

      const scroll = totalScroll / windowHeight;
      setScrollProgress(Math.min(Math.max(scroll, 0), 1));
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
      
      {/* Global Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Subtle Grid Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-20 bg-grid-pattern pointer-events-none"></div>

      {/* Interactive Side Scroll */}
      <ScrollProgress progress={scrollProgress} />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-black border-t border-zinc-900 py-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-zinc-500 mb-4">
            Built with React, TypeScript, Tailwind, and Google Gemini.
          </p>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Abhishek Kalugade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;