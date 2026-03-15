"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8FBFF] overflow-hidden relative">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Sparkles className="text-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/40">Reach Out To Us</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight"
          >
            Let's Start a <span className="text-secondary">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary/60 max-w-xl leading-relaxed"
          >
            Have questions about admissions, our curriculum, or want to schedule a visit? Our team is here to help you every step of the way.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Full Width Map Section */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-black text-primary mb-2">Find Us on the Map</h2>
            <p className="text-primary/40 font-black uppercase tracking-widest text-xs">Join our campus community</p>
          </div>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
