import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Heart, Award } from "lucide-react";

const iconMap = {
  Eye,
  Target,
  ShieldCheck,
  Heart,
  Award
};

/**
 * Vision & Mission Section
 */
const VisionMission = ({ data }) => {
  const points = [
    {
      title: data?.visionTitle || "Our Vision",
      icon: iconMap[data?.visionIcon] || Eye,
      color: "bg-primary",
      textColor: "text-white",
      description: data?.visionDescription || "To be a global leader in education, fostering a community of lifelong learners.",
      delay: 0.2
    },
    {
      title: data?.missionTitle || "Our Mission",
      icon: iconMap[data?.missionIcon] || Target,
      color: "bg-secondary",
      textColor: "text-primary",
      description: data?.missionDescription || "To provide a nurturing environment that empowers students to excel academically and socially.",
      delay: 0.4
    }
  ];

  const defaultValues = [
    { icon: Heart, label: "Compassion" },
    { icon: ShieldCheck, label: "Integrity" },
    { icon: Award, label: "Excellence" },
  ];

  const valuesToDisplay = data?.coreValues && data.coreValues.length > 0 
    ? data.coreValues.map(v => ({ icon: iconMap[v.iconName] || Heart, label: v.label }))
    : defaultValues;

  return (
    <section className="py-24 bg-[#F8FBFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: point.delay, duration: 0.8 }}
              className={`${point.color} rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/30 group-hover:scale-110 transition-transform duration-500`}>
                  <point.icon className={i === 0 ? "text-white" : "text-primary"} size={32} />
                </div>
                <h3 className={`text-4xl font-black mb-6 ${point.textColor}`}>{point.title}</h3>
                <p className={`text-lg leading-relaxed opacity-80 ${point.textColor}`}>
                  {point.description}
                </p>
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 blur-[80px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-white/5 blur-[60px] rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Core Values Strip */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {valuesToDisplay.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <val.icon size={20} />
              </div>
              <span className="font-black text-primary/40 uppercase tracking-[0.2em] text-xs">{val.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

