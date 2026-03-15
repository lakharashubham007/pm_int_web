"use client";

import { motion } from "framer-motion";
import { Monitor, Dumbbell, Flower2, Palette, Music, Sparkles, ShieldCheck, Microscope } from "lucide-react";
import Image from "next/image";

const DetailedFacilityCard = ({ facility, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group bg-white rounded-[48px] overflow-hidden border border-primary/5 hover:shadow-2xl transition-all duration-700"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={facility.image}
          alt={facility.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-white shadow-xl ${facility.textClass}`}>
          <facility.Icon size={24} />
        </div>
      </div>
      
      <div className="p-10 space-y-4">
        <h3 className="text-2xl font-black text-primary">{facility.name}</h3>
        <p className="text-primary/60 leading-relaxed font-medium">
          {facility.description}
        </p>
        <div className="pt-6 flex flex-wrap gap-3">
          {facility.tags.map((tag, i) => (
            <span key={i} className="px-4 py-1.5 bg-primary/5 text-primary/40 text-[10px] font-black uppercase tracking-widest rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "Smart Classrooms",
      description: "Interactive AI-powered learning environments with ergonomic furniture and digital whiteboards that adapt to individual learning speeds.",
      Icon: Monitor,
      image: "/images/facility-classroom.png",
      textClass: "text-blue-500",
      tags: ["AI Tools", "Digital Boards", "High Speed WiFi"]
    },
    {
      name: "Innovation Lab",
      description: "A hub for robotics, coding, and scientific inquiry where students can experiment with real-world technologies and data science.",
      Icon: Microscope,
      image: "/images/gallery-activity-2.png",
      textClass: "text-indigo-500",
      tags: ["STEM", "Robotics", "Research"]
    },
    {
      name: "Indoor Activity Zone",
      description: "A climate-controlled, safe indoor space for social interaction, physical coordination, and futuristic soft-play experiences.",
      Icon: Dumbbell,
      image: "/images/facility-indoor.png",
      textClass: "text-emerald-500",
      tags: ["Safe Play", "Social Space", "Climbing Wall"]
    },
    {
      name: "Creative Art Studio",
      description: "A vibrant space where imagination takes flight. Our studio supports both traditional mediums and digital creative software.",
      Icon: Palette,
      image: "/images/facility-art.png",
      textClass: "text-rose-500",
      tags: ["Fine Arts", "Digital Art", "Sculpture"]
    },
    {
      name: "Sound & Motion Studio",
      description: "Equipped with professional acoustic treatment for music practice and high-quality flooring for classical and modern dance.",
      Icon: Music,
      image: "/images/facility-music.png",
      textClass: "text-purple-500",
      tags: ["Acoustics", "Dance Floor", "Instruments"]
    },
    {
      name: "Eco-Playground",
      description: "An outdoor space designed with sustainable materials that encourages children to connect with nature through tactical play.",
      Icon: Flower2,
      image: "/images/facility-outdoor.png",
      textClass: "text-amber-500",
      tags: ["Organic Garden", "Eco Props", "Open Air"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F8FBFF]">
      {/* Header Section */}
      <section className="bg-primary py-32 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple blur-[150px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <ShieldCheck className="text-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Secure & Modern Campus</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8"
          >
            CAMPUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white/[0.6]">FACILITIES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Our infrastructure is more than just buildings; it's a meticulously designed ecosystem that prioritizes safety, inspires curiosity, and leverages AI to enhance the learning journey.
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((fac, i) => (
            <DetailedFacilityCard key={i} facility={fac} index={i} />
          ))}
        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-width-7xl mx-auto px-6">
          <div className="bg-primary/[0.02] rounded-[48px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/5">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Safety First, Always.</h2>
              <p className="text-primary/60 font-medium">Our campus is under 24/7 AI-monitored surveillance, with strict access control and staff trained in premium pediatric safety protocols.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "24/7 CCTV",
                "Visitor Logs",
                "First Aid",
                "Fire Safety"
              ].map((item, i) => (
                <div key={i} className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-primary/5 text-primary text-xs font-black tracking-widest flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
