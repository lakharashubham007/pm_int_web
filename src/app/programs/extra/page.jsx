"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Palette, Music, Rocket, ArrowRight, Star, Trophy, Users, Globe, CheckCircle2 } from "lucide-react";

export default function ExtraCurricularPage() {
  const activities = [
    { title: "Robotics & Tech", icon: Rocket, color: "bg-blue-500", desc: "Introduction to logical thinking and building." },
    { title: "Visual Arts", icon: Palette, color: "bg-pink-500", desc: "Expression through color, shape, and medium." },
    { icon: Music, title: "Music & Dance", color: "bg-purple-500", desc: "Finding rhythm and confidence in performance." },
    { icon: Sparkles, title: "Global Lab", color: "bg-yellow-500", desc: "Language immersion and cultural awareness." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/facility-music.png" 
            alt="Activities" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6"
          >
            <Trophy className="text-secondary" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Beyond the Classroom</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-6 uppercase"
          >
            EXTRACURRICULAR <span className="text-secondary">ENRICHMENT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-medium"
          >
            Developing varied skills, discovering hidden passions, and building all-round excellence.
          </motion.p>
        </div>
      </section>

      {/* Grid of Activities */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[50px] shadow-sm border border-primary/5 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-all group"
             >
                <div className={`w-32 h-32 rounded-[40px] ${activity.color} text-white flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:rotate-6 transition-transform`}>
                   <activity.icon size={48} />
                </div>
                <div className="text-center md:text-left">
                   <h3 className="text-3xl font-black text-primary mb-4">{activity.title}</h3>
                   <p className="text-primary/60 text-lg mb-6 leading-tight">{activity.desc}</p>
                   <ul className="space-y-2">
                       {["Weekly Sessions", "Expert Mentors", "Showcase Events"].map((item, j) => (
                           <li key={j} className="flex items-center space-x-2 text-sm font-bold text-primary/40 uppercase tracking-widest">
                               <CheckCircle2 size={14} className="text-secondary" />
                               <span>{item}</span>
                           </li>
                       ))}
                   </ul>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase CTA */}
      <section className="py-24 bg-[#F8FBFF] border-y border-primary/5 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                  Where <span className="text-secondary">Talent</span> <br /> Meets Opportunity
               </h2>
               <p className="text-lg text-primary/60 mb-10 font-medium">
                  We provide a platform for our students to showcase their extracurricular achievements through annual exhibitions, concerts, and inter-school competitions.
               </p>
               <Link href="/admission">
                   <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-primary text-white font-black rounded-3xl shadow-xl flex items-center space-x-3 uppercase text-xs tracking-[0.2em]"
                   >
                       <span>Join the community</span>
                       <ArrowRight size={20} />
                   </motion.button>
               </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                   <Image src="/images/facility-art.png" alt="Art" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl mt-12">
                   <Image src="/images/facility-music.png" alt="Music" fill className="object-cover" />
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
