import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Target, Eye, Award } from "lucide-react";
import { getImageUrl } from "@/utils/imageHelper";

/**
 * About Page Introduction Section
 */
const Introduction = ({ data }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-[2px] bg-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">
                {data?.introBadge || "Our Story"}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 leading-tight">
              {data?.introHeading?.split(' ').slice(0, -2).join(' ') || "Pioneering"} <span className="text-secondary">{data?.introHeading?.split(' ').slice(-2).join(' ') || "Excellence"}</span>
            </h2>
            
            <div className="space-y-6 text-primary/70 text-lg leading-relaxed">
              {data?.introParagraphs && data.introParagraphs.length > 0 ? (
                data.introParagraphs.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <>
                  <p>
                    Founded on the principles of innovation and character building, PM International School has been a beacon of quality education for over two decades.
                  </p>
                  <p>
                    Our journey started with a simple vision: to create a school that prepares children not just for exams, but for life.
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {data?.introStats && data.introStats.length > 0 ? (
                data.introStats.map((stat, i) => (
                  <div key={i} className={`${i % 2 === 0 ? 'bg-primary/5 border-primary/10' : 'bg-secondary/10 border-secondary/20'} p-6 rounded-3xl border`}>
                    <div className={`text-3xl font-black ${i % 2 === 0 ? 'text-primary' : 'text-secondary'} mb-2`}>{stat.value}</div>
                    <div className={`text-xs font-bold ${i % 2 === 0 ? 'text-primary/40' : 'text-secondary/60'} uppercase tracking-widest`}>{stat.label}</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                    <div className="text-3xl font-black text-primary mb-2">25+</div>
                    <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">Years of Legacy</div>
                  </div>
                  <div className="bg-secondary/10 p-6 rounded-3xl border border-secondary/20">
                    <div className="text-3xl font-black text-secondary mb-2">5000+</div>
                    <div className="text-xs font-bold text-secondary/60 uppercase tracking-widest">Global Alumni</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <Image
                src={getImageUrl(data?.introImage) || "/images/gallery-classroom-1.png"}
                alt="School Environment"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-secondary z-20 animate-bounce">
              <Sparkles size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

