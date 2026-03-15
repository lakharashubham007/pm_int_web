"use client";

import { motion } from "framer-motion";
import { Baby, graduationCap as GraduationCap, School, ArrowRight, Star, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

/**
 * Our Learning Programs Section
 * Features: Rainbow gradient borders, premium cards, interactive hover states.
 */
const Programs = () => {
  const programs = [
    {
      name: "Nursery",
      age: "2.5 - 3.5 Years",
      description: "A nurturing environment where little ones begin their journey of exploration and play-based learning.",
      Icon: Baby,
      color: "from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC]",
      borderColor: "after:from-accent-red after:via-accent-pink after:to-accent-orange",
      lightColor: "bg-accent-red/5",
      accent: "text-accent-red"
    },
    {
      name: "LKG",
      age: "3.5 - 4.5 Years",
      description: "Fostering foundational skills in literacy and numeracy through interactive AI-assisted modules.",
      Icon: Heart,
      color: "from-[#84fab0] to-[#8fd3f4]",
      borderColor: "after:from-accent-green after:via-accent-yellow after:to-accent-blue",
      lightColor: "bg-accent-green/5",
      accent: "text-accent-green"
    },
    {
      name: "UKG",
      age: "4.5 - 5.5 Years",
      description: "Preparing future leaders with advanced problem-solving, creative arts, and early digital literacy.",
      Icon: School,
      color: "from-[#a18cd1] to-[#fbc2eb]",
      borderColor: "after:from-accent-purple after:via-accent-pink after:to-accent-blue",
      lightColor: "bg-accent-purple/5",
      accent: "text-accent-purple"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles className="text-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/40">Excellence in Learning</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Our <span className="text-secondary">Learning</span> Programs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/50 max-w-2xl mx-auto font-medium"
          >
            A scientifically designed curriculum that balances traditional values with 
            modern AI-powered educational tools.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Card Container with Rainbow Border Logic */}
              <div className={`relative h-full p-1 rounded-[40px] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]`}>
                
                {/* Rainbow Border Pseudo-element Effect */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-accent-red via-accent-yellow to-accent-purple opacity-20 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                
                {/* Inner Card Content */}
                <div className="relative h-full bg-white rounded-[38px] p-10 flex flex-col items-center text-center z-10 overflow-hidden">
                  
                  {/* Subtle Background Pattern */}
                  <div className={`absolute top-0 left-0 w-full h-32 ${program.lightColor} -z-10 opacity-50 group-hover:h-full transition-all duration-700`} />
                  
                  {/* Icon Wrapper */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-3xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform`}
                  >
                    <program.Icon size={36} strokeWidth={2.5} />
                  </motion.div>

                  <h3 className="text-2xl font-black text-primary mb-3">{program.name}</h3>
                  
                  <div className={`px-4 py-1.5 rounded-full ${program.lightColor} ${program.accent} text-[10px] font-black uppercase tracking-widest mb-6`}>
                    Age: {program.age}
                  </div>

                  <p className="text-primary/60 text-base leading-relaxed font-medium mb-10 flex-grow">
                    {program.description}
                  </p>

                  <Link href={`/programs#${program.name.toLowerCase()}`} className="w-full">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`flex items-center justify-center space-x-3 w-full py-4 border-2 border-primary/5 rounded-2xl group/btn hover:bg-primary hover:text-white transition-all duration-300`}
                    >
                      <span className="text-sm font-black uppercase tracking-widest">Learn More</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>

                  {/* Top-Right Sparkle Decoration */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="text-accent-yellow animate-pulse" size={20} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Advanced Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-red via-accent-yellow to-accent-purple rounded-[42px] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
