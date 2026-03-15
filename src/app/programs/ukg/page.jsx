"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Rocket, Cpu, Globe, Trophy, ArrowRight, Laptop, Microscope, Palette, Calculator } from "lucide-react";

export default function UKGProgram() {
  const highlights = [
    { icon: Cpu, title: "Tech & Coding", desc: "Introduction to logical blocks and algorithms." },
    { icon: Globe, title: "Global Culture", desc: "Exploring the world and its diverse heritage." },
    { icon: Trophy, title: "Sports Mastery", desc: "Building physical endurance and team spirit." },
    { icon: Microscope, title: "Sci-Tech Lab", desc: "Hands-on experiments in our modern lab." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-accent-purple/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gallery-classroom-1.png" 
            alt="UKG Kids" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full border border-white mb-6"
          >
            <Star className="text-accent-purple fill-accent-purple" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Ages: 4.5 - 5.5 Years</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-primary mb-6 uppercase"
          >
            UKG <span className="text-accent-purple">PROGRAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            Empowering future leaders with AI-integrated learning and critical thinking skills.
          </motion.p>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <Image 
                src="/images/gallery-classroom-1.png" 
                alt="UKG Lab" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-purple/10 blur-[80px] rounded-full z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl font-black text-primary leading-tight">
              Prepping for <br /> 
              <span className="text-accent-purple">Formal Schooling</span>
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed">
              The UKG (Senior Kindergarten) year at PM International is a transformative period. We focus on advanced phonics, mathematical reasoning, and an introduction to the digital world, ensuring our students are more than ready for Grade 1.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-purple/5 rounded-2xl flex items-center justify-center text-accent-purple">
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
                  <span>APPLY NOW</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-purple/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">AI & <span className="text-accent-purple">Digital Fluency</span></h2>
            <p className="text-white/50 text-xl max-w-2xl">We integrated technology responsibly to spark logical thinking and problem solving.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Coding Blocks", icon: Cpu },
              { label: "Digital Art", icon: Palette },
              { label: "Interactive Math", icon: Calculator },
              { label: "Safe Internet", icon: Globe }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 text-center">
                <feature.icon className="mx-auto mb-4 text-accent-purple" size={40} />
                <span className="font-bold text-lg">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
