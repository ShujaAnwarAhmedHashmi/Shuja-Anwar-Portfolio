/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import ThreeBackground from './components/ThreeBackground.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import TechStack from './components/TechStack.tsx';
import Contact from './components/Contact.tsx';
import AIChat from './components/AIChat.tsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simple scroll reveal effect for all sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          section.classList.add('reveal');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative selection:bg-brand-blue selection:text-black overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background & Ambient Effects */}
      <ThreeBackground />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 opacity-[0.03] dot-pattern"></div>
      </div>

      {/* Large Structural Graphic */}
      <div className="fixed bottom-24 right-12 text-[20vw] font-black leading-none opacity-[0.02] select-none pointer-events-none z-0 font-display">
        SHUJA
      </div>

      {/* UI Elements */}
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </div>

      <AIChat />
    </main>
  );
}

