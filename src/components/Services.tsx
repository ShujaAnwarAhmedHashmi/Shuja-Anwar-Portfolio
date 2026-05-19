import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Calendar, 
  BarChart, 
  Cloud 
} from 'lucide-react';

const services = [
  {
    title: "Web Applications",
    desc: "Scaleable, high-performance SaaS platforms and custom web solutions built with modern stacks.",
    icon: <Globe className="w-8 h-8 text-brand-blue" />,
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    title: "AI Automation",
    desc: "Intelligent systems that automate tasks using LLMs, computer vision, and predictive analytics.",
    icon: <Cpu className="w-8 h-8 text-brand-purple" />,
    tags: ["Gemini API", "Pinecone", "Workflow"]
  },
  {
    title: "Enterprise Systems",
    desc: "Robust ERP and POS systems designed to streamline business operations and accounting.",
    icon: <Layers className="w-8 h-8 text-brand-cyan" />,
    tags: ["ERP", "POS", "PostgreSQL"]
  },
  {
    title: "Desktop Solutions",
    desc: "Cross-platform desktop applications for specialized tasks and offline capabilities.",
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
    tags: ["Electron", "Tauri", "Native"]
  },
  {
    title: "Admins & Dashboards",
    desc: "Beautifully designed administrative panels to control and monitor your data effectively.",
    icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    tags: ["Data Viz", "UI/UX", "Charts"]
  },
  {
    title: "Cloud Architecture",
    desc: "Secure and optimized cloud deployments that ensure 99.9% uptime and global scale.",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    tags: ["AWS", "Vercel", "Docker"]
  },
  {
    title: "Booking Systems",
    desc: "Specialized Travel, Umrah, and Appointment booking systems for the modern service industry.",
    icon: <Calendar className="w-8 h-8 text-red-500" />,
    tags: ["Booking", "Payments", "SEO"]
  },
  {
    title: "API Integrations",
    desc: "Connecting your business with the world through seamless third-party API integrations.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    tags: ["Stripe", "OAuth", "Webhooks"]
  }
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-brand-cyan font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Service Arsenal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-6xl md:text-8xl font-display font-bold mt-6 tracking-tighter leading-[0.85]"
          >
            Digital <span className="text-stroke">Solutions</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-none relative group overflow-hidden transition-all hover:border-brand-cyan/40"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-widest">PRO_MODULE_{i+1}</div>
              
              <div className="relative z-10">
                <div className="mb-8 text-brand-cyan opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 text-gray-300 transition-colors group-hover:text-white">{service.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-8 tracking-wide">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[9px] uppercase font-mono tracking-tighter text-brand-cyan/40">
                      // {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
