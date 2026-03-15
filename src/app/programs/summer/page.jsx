"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sun, Palette, Footprints, Camera, ArrowRight, Star, Music, ThermometerSun, Map } from "lucide-react";

export default function SummerCampPage() {
  const features = [
    { icon: Footprints, title: "Adventure", color: "bg-orange-500" },
    { icon: Camera, title: "Exploration", color: "bg-cyan-500" },
    { icon: Music, title: "Creativity", color: "bg-yellow-500" },
    { icon: Map, title: "Discovery", color: "bg-green-500" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center bg-secondary/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gallery-activity-2.png" 
            alt="Summer Camp" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-orange-500 text-white rounded-full shadow-2xl mb-8"
          >
            <Sun className="animate-spin-slow" size={16} />
            <span className="text-xs font-black uppercase tracking-[0.4em]">SUMMER CAMP 2026</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-primary mb-6"
          >
            THE <span className="text-orange-500">Ultimate</span> <br /> 
            <span className="text-secondary">EXPERIENCE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            Where learning never stops and fun begins. A month-long adventure for children of all ages.
          </motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-primary mb-4 uppercase">Four Weeks of <span className="text-orange-500">Awe-Inspiring</span> Fun</h2>
           <p className="text-primary/50 text-lg">Every week features a different theme and specialized mentors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-primary/5 group hover:shadow-2xl transition-all"
             >
                <div className={`w-20 h-20 rounded-3xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform`}>
                   <feature.icon size={36} />
                </div>
                <h4 className="text-2xl font-black text-primary mb-4 leading-none">{feature.title}</h4>
                <p className="text-sm text-primary/50 leading-relaxed font-medium">
                  Engaging activities designed to stimulate thinking and build friendships.
                </p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                     <ThermometerSun className="text-orange-500" size={32} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-black">Limited Spots Available</h3>
                     <p className="text-white/50">Registration closes soon for the upcoming session.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  {[
                    "Weekly Field Trips",
                    "Certificate of Participation",
                    "Professional Mentorship",
                    "Safety First Environment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-lg font-medium text-white/80">
                        <Star size={16} className="text-orange-500 fill-orange-500" />
                        <span>{item}</span>
                    </div>
                  ))}
               </div>
               <Link href="/admission">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-orange-500 text-white font-black rounded-3xl shadow-2xl flex items-center space-x-3 uppercase text-xs tracking-[0.2em]"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={20} />
                  </motion.button>
               </Link>
            </div>
            <div className="relative">
               <div className="aspect-[4/3] bg-white/10 rounded-[60px] border border-white/20 p-8">
                  <div className="w-full h-full bg-orange-500/20 rounded-[40px] flex items-center justify-center">
                     <Sun className="text-orange-500 animate-pulse" size={120} />
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-[80px] rounded-full" />
            </div>
         </div>
      </section>
    </div>
  );
}
