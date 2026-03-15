"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Calendar, Tag, Search, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsAndEvents() {
  const newsItems = [
    {
      title: "Annual Sports Day 2026",
      date: "Mar 20, 2026",
      category: "Sports",
      excerpt: "Get ready for a day of athleticism and team spirit! Our annual sports day is just around the corner.",
      image: "/images/gallery-activity-2.png"
    },
    {
      title: "Digital Literacy Workshop",
      date: "Mar 15, 2026",
      category: "Academic",
      excerpt: "Empowering parents to navigate the digital world with their children in our upcoming safety workshop.",
      image: "/images/gallery-classroom-1.png"
    },
    {
      title: "Art Exhibition: Young Creators",
      date: "Mar 10, 2026",
      category: "Art",
      excerpt: "Witness the incredible creativity of our students as they showcase their finest art pieces.",
      image: "/images/facility-art.png"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 mb-6"
          >
            <Star className="text-secondary fill-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Latest Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8"
          >
            NEWS & <span className="text-secondary">EVENTS</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
             <p className="text-white/50 text-xl max-w-2xl font-medium">
               Stay connected with the PM International family. Discover our stories, celebrate our achievements, and join our upcoming events.
             </p>
             <div className="relative flex-grow max-w-md">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-8 text-white placeholder-white/20 outline-none focus:border-secondary transition-all"
                />
             </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
           {["All Update", "Academic", "Sports", "Art", "Community"].map((cat, i) => (
              <button 
                key={i} 
                className={`px-8 py-3 rounded-2xl border border-primary/5 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${i === 0 ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary/5'}`}
              >
                 {cat}
              </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {newsItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                   <Image 
                     src={item.image} 
                     alt={item.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700" 
                   />
                   <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl flex items-center space-x-2 shadow-xl">
                      <Tag size={12} className="text-secondary" />
                      <span className="text-[10px] font-black uppercase text-primary">{item.category}</span>
                   </div>
                </div>
                
                <div className="px-2">
                   <div className="flex items-center space-x-3 text-primary/30 text-[10px] font-black uppercase mb-4">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                   </div>
                   <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-primary/50 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.excerpt}
                   </p>
                   <div className="flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest">
                      <span>Read Story</span>
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>
              </motion.div>
           ))}
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6 mb-24">
         <div className="bg-[#F8FBFF] p-16 md:p-24 rounded-[60px] border border-primary/5 relative overflow-hidden text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
               <Bell className="text-secondary mb-8 mx-auto animate-bounce" size={48} />
               <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase">Dont Miss a <span className="text-secondary">Beat</span></h2>
               <p className="text-primary/50 text-lg mb-12 font-medium">Join our weekly newsletter and be the first to know about school news, student achievements, and special events.</p>
               
               <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow bg-white border border-primary/10 rounded-3xl py-5 px-8 text-primary shadow-sm outline-none focus:border-primary transition-all"
                  />
                  <button className="px-10 py-5 bg-primary text-white font-black rounded-3xl shadow-xl shadow-primary/20 hover:scale-105 transition-transform uppercase text-xs tracking-widest whitespace-nowrap">
                     Subscribe Now
                  </button>
               </form>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
         </div>
      </section>
    </div>
  );
}
