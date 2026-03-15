import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { getImageUrl } from "@/utils/imageHelper";

/**
 * Leadership Messages Section
 */
const LeadershipMessages = ({ data }) => {
  const defaultLeaders = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Director",
      image: "/images/about/director.png",
      message: "At PM International, we are not just teaching a curriculum; we are shaping the future. Our integration of cutting-edge technology with time-honored human values ensures that our students are equipped to lead in an ever-evolving world with both intelligence and empathy.",
      color: "bg-primary",
      reverse: false
    },
    {
      name: "Mrs. Meera Deshmukh",
      role: "Principal",
      image: "/images/parent-2.png", 
      message: "Education is a journey of discovery. Our goal is to ignite the spark of curiosity in every child, nurturing their natural talents and providing them with the wings to soar.",
      color: "bg-secondary",
      reverse: true
    }
  ];

  const leadersToDisplay = data?.leaders && data.leaders.length > 0 
    ? data.leaders.map((leader, i) => ({
        ...leader,
        color: i % 2 === 0 ? "bg-primary" : "bg-secondary"
      }))
    : defaultLeaders;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {leadersToDisplay.map((leader, i) => (
          <div key={i} className={`flex flex-col ${leader.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5"
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                  <Image
                    src={getImageUrl(leader.image) || (i === 0 ? "/images/about/director.png" : "/images/parent-2.png")}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Visual Accent */}
                <div className={`absolute -inset-4 ${leader.color} opacity-10 blur-[80px] rounded-full z-0`} />
                <div className={`absolute top-10 ${leader.reverse ? '-left-6' : '-right-6'} w-24 h-24 ${leader.color} rounded-3xl flex items-center justify-center text-white shadow-xl z-20`}>
                   <Quote size={40} fill="currentColor" />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-8 h-[2px] ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} />
                <span className="font-black uppercase tracking-[0.3em] text-[10px] text-primary/40">Leadership Message</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                From the <span className={i % 2 === 0 ? 'text-primary' : 'text-secondary'}>{leader.role}'s</span> Desk
              </h3>
              
              <p className="text-2xl font-medium text-primary/80 leading-relaxed italic mb-10">
                "{leader.message}"
              </p>
              
              <div>
                <h4 className="text-2xl font-black text-primary">{leader.name}</h4>
                <p className={`font-black uppercase tracking-[0.2em] text-xs ${i % 2 === 0 ? 'text-primary/40' : 'text-secondary'}`}>{leader.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipMessages;

