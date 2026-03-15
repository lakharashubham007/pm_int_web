"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

/**
 * Parent Testimonials Section
 * Features: Auto-sliding glass carousel, star ratings, premium animations.
 */
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Richardson",
      role: "Parent of Nursery Student",
      image: "/images/parent-1.png",
      content: "The balanced integration of AI-assisted learning and traditional values at PM International is truly remarkable. My son has shown incredible progress in his social and cognitive skills within just a few months.",
      rating: 5
    },
    {
      id: 2,
      name: "Elena Martinez",
      role: "Parent of LKG Student",
      image: "/images/parent-2.png",
      content: "Finding a school that prioritizes safety as much as it does future-ready education was my priority. The staff here is exceptionally caring, and the facilities are world-class.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Al-Farsi",
      role: "Parent of UKG Student",
      image: "/images/parent-3.png",
      content: "The creative approach to education here has unlocked my daughter's interest in both science and arts. The teachers are mentors who truly understand each child's unique potential.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Quote className="text-secondary" size={24} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Voices of Trust</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            What Our <span className="text-secondary">Parents</span> Say
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto">
                {/* Parent Profile */}
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] overflow-hidden border-4 border-white/10 shadow-xl">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    <Quote size={20} fill="currentColor" />
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-accent-yellow fill-accent-yellow" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed italic mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-xl font-black text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary font-black uppercase tracking-widest text-[10px]">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 -bottom-24 md:bottom-auto md:inset-y-0 md:flex md:items-center md:justify-between w-full pointer-events-none">
            <div className="max-w-4xl mx-auto w-full relative flex md:block items-center justify-center gap-6 pointer-events-none">
              <div className="md:absolute md:left-[-80px] lg:left-[-120px] pointer-events-auto">
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md shadow-xl"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={28} />
                </motion.button>
              </div>
              <div className="md:absolute md:right-[-80px] lg:right-[-120px] pointer-events-auto">
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md shadow-xl"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bullet Indicators */}
        <div className="flex justify-center space-x-3 mt-32">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === i ? "w-12 bg-secondary" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
