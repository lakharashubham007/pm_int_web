"use client";

import { motion } from "framer-motion";
import { Star, Heart, Sun, Coffee, Users, Rocket, Image as ImageIcon, Music, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SchoolLife() {
  const activities = [
    { title: "Morning Assembly", icon: Sun, desc: "A mindful start to the day with songs and affirmations." },
    { title: "Gourmet Dining", icon: Coffee, desc: "Nutritious, child-friendly meals in a social setting." },
    { title: "Tech Play", icon: Rocket, desc: "Safe, age-appropriate exploration of digital tools." },
    { title: "Artistic Expression", icon: Palette, desc: "Unlocking creativity through varied mediums." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center bg-secondary/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gallery-activity-2.png" 
            alt="School Life" 
            fill 
            className="object-cover opacity-20 scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full border border-white mb-8"
          >
            <Heart className="text-secondary fill-secondary" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">A Vibrant Community</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-primary mb-6"
          >
            SCHOOL <span className="text-secondary">LIFE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            Experience the joy of learning, the warmth of community, and the thrill of discovery at PM International.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
           >
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1]">
                 More Than Just <span className="text-secondary">Education</span>. <br /> 
                 Its a <span className="text-primary/30">Lifestyle</span>.
              </h2>
              <p className="text-lg text-primary/70 leading-relaxed font-normal">
                 We believe that child's environment is their "third teacher". Our campus is designed to be a sanctuary of creativity, safe exploration, and social bonding. Every corner tells a story, and every activity is a chance to grow.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 {activities.map((item, i) => (
                    <div key={i} className="p-6 bg-[#F8FBFF] rounded-[32px] border border-primary/5 hover:border-secondary/20 transition-all">
                       <item.icon size={28} className="text-secondary mb-4" />
                       <h4 className="font-bold text-primary mb-2 text-sm">{item.title}</h4>
                       <p className="text-[10px] text-primary/50 font-medium tracking-wide leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </motion.div>

           <div className="relative">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-2 gap-6"
              >
                 <div className="space-y-6">
                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
                       <Image src="/images/facility-art.png" alt="Art" fill className="object-cover" />
                    </div>
                    <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
                       <Image src="/images/facility-music.png" alt="Music" fill className="object-cover" />
                    </div>
                 </div>
                 <div className="pt-12 space-y-6">
                    <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
                       <Image src="/images/facility-indoor.png" alt="Indoor" fill className="object-cover" />
                    </div>
                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
                       <Image src="/images/gallery-classroom-1.png" alt="Classroom" fill className="object-cover" />
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center overflow-hidden relative">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto px-6 relative z-10"
         >
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
               Want to See it in <span className="text-secondary">Person</span>?
            </h2>
            <p className="text-white/50 text-xl mb-12 font-medium">
               Schedule a personal tour of our campus and meet our dedicated educators. 
               Witness the atmosphere that makes PM International truly unique.
            </p>
            <Link href="/admission">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="px-12 py-6 bg-secondary text-white font-black rounded-3xl shadow-2xl shadow-secondary/20 uppercase text-xs tracking-widest"
               >
                  Book a Campus Tour
               </motion.button>
            </Link>
         </motion.div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary/20 blur-[150px] rounded-full" />
      </section>
    </div>
  );
}
