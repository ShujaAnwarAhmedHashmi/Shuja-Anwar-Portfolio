import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Sparkles, Terminal } from 'lucide-react';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleType = () => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed]);

  return (
    <span className="text-brand-blue min-h-[1.5em] inline-block">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan glow-cyan"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-cyan">Available for 2024 Innovations</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-8 group">
            SHUJA<br />
            <span className="text-stroke transition-all duration-500 group-hover:text-white">ANWAR</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
            Building intelligent digital solutions that bridge the gap between complex code and human ease. <span className="text-white font-medium italic">"Technology must serve humanity."</span>
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-brand-cyan transition-all"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:border-brand-cyan transition-all"
            >
              View Systems
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:flex flex-col gap-4"
        >
          {/* Right Side Studio Widget */}
          <div className="p-8 glass rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-brand-cyan opacity-50 uppercase tracking-widest">SYSTEM_CORE_01</div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gray-500">Core Specialization</h3>
            <div className="space-y-5">
              {[
                { label: "AI Automation Systems", val: "98%" },
                { label: "Enterprise ERP Solutions", val: "Master" },
                { label: "Next.js SaaS Platforms", val: "Architect" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-sm font-light text-gray-300">{item.label}</span>
                  <span className="text-[10px] font-mono text-brand-cyan/70">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl group hover:border-brand-cyan transition-colors">
              <div className="text-3xl font-bold mb-1 tracking-tighter">120+</div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500">Systems Deployed</div>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl group hover:border-brand-purple transition-colors">
              <div className="text-3xl font-bold mb-1 tracking-tighter text-brand-purple">08</div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500">Global Awards</div>
            </div>
          </div>

          <div className="flex items-center gap-4 px-2 mt-4">
            <div className="flex -space-x-3">
              {['JS', 'TS', 'AI'].map((t, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-white/10 flex items-center justify-center text-[10px] uppercase font-bold backdrop-blur-md">
                  {t}
                </div>
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-40 italic">Tech Stack Evolution</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
