import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ZoomIn, Layout, Database, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoSystem ERP",
    category: "Business Systems",
    desc: "A full-scale enterprise resource planning system for manufacturing units, managing supply chain, HR, and finance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Legal Assistant",
    category: "AI Tools",
    desc: "Powered by Gemini, this tool analyzes legal documents and provides summaries with citations from local law databases.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tech: ["OpenAI", "React", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Smart POS V2",
    category: "Business Systems",
    desc: "Cloud-based POS system for retail chains with real-time inventory tracking and multi-store management.",
    image: "https://images.unsplash.com/photo-1556742049-13da736c7459?auto=format&fit=crop&q=80&w=800",
    tech: ["Electron", "SQLite", "React"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Travel & Umrah Portal",
    category: "Web Apps",
    desc: "An end-to-end booking portal for travel agencies specializing in religious tourism and holiday packages.",
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800",
    tech: ["Fullstack", "Redis", "Vercel"],
    link: "#",
    github: "#"
  }
];

const categories = ["All", "Business Systems", "AI Tools", "Web Apps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = projects.filter(p => 
    activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-brand-cyan font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              System Showcase
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-6xl md:text-8xl font-display font-bold mt-6 tracking-tighter leading-[0.85]"
            >
              Elite <span className="text-stroke">Works</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                    ? "bg-brand-cyan text-black border-brand-cyan" 
                    : "bg-white/5 text-gray-500 border-white/10 hover:border-brand-cyan/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative border border-white/10 bg-white/5 rounded-none overflow-hidden"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cyan mb-3 block">
                        {project.category}
                      </span>
                      <h3 className="text-4xl font-display font-bold text-white tracking-tighter leading-none">{project.title}</h3>
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href={project.github} className="p-4 border border-white/20 hover:border-brand-cyan hover:text-brand-cyan transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="p-4 border border-white/20 hover:border-brand-cyan hover:text-brand-cyan transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-[11px] mb-8 line-clamp-2 max-w-sm tracking-wide leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-mono uppercase tracking-tighter text-white/30 group-hover:text-brand-cyan/60 transition-colors">{"//"} {t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
            <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-flex items-center gap-2 text-brand-blue font-bold group"
            >
                View More Projects 
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.span>
            </motion.a>
        </div>
      </div>
    </section>
  );
}
