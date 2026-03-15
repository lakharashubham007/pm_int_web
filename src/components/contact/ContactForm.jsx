"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[40px] border border-primary/5 shadow-2xl text-center space-y-6"
      >
        <div className="w-20 h-20 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={40} />
        </div>
        <h3 className="text-3xl font-black text-primary">Message Sent!</h3>
        <p className="text-primary/60">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary font-black uppercase tracking-widest text-xs hover:text-secondary transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-white p-8 md:p-12 rounded-[40px] border border-primary/5 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />

      <h3 className="text-3xl font-black text-primary mb-8">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={20} />
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-primary/[0.02] border border-primary/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-secondary/30 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={20} />
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full bg-primary/[0.02] border border-primary/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-secondary/30 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Your Message</label>
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-6 text-primary/20 group-focus-within:text-secondary transition-colors" size={20} />
            <textarea
              required
              placeholder="How can we help you today?"
              rows={4}
              className="w-full bg-primary/[0.02] border border-primary/5 rounded-2xl py-5 pl-12 pr-4 outline-none focus:border-secondary/30 focus:bg-white transition-all text-sm resize-none"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 hover:bg-primary/95 transition-all"
        >
          <span>SEND INQUIRY</span>
          <Send size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
