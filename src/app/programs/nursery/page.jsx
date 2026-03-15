"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Clock, Users, ArrowRight, Sparkles, BookOpen, Music, Heart } from "lucide-react";

export default function NurseryProgram() {
  const highlights = [
    { icon: Heart, title: "Nurturing Care", desc: "A home-away-from-home environment." },
    { icon: Sparkles, title: "Sensory Play", desc: "Stimulating curiosity through textures and colors." },
    { icon: Music, title: "Rhythmic Learning", desc: "Language development through songs and dance." },
    { icon: BookOpen, title: "Storytelling", desc: "Building imagination at a very early age." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-secondary/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gallery-activity-1.png" 
            alt="Nursery Kids" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full border border-white mb-6"
          >
            <Star className="text-secondary fill-secondary" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ages: 2.5 - 3.5 Years</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-primary mb-6"
          >
            Nursery <span className="text-secondary">Program</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            A world of discovery where Every small step is a giant leap towards creativity and confidence.
          </motion.p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black text-primary leading-tight">
              Giving Your Child the <br /> 
              <span className="text-secondary">Best Possible Start</span>
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed">
              Our Nursery program is meticulously designed to provide a sensory-rich environment that encourages toddlers to explore, learn, and grow. Through a balanced mix of structured play and creative freedom, we help children build essential social and motor skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-xs text-primary/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/admission">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary text-white font-black rounded-3xl shadow-2xl flex items-center space-x-3"
                >
                  <span>ENROLL NOW</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <Image 
                src="/images/gallery-activity-1.png" 
                alt="Nursery Activity" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[80px] rounded-full z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full z-0" />
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">Core Curriculum</h2>
            <p className="text-primary/50">Focused on holistic development across key domains.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sensory Exploration",
              "Language Dev",
              "Motor Skills",
              "Social Skills",
              "Art & Craft",
              "Life Skills"
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-primary/5 flex items-center space-x-4 group hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-lg font-bold text-primary">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Info Section */}
      <section className="py-16 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
              <Users size={28} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">Ratio</span>
              <span className="text-xl font-bold text-primary">1:12 Students</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
              <Clock size={28} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">Time</span>
              <span className="text-xl font-bold text-primary">9:00 AM - 12:30 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
              <BookOpen size={28} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">System</span>
              <span className="text-xl font-bold text-primary">Sensory Based</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
