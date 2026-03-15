"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Users, Calendar, ArrowRight } from "lucide-react";

/**
 * Reusable Program Section Component
 */
const ProgramSection = ({ 
  title, 
  description, 
  curriculum, 
  ageGroup, 
  image, 
  color, 
  href,
  reverse = false 
}) => {
  return (
    <section className={`py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="flex items-center space-x-3">
              <div className={`px-4 py-1.5 rounded-full ${color.bg} ${color.text} text-[10px] font-black uppercase tracking-widest`}>
                {ageGroup}
              </div>
            </div>

            <h2 className={`text-4xl md:text-5xl font-black text-primary leading-tight`}>
              {title}
            </h2>

            <p className="text-xl text-primary/70 leading-relaxed font-medium">
              {description}
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-black text-primary uppercase tracking-widest">Core Curriculum</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {curriculum.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${color.bg} flex items-center justify-center ${color.text}`}>
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-primary/80 font-medium text-sm transition-colors group-hover:text-primary">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 border-t border-primary/5">
               <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40`}>
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="block text-[8px] font-black text-primary/30 uppercase tracking-widest leading-none mb-1">Ratio</span>
                    <span className="text-primary font-bold text-sm">1:15 Class</span>
                  </div>
               </div>
               <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40`}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="block text-[8px] font-black text-primary/30 uppercase tracking-widest leading-none mb-1">Duration</span>
                    <span className="text-primary font-bold text-sm">Full Academic</span>
                  </div>
               </div>
            </div>

            <div className="pt-6">
                <Link href={href || "#"}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 ${color.bg.replace('/10', '').replace('/5', '')} ${color.text.replace('text-', 'bg-').replace('text-primary', 'bg-primary')} text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl flex items-center gap-3`}
                    >
                        <span>LEARN MORE</span>
                        <ArrowRight size={16} />
                    </motion.button>
                </Link>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotate: reverse ? -2 : 2 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1 }}
             className="w-full lg:w-1/2 relative"
          >
            <div className={`aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white ${color.glow} shadow-2xl`}>
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Artistic Decoration */}
            <div className={`absolute -bottom-10 ${reverse ? '-right-10' : '-left-10'} w-40 h-40 ${color.bg} opacity-20 blur-[80px] rounded-full z-0`} />
            <div className={`absolute -top-10 ${reverse ? '-left-10' : '-right-10'} w-40 h-40 bg-accent-purple/10 blur-[80px] rounded-full z-0`} />
            
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className={`absolute top-1/2 ${reverse ? '-right-6' : '-left-6'} bg-white p-4 rounded-3xl shadow-xl z-20 border border-primary/5 hidden md:block`}
            >
               <div className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center ${color.text}`}>
                  <CheckCircle2 size={24} />
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
