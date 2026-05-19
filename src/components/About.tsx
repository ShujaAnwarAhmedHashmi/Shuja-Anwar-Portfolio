import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

const highlights = [
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: "Sincere Mission",
    desc: "Putting human ease above profit. Every line of code is meant to solve a real human problem."
  },
  {
    icon: <Target className="w-6 h-6 text-brand-blue" />,
    title: "Precision Execution",
    desc: "Attention to detail that borders on obsession. Delivering clean, scalable, and robust systems."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Visonary Approach",
    desc: "Not just building for today, but architecting for the technological landscape of the future."
  },
  {
    icon: <Users className="w-6 h-6 text-brand-purple" />,
    title: "Trust & Authority",
    desc: "Building long-term partnerships through transparency, respect, and consistent results."
  }
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-bold mb-6">Mastering Digital Architecture</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">
              Engineering <br />
              Human <span className="text-stroke">Potential</span>.
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-sm uppercase tracking-widest font-medium opacity-80">
              <p>
                SA Studio focuses on the intersection of advanced technology and human necessity. 
                Based in Karachi, our mission is to simplify the complex.
              </p>
              <p>
                From AI automation to massive enterprise systems, each project is a testament to 
                sincerity and visionary engineering.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tighter">05+</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">Years Mastery</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tighter">120+</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">Systems Core</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 glass rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
