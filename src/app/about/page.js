"use client";

import React, { useState, useEffect } from "react";
import Introduction from "@/components/about/Introduction";
import VisionMission from "@/components/about/VisionMission";
import LeadershipMessages from "@/components/about/LeadershipMessages";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import { motion } from "framer-motion";
import { getBackendUrl } from "@/utils/imageHelper";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const backendUrl = getBackendUrl();
        const res = await fetch(`${backendUrl}/api/about`);
        if (res.ok) {
          const data = await res.json();
          setAboutData(data);
        }
      } catch (err) {
        console.error("Failed to fetch about data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) return <div className="pt-40 flex justify-center min-h-screen">Loading About...</div>;

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            {aboutData?.headerTitle?.split(' ')[0] || "ABOUT"} <span className="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">{aboutData?.headerTitle?.split(' ').slice(1).join(' ') || "OUR SCHOOL"}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-black uppercase tracking-[0.5em] text-xs md:text-sm"
          >
            {aboutData?.headerSubtitle || "Nurturing Minds, Shaping Futures"}
          </motion.p>
        </div>
      </section>

      <Introduction data={aboutData} />
      <VisionMission data={aboutData} />
      <LeadershipMessages data={aboutData} />
      <WhyChooseUs data={aboutData} />
    </div>
  );
}

