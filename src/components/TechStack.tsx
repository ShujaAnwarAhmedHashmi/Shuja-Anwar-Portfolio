import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: "React", level: 95, color: "#61DAFB" },
  { name: "Next.js", level: 90, color: "#FFFFFF" },
  { name: "TypeScript", level: 92, color: "#3178C6" },
  { name: "Node.js", level: 88, color: "#339933" },
  { name: "PostgreSQL", level: 85, color: "#336791" },
  { name: "Tailwind CSS", level: 98, color: "#06B6D4" },
  { name: "Gemini AI", level: 85, color: "#00D1FF" },
  { name: "Docker", level: 80, color: "#2496ED" },
];

export default function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-6 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="text-4xl font-display font-bold"
          >
            My <span className="text-brand-blue">Arsenal</span>
          </motion.h2>
          <p className="text-gray-500 mt-4">Crafting digital magic with world-class technologies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden group"
            >
              <div className="bg-black/80 backdrop-blur-xl p-8 rounded-[1.9rem] flex flex-col items-center justify-center border border-white/5 group-hover:border-brand-blue/30 transition-all">
                <div 
                  className="w-16 h-16 rounded-full blur-[20px] absolute -z-10 opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-xl font-bold mb-4">{tech.name}</span>
                
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest mt-3 text-gray-500 group-hover:text-white transition-colors">
                  Proficiency: {tech.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 invert brightness-0">
          {/* Mock floating logos or generic tech patterns */}
          {["React", "Node", "Git", "AWS", "Figma", "Firebase"].map((t) => (
            <span key={t} className="text-2xl font-display font-black tracking-tighter uppercase grayscale hover:grayscale-0 transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
