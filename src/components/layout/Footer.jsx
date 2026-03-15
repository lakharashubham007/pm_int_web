"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    setParticles([...Array(8)].map(() => ({
      width: Math.random() * 150 + 50,
      height: Math.random() * 150 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 12 + Math.random() * 14 // Adjusting to keep variance
    })));
  }, []);

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Admissions", href: "/admission" },
      { name: "Academic Calendar", href: "/academic-calendar" },
      { name: "School Life", href: "/school-life" },
      { name: "News & Events", href: "/news-events" },
    ],
    programs: [
      { name: "Nursery Program", href: "/programs/nursery" },
      { name: "LKG Program", href: "/programs/lkg" },
      { name: "UKG Program", href: "/programs/ukg" },
      { name: "Extracurricular", href: "/programs/extra" },
      { name: "Summer Camp", href: "/programs/summer" },
    ],
  };

  return (
    <footer className="relative bg-[#F8FBFF] pt-24 pb-12 overflow-hidden border-t border-primary/5">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        {/* Floating Particles */}
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-primary/5 blur-2xl rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/10">
                   <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-primary font-black text-xl">PM</div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xl font-black text-primary tracking-tighter leading-none">PM INTERNATIONAL</span>
                  <span className="text-[10px] font-black text-secondary tracking-[0.3em]">SCHOOL</span>
                </div>
              </div>
            </Link>
            
            <p className="text-primary/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering the next generation of global leaders with AI-integrated learning and human-centric values. A world-class environment for your child's growth.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(30, 58, 138, 0.1)" }}
                  className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary/60 hover:text-primary transition-all shadow-sm"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-primary font-black text-sm uppercase tracking-[0.2em] mb-8 flex items-center justify-center md:justify-start">
               <span className="hidden md:block w-4 h-1 bg-secondary rounded-full mr-3" />
               Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-primary/60 hover:text-primary text-sm flex items-center justify-center md:justify-start group transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden md:block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center md:text-left">
            <h4 className="text-primary font-black text-sm uppercase tracking-[0.2em] mb-8 flex items-center justify-center md:justify-start">
               <span className="hidden md:block w-4 h-1 bg-secondary rounded-full mr-3" />
               Our Programs
            </h4>
            <ul className="space-y-4">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-primary/60 hover:text-primary text-sm flex items-center justify-center md:justify-start group transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden md:block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-primary font-black text-sm uppercase tracking-[0.2em] mb-8 flex items-center justify-center md:justify-start w-full">
               <span className="hidden md:block w-4 h-1 bg-secondary rounded-full mr-3" />
               Connect
            </h4>
            
            <div className="space-y-6 w-full">
              <a href="tel:+1234567890" className="flex flex-col md:flex-row items-center md:items-start group">
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-primary/30 uppercase tracking-widest mb-1">Call Us</span>
                  <span className="text-primary group-hover:text-secondary transition-colors font-medium">+1 (234) 567-890</span>
                </div>
              </a>

              <a href="mailto:info@pmschool.com" className="flex flex-col md:flex-row items-center md:items-start group">
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-primary/30 uppercase tracking-widest mb-1">Email Us</span>
                  <span className="text-primary group-hover:text-secondary transition-colors font-medium text-sm md:text-base">info@pmschool.com</span>
                </div>
              </a>

              <div className="flex flex-col md:flex-row items-center md:items-start group">
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-3 md:mb-0 md:mr-4 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-primary/30 uppercase tracking-widest mb-1">Visit Us</span>
                  <span className="text-primary leading-relaxed text-sm font-medium">123 Education Excellence Way,<br />Innovation District, Tech City</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary/5 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6 text-center md:text-left">
          <p className="text-primary/40 text-xs font-medium">
            © {currentYear} PM International School. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link href="/privacy" className="text-primary/40 hover:text-primary text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-primary/40 hover:text-primary text-xs transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-primary/40 hover:text-primary text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Sparkle */}
      <div className="absolute top-1/4 left-10 pointer-events-none opacity-20 hidden lg:block">
        <Sparkles className="text-secondary animate-pulse" size={32} />
      </div>
    </footer>
  );
};

export default Footer;
