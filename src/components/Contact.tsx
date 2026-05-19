import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Laptop, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-brand-cyan font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Collaborative Query
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-6xl md:text-8xl font-display font-bold mt-6 tracking-tighter leading-[0.85]"
            >
              Architect <br />
              the <span className="text-stroke">Future</span>.
            </motion.h2>
            
            <p className="text-gray-400 mt-8 mb-16 text-[11px] uppercase tracking-widest font-medium opacity-60 max-w-sm leading-loose">
              Transmuting complex visions into seamless digital architecture. Available for select 2024 ecosystem deployments.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5 text-brand-cyan" />, label: "Direct Interface", value: "hello@shuja.dev" },
                { icon: <Phone className="w-5 h-5 text-brand-cyan" />, label: "Pulse Access", value: "+92 300 1234567" },
                { icon: <MapPin className="w-5 h-5 text-brand-cyan" />, label: "Deployment Node", value: "Karachi, Pakistan" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[8px] font-bold uppercase text-gray-500 tracking-[0.3em] mb-1">{item.label}</h4>
                    <span className="text-xs font-mono tracking-widest uppercase">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 border border-white/10 bg-white/5 backdrop-blur-xl rounded-none"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Subject Identity</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-brand-cyan transition-colors text-xs font-mono" placeholder="NAME_ENTRY" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Query Stream</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-brand-cyan transition-colors text-xs font-mono" placeholder="MAIL_ENTRY" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Project Vector</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-brand-cyan transition-colors text-xs font-mono appearance-none">
                  <option className="bg-[#050505]">AI_AUTOMATION</option>
                  <option className="bg-[#050505]">ENTERPRISE_SYSTEMS</option>
                  <option className="bg-[#050505]">SAAS_ARCHITECTURE</option>
                  <option className="bg-[#050505]">MOBILE_INTERFACE</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Message Buffer</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-brand-cyan transition-colors text-xs font-mono" placeholder="INPUT_DATA..."></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-cyan transition-all flex items-center justify-center gap-4 group"
              >
                Execute Transmission <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-32 border-t border-white/10 px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-brand-cyan flex items-center justify-center font-mono font-bold text-xl tracking-tighter">SA</div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black leading-none mb-1">Architecting Ease</span>
            <span className="text-[8px] uppercase tracking-widest opacity-40">System Core v4.0</span>
          </div>
        </div>

        <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest text-white/40">
           <div className="flex flex-col gap-1">
              <span className="opacity-40">Status</span>
              <span className="text-brand-cyan animate-pulse">Engineering Future</span>
           </div>
           <div className="flex flex-col gap-1">
              <span className="opacity-40">Location</span>
              <span>24.8607° N, 67.0011° E</span>
           </div>
        </div>
        
        <p className="text-[9px] uppercase tracking-[0.2em] font-medium opacity-30 italic">© 2026 Shuja Anwar - Evolutionary Creations</p>
      </footer>
    </section>
  );
}
