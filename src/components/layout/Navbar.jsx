"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";

/**
 * Premium Sticky Navbar for PM International School
 * Features: Glassmorphism, Shrink on scroll, Rainbow underlines, Responsive mobile menu.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll animations for a "premium" feel
  const height = useTransform(scrollY, [0, 100], ["100px", "80px"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.95)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 10px 30px rgba(30, 58, 138, 0.1)"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admissions", href: "/admission" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        style={{ height, backgroundColor, boxShadow }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/20 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group outline-none">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-primary/20 transition-transform duration-500"
            >
               <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-primary font-black text-sm">PM</div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-primary leading-none">
                PM <span className="text-secondary">INTERNATIONAL</span>
              </span>
              <span className="text-[8px] uppercase font-black tracking-[0.3em] text-primary/40 leading-none mt-1">
                Luxury Preschool
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <ul className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-sm font-bold text-primary/80 hover:text-primary transition-colors py-2 group outline-none"
                >
                  {link.name}
                  {/* Rainbow Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left overflow-hidden rounded-full">
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-red via-accent-yellow to-accent-green" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Admission CTA - Right */}
          <div className="hidden lg:block">
            <Link href="/admission">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(239, 68, 68, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-accent-red text-white text-sm font-black rounded-2xl flex items-center space-x-3 transition-colors shadow-lg shadow-accent-red/10"
              >
                <span>APPLY NOW</span>
                <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Mobile Sidebar Navigation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed top-0 right-0 w-[85%] sm:w-[50%] h-screen bg-white shadow-[-20px_0_60px_rgba(30,58,138,0.1)] z-[60] p-10 lg:hidden flex flex-col"
        >
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black text-primary tracking-tighter">NAVIGATION</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 bg-background border border-primary/5 rounded-2xl flex items-center justify-center text-primary shadow-sm"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-8 flex-grow">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-primary hover:text-secondary flex items-center space-x-4 transition-all"
                >
                  <span className="w-2 h-2 bg-accent-yellow rounded-full" />
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link href="/admission" onClick={() => setIsOpen(false)}>
              <button className="w-full py-6 bg-primary text-white font-black rounded-3xl text-xl shadow-2xl shadow-primary/20 flex items-center justify-center space-x-3">
                <span>START ADMISSION</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Click-away Backdrop */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[55] lg:hidden"
          />
        )}
      </motion.nav>
      {/* Spacer to prevent content jump */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;
