"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Clock, Users, ArrowRight, Brain, Palette, Calculator, FlaskConical } from "lucide-react";

export default function LKGProgram() {
  const highlights = [
    { icon: Brain, title: "Literacy Launch", desc: "Building strong foundations in reading and phonics." },
    { icon: Calculator, title: "Nuemracy Fun", desc: "Interactive math games and number concepts." },
    { icon: Palette, title: "Creative Arts", desc: "Expression through varied artistic mediums." },
    { icon: FlaskConical, title: "Junior Science", desc: "Understanding the world through observation." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/facility-indoor.png" 
            alt="LKG Kids" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full border border-white mb-6"
          >
            <Star className="text-primary fill-primary" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ages: 3.5 - 4.5 Years</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-primary mb-6 uppercase"
          >
            LKG <span className="text-secondary">PROGRAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            Nurturing independence and cognitive growth through structured curiosity and creative play.
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
              A Journey of <br /> 
              <span className="text-secondary">Growth & Learning</span>
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed">
              Our LKG (Junior Kindergarten) curriculum is designed to bridge the gap between play-way and formal learning. We introduce complex concepts in science and math through games, while continuing to foster emotional intelligence and social confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
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
                  <span>REQUEST INFO</span>
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
                src="/images/facility-indoor.png" 
                alt="LKG Learning" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full z-0" />
          </motion.div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">What They Learn</h2>
            <p className="text-primary/50">Comprehensive curriculum for early academic excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Phonics Mastery",
              "Number Values",
              "Environmental Awareness",
              "Design Thinking",
              "Bilingual Skills",
              "Self Expression",
              "Team Collaboration",
              "Public Speaking"
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-primary/5 flex items-center space-x-3 group hover:border-primary/20 transition-all"
              >
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-bold text-primary/80">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
