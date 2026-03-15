"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const DEFAULT_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.75030132245221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin";

const GoogleMap = () => {
  const [mapUrl, setMapUrl] = useState(DEFAULT_MAP);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const res = await fetch(`${NEXT_PUBLIC_API_URL}/contact`);
        const data = await res.json();
        if (data.mapEmbedUrl) {
          setMapUrl(data.mapEmbedUrl);
        }
      } catch (error) {
        console.error("Failed to fetch map:", error);
      }
    };
    fetchMap();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full h-[450px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative group"
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale group-hover:grayscale-0 transition-all duration-1000"
      ></iframe>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-[32px]" />
    </motion.div>
  );
};

export default GoogleMap;
