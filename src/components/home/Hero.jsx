"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Video, Star, BrainCircuit, Rocket, TrendingUp, BookOpen, Lightbulb, ShieldCheck, Cpu, Layers, Zap, Cloud, X, ChevronLeft, ChevronRight, Users, Award } from "lucide-react";
import Image from "next/image";
import { getImageUrl, getBackendUrl } from "../../utils/imageHelper";
import { getYoutubeEmbedUrl } from "../../utils/youtubeHelper";

/**
 * Enhanced Luxury Hero Section
 * Features: Floating Clouds, AI Background Icons, Side-by-Side Layout.
 */
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [heroData, setHeroData] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setMounted(true);
    setParticles([...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 5,
      delay: Math.random() * 5
    })));

    const fetchHeroData = async () => {
      try {
        const backendUrl = getBackendUrl();
        const res = await fetch(`${backendUrl}/api/hero`);
        if (res.ok) {
          const data = await res.json();
          setHeroData(data);
        } else {
          setFetchError(`API returned ${res.status}: ${res.statusText}`);
        }
      } catch (err) {
        setFetchError(`Fetch failed: ${err.message}`);
        console.error("Failed to fetch hero data", err);
      }
    };
    fetchHeroData();
  }, []);

  const nextImage = () => {
    if (heroData?.heroImages?.length > 1) {
      setActiveImageIndex((prev) => (prev + 1) % heroData.heroImages.length);
    }
  };

  const prevImage = () => {
    if (heroData?.heroImages?.length > 1) {
      setActiveImageIndex((prev) => (prev - 1 + heroData.heroImages.length) % heroData.heroImages.length);
    }
  };

  // Map string icon names to Lucide icons
  const iconMap = {
    Star, ShieldCheck, Sparkles, BrainCircuit, Users, Award
  };

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  const aiIcons = [
    { Icon: TrendingUp, delay: 0, top: "15%", left: "8%", size: 100 },
    { Icon: BrainCircuit, delay: 1, top: "10%", right: "12%", size: 120 },
    { Icon: Cpu, delay: 1.5, bottom: "25%", left: "15%", size: 80 },
    { Icon: Rocket, delay: 2, bottom: "20%", left: "5%", size: 110 },
    { Icon: Zap, delay: 0.5, top: "40%", right: "5%", size: 90 },
    { Icon: Layers, delay: 2.5, bottom: "35%", right: "10%", size: 100 },
    { Icon: BookOpen, delay: 3, top: "25%", left: "20%", size: 70 },
  ];

  const defaultStats = [
    { iconName: 'Star', label: "5:1 Student Ratio", color: "text-amber-500", detail: "Personalized Care" },
    { iconName: 'ShieldCheck', label: "Safety First", color: "text-emerald-500", detail: "CCTV Enabled" },
    { iconName: 'Sparkles', label: "AI Focused", color: "text-secondary", detail: "Future Ready" },
  ];

  const currentStats = heroData?.stats?.length > 0 ? heroData.stats : defaultStats;
  const colors = ["text-amber-500", "text-emerald-500", "text-secondary"];

  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden bg-background py-16 lg:py-0">
      {fetchError && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">
          Error fetching dynamic hero: {fetchError}
        </div>
      )}

      {/* 1. LAYERED BACKGROUND WITH CLOUDS & AI ICONS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Sky-Tech Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-background to-secondary/20 opacity-90" />

        {/* Floating Clouds at Top */}
        <div className="absolute top-0 left-0 w-full h-40 flex justify-around opacity-40 select-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, 15, -15, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white drop-shadow-2xl"
            >
              <Cloud size={140 + i * 30} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Animated Tech Orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"
        />

        {/* AI Background Icons */}
        {aiIcons.map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [0.95, 1.1, 0.95],
              rotate: [0, 8, -8, 0]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute text-primary/10 hidden lg:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom
            }}
          >
            <item.Icon size={item.size} strokeWidth={0.25} />
          </motion.div>
        ))}

        {/* Rising AI Particles */}
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -1200],
            }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
            className="absolute w-[1px] h-20 bg-gradient-to-t from-transparent via-primary/20 to-transparent"
            style={{ left: particle.left, bottom: "-100px" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 min-h-[75vh]">

          {/* 2. LEFT CONTENT */}
          <motion.div
            style={{ y: yParallax }}
            className="flex-1 text-center lg:text-left z-20 w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white/60 backdrop-blur-2xl border border-white rounded-full shadow-xl shadow-primary/5 mb-10 transition-transform hover:scale-105"
            >
              <div className="w-2.5 h-2.5 bg-accent-green rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.25em] uppercase text-primary/60">
                {heroData?.badgeText || "Enrollment Open 2026-27"}
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.05] tracking-tight mb-8">
              {heroData?.headingRegular || "The Future of"} <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="text-secondary relative z-10">{heroData?.headingHighlighted || "Early Education"}</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-full origin-left"
                />
              </span> <br className="hidden lg:block" />
              {heroData?.headingEnd || "Powered by AI"}
            </h1>

            <p className="text-lg md:text-xl text-primary/60 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {heroData?.subheading || "Join Dungarpur's most advanced preschool where every child's curiosity is nurtured by cutting-edge AI and expert educators."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-14">
              <Link href={heroData?.applyButtonLink || "/admission"} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-12 py-5 bg-primary text-white text-base font-black rounded-[24px] shadow-[0_20px_50px_rgba(30,58,138,0.3)] flex items-center justify-center space-x-3 group overflow-hidden relative"
                >
                  <span className="relative z-10">{heroData?.applyButtonText || "APPLY NOW"}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </Link>

              <motion.button
                onClick={() => setShowVideo(true)}
                whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-white/50 backdrop-blur-2xl border border-white text-primary text-base font-black rounded-[24px] flex items-center justify-center space-x-3 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all"
              >
                <Video size={20} className="text-accent-red" />
                <span>{heroData?.tourButtonText || "VIEW TOUR"}</span>
              </motion.button>
            </div>

            {/* INTEGRATED STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-primary/5">
              {currentStats.map((stat, i) => {
                const StatIcon = iconMap[stat.iconName] || Star;
                const statColor = stat.color || colors[i % colors.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col items-center lg:items-start space-y-2.5 group"
                  >
                    <div className={`p-4 rounded-2xl bg-white shadow-lg shadow-primary/5 group-hover:shadow-primary/10 group-hover:-translate-y-1 transition-all ${statColor}`}>
                      <StatIcon size={24} fill="currentColor" className="opacity-90" />
                    </div>
                    <div className="flex flex-col translate-y-1">
                      <span className="text-[11px] font-black text-primary uppercase tracking-[0.12em]">{stat.label}</span>
                      <span className="text-[10px] font-bold text-primary/40 uppercase tracking-tighter">{stat.detail}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 3. RIGHT CONTENT: DYNAMIC IMAGE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="flex-1 w-full max-w-xl relative flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[56px] -rotate-3 scale-95 shadow-2xl border border-white transition-transform group-hover:-rotate-1" />
              <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-[56px] rotate-2 scale-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-white transition-transform group-hover:rotate-1" />

              <div className="relative z-10 bg-white/50 backdrop-blur-3xl rounded-[56px] border border-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] group-hover:shadow-[0_60px_120px_rgba(0,0,0,0.15)] transition-all duration-700 overflow-hidden"
                style={{ aspectRatio: '1/1', padding: '16px' }}>

                <div className="relative w-full h-full rounded-[44px] overflow-hidden" style={{ perspective: 1000 }}>
                  <AnimatePresence mode="popLayout">
                    {heroData?.heroImages && heroData.heroImages.length > 0 ? (
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0, x: 100, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -100, rotateY: 10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute inset-0"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -10000) nextImage();
                          else if (swipe > 10000) prevImage();
                        }}
                      >
                        <Image
                          src={getImageUrl(heroData.heroImages[activeImageIndex])}
                          layout="fill"
                          objectFit="cover"
                          alt="Elite Learning"
                          className="drop-shadow-2xl group-hover:scale-[1.04] transition-transform duration-1000 pointer-events-none"
                          priority
                        />
                      </motion.div>
                    ) : (
                      <Image
                        src="/images/hero-premium.png"
                        layout="fill"
                        objectFit="cover"
                        alt="Elite Learning"
                        className="drop-shadow-2xl group-hover:scale-[1.04] transition-transform duration-1000"
                        priority
                      />
                    )}
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  {heroData?.heroImages && heroData.heroImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-20 text-primary border border-white/50"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-20 text-primary border border-white/50"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {heroData.heroImages.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer shadow-sm ${activeImageIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Advanced Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 lg:-right-12 bg-white/95 backdrop-blur-2xl p-7 rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white z-20 flex items-center space-x-5"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[22px] flex items-center justify-center text-white shadow-xl">
                  <Star size={32} fill="currentColor" />
                </div>
                <div>
                  <div className="text-lg font-black text-primary leading-none mb-1.5">{heroData?.floatingBadgeTitle || "Top Tier"}</div>
                  <div className="text-[12px] font-bold text-primary/40 uppercase tracking-wider">{heroData?.floatingBadgeSubtitle || "Preschool 2026"}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-2xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white transition-all border border-white/20"
              >
                <X size={24} />
              </button>

              <iframe
                className="w-full h-full"
                src={heroData?.tourVideoUrl ? `${getYoutubeEmbedUrl(heroData.tourVideoUrl)}?autoplay=1&rel=0` : "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
                title="School Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
