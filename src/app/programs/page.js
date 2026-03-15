"use client";

import { motion } from "framer-motion";
import ProgramSection from "@/components/programs/ProgramSection";
import { Sparkles, Star, Rocket, Palette, Music, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Nursery Program",
      ageGroup: "Age: 2.5 - 3.5 Years",
      description: "A gentle introduction to a sensory-rich environment where toddlers learn through play, music, and exploration. We focus on building social skills and a love for discovery.",
      curriculum: [
        "Sensory Play & Exploration",
        "Basic Communication Skills",
        "Motor Skills Development",
        "Music & Movement",
        "Social Interaction",
        "Storytelling & Puppetry"
      ],
      image: "/images/gallery-activity-1.png",
      color: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        glow: "shadow-secondary/20"
      },
      href: "/programs/nursery",
      reverse: false
    },
    {
      title: "LKG Program",
      ageGroup: "Age: 3.5 - 4.5 Years",
      description: "Developing foundational literacy and numeracy skills through engaging activities. Our Junior Kindergarten combines structured learning with creative freedom.",
      curriculum: [
        "Literacy Launchpad",
        "Numerical Exploration",
        "Creative Arts & Design",
        "Environmental Science",
        "Problem Solving Games",
        "Bilingual Expression"
      ],
      image: "/images/facility-indoor.png",
      color: {
        bg: "bg-primary/5",
        text: "text-primary",
        glow: "shadow-primary/20"
      },
      href: "/programs/lkg",
      reverse: true
    },
    {
      title: "UKG Program",
      ageGroup: "Age: 4.5 - 5.5 Years",
      description: "Preparing students for formal schooling with an AI-integrated curriculum that balances advanced cognitive skills with emotional intelligence and physical health.",
      curriculum: [
        "Advanced Phonics & Reading",
        "Mathematics Concepts",
        "Tech & Coding Basics",
        "Critical Thinking Skills",
        "Cultural Studies",
        "Physical Sports Mastery"
      ],
      image: "/images/gallery-classroom-1.png",
      color: {
        bg: "bg-accent-purple/5",
        text: "text-accent-purple",
        glow: "shadow-accent-purple/20"
      },
      href: "/programs/ukg",
      reverse: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Page Hero */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Star className="text-secondary fill-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Excellence in Learning</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white/[0.6]">PROGRAMS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-medium"
          >
            A holistic educational journey designed to nurture curiosity, foster innovation, and build strong human values from the ground up.
          </motion.p>
        </div>
      </section>

      {/* Main Programs List */}
      <div className="divide-y divide-primary/5">
        {programs.map((program, i) => (
          <ProgramSection key={i} {...program} />
        ))}
      </div>

      {/* Extracurricular Section */}
      <section className="py-24 bg-[#F8FBFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Extracurricular <span className="text-secondary">Enrichment</span></h2>
              <p className="text-primary/60 text-lg leading-relaxed">Beyond the classroom, we offer a world of opportunities for children to discover their passions and develop varied skills.</p>
            </div>
            <Link href="/admission">
              <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 cursor-pointer"
              >
                Enroll Now
              </motion.div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Robotics & Tech", icon: Rocket, color: "bg-blue-500", desc: "Introduction to logical thinking and building." },
              { title: "Visual Arts", icon: Palette, color: "bg-pink-500", desc: "Expression through color, shape, and medium." },
              { title: "Music & Dance", icon: Music, color: "bg-purple-500", desc: "Finding rhythm and confidence in performance." },
              { title: "Summer Camp", icon: Sparkles, color: "bg-orange-500", desc: "A seasonal adventure of fun and learning." },
            ].map((activity, i) => (
              <Link key={i} href={activity.title === "Summer Camp" ? "/programs/summer" : "/programs/extra"}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 group h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl ${activity.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    <activity.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-primary mb-3">{activity.title}</h4>
                  <p className="text-sm text-primary/50 leading-relaxed mb-6">{activity.desc}</p>
                  <div className="flex items-center text-primary/30 text-[10px] font-black uppercase tracking-widest group-hover:text-secondary transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={12} className="ml-2" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
