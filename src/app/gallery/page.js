"use client";

import Gallery from "@/components/home/Gallery";
import { motion } from "framer-motion";
import { Sparkles, Camera } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink blur-[150px] rounded-full animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Camera className="text-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Through the Lens</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8"
          >
            LIFE AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white/[0.6]">THE CAMPUS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-medium"
          >
            A vibrant glimpse into the daily lives, celebrations, and achievements of our students. Explore our world through these captured moments.
          </motion.p>
        </div>
      </section>

      {/* Reused Gallery Component - Optimized for Full Page */}
      <div className="pb-24">
        <Gallery />
      </div>

      {/* Decorative Final Section */}
      <section className="py-20 bg-[#F8FBFF] border-t border-primary/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <Sparkles className="text-secondary mx-auto mb-6" size={32} />
            <h2 className="text-3xl font-black text-primary mb-4">Capturing Childhood, Crafting Futures.</h2>
            <p className="text-primary/40 font-medium">Every photograph tells a story of curiosity, growth, and joy at PM International School.</p>
         </div>
      </section>
    </div>
  );
}
