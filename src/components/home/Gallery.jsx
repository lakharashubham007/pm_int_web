"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Camera, Sparkles, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * School Gallery Section
 * Features: Category filtering, Hover zoom, Lightbox viewer, Sparkle effects.
 */
const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Events", "Sports", "Activities", "Classrooms"];

  const galleryItems = [
    { id: 1, category: "Events", image: "/images/gallery-event-1.png", title: "Annual Day 2026" },
    { id: 2, category: "Sports", image: "/images/gallery-sport-1.png", title: "Morning Yoga Session" },
    { id: 3, category: "Activities", image: "/images/gallery-activity-1.png", title: "Young Scientists at Work" },
    { id: 4, category: "Classrooms", image: "/images/gallery-classroom-1.png", title: "Storytelling Hour" },
    { id: 5, category: "Events", image: "/images/gallery-event-2.png", title: "Graduation Ceremony" },
    { id: 6, category: "Activities", image: "/images/gallery-activity-2.png", title: "Future Gardeners" },
  ];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header content */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center md:justify-start space-x-2 mb-4"
                >
                    <Camera className="text-secondary" size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/40">Visual Journey</span>
                </motion.div>
                
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-primary mb-2"
                >
                    Moments of <span className="text-secondary">Growth</span>
                </motion.h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                            filter === cat 
                            ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                            : "bg-primary/5 text-primary/60 hover:bg-primary/10"
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="group relative h-80 rounded-[32px] overflow-hidden cursor-pointer shadow-xl"
                        onClick={() => setSelectedImage(item)}
                    >
                        {/* Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <motion.div
                                initial={{ y: 20 }}
                                whileHover={{ y: 0 }}
                                className="flex items-center justify-between"
                            >
                                <div>
                                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                </div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                                    <ZoomIn size={20} />
                                </div>
                            </motion.div>
                        </div>

                        {/* Subtle Sparkle on Hover */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <Sparkles className="text-accent-yellow animate-pulse" size={24} fill="currentColor" />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </motion.button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[110]">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
                onClick={handlePrev}
              >
                <ChevronLeft size={32} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
                onClick={handleNext}
              >
                <ChevronRight size={32} />
              </motion.button>
            </div>

            {/* Main Image Container */}
            <motion.div
              layoutId={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden shadow-2xl z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <span className="text-secondary font-black uppercase tracking-widest text-xs mb-2 block">{selectedImage.category}</span>
                    <h3 className="text-3xl font-black text-white">{selectedImage.title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
