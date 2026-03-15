"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Dumbbell, Flower2, Palette, Music, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

/**
 * Facility Card component with Parallax tilt effect
 */
const FacilityCard = ({ facility, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)", // Safari fix for rounded corners with 3D transforms
      }}
      className="relative h-[450px] w-full rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl isolate"
    >
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110" style={{ transform: "translateZ(0)" }}>
        <Image
          src={facility.image}
          alt={facility.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Glass Overlay Content */}
      <div 
        style={{ transform: "translateZ(60px)" }}
        className="absolute bottom-6 left-6 right-6 p-6 rounded-[24px] bg-white/10 backdrop-blur-2xl border border-white/20 z-10 transition-all duration-700 ease-out group-hover:bg-white/25 shadow-2xl"
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${facility.color} text-white shadow-lg`}>
            <facility.Icon size={18} />
          </div>
          <h3 className="text-xl font-black text-white">{facility.name}</h3>
        </div>
        <p className="text-white/80 text-[13px] leading-tight font-medium line-clamp-2">
          {facility.description}
        </p>
      </div>

      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Facilities = () => {
  const facilities = [
    {
      name: "Smart Classrooms",
      description: "Interactive AI-powered learning environments designed to spark curiosity and digital fluency.",
      Icon: Monitor,
      image: "/images/facility-classroom.png",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Indoor Activity Zone",
      description: "A safe, futuristic indoor space for social interaction, soft play, and collaborative games.",
      Icon: Dumbbell,
      image: "/images/facility-indoor.png",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Outdoor Playground",
      description: "Safety-first recreational area featuring modern play equipment and lush green surroundings.",
      Icon: Flower2,
      image: "/images/facility-outdoor.png",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Creative Art Room",
      description: "A vibrant studio for traditional painting and digital art, encouraging aesthetic expression.",
      Icon: Palette,
      image: "/images/facility-art.png",
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Music & Dance Studio",
      description: "A modern studio for rhythm, melody, and movement, fostering creative potential in performers.",
      Icon: Music,
      image: "/images/facility-music.png",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center md:justify-start space-x-2 mb-4"
            >
              <Sparkles className="text-secondary" size={20} />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/40">Infrastructure</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-primary mb-6"
            >
              World-Class <span className="text-secondary">Learning</span> Environment
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary/50 max-w-sm md:text-right font-medium leading-relaxed"
          >
            Fostering growth in futuristic spaces that prioritize safety, creativity, and technological integration.
          </motion.p>
        </div>

        {/* Facilities Grid - Staggered Layout Inspiration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-3 rounded-[40px] overflow-hidden">
            <FacilityCard facility={facilities[0]} index={0} />
          </div>
          <div className="lg:col-span-3 rounded-[40px] overflow-hidden">
            <FacilityCard facility={facilities[1]} index={1} />
          </div>
          <div className="lg:col-span-2">
            <FacilityCard facility={facilities[2]} index={2} />
          </div>
          <div className="lg:col-span-2">
            <FacilityCard facility={facilities[3]} index={3} />
          </div>
          <div className="lg:col-span-2">
            <FacilityCard facility={facilities[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
