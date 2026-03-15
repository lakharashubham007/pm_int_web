"use client";

import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Facilities from "@/components/home/Facilities";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero />
      <Programs />
      <Facilities />
      <Gallery />
      <Testimonials />

    </div>
  );
}
