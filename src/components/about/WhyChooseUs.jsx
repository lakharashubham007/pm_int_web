import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Heart, Globe, Lightbulb, Users } from "lucide-react";

const iconMap = {
  Cpu,
  Globe,
  ShieldCheck,
  Heart,
  Lightbulb,
  Users
};

/**
 * Why Choose Us Section
 */
const WhyChooseUs = ({ data }) => {
  const defaultReasons = [
    {
      title: "AI-Integrated Learning",
      icon: Cpu,
      description: "Modern curriculum augmented with artificial intelligence to personalize and enhance learning outcomes.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-primary"
    },
    {
      title: "Global Perspective",
      icon: Globe,
      description: "Fostering an international mindset through collaborative projects and global cultural exchange.",
      color: "from-sky-50 to-sky-100",
      iconColor: "text-secondary"
    },
    {
      title: "Safe Environment",
      icon: ShieldCheck,
      description: "State-of-the-art security systems and a culture of emotional safety for every student.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-primary"
    }
  ];

  const colors = [
    "from-blue-50 to-blue-100",
    "from-sky-50 to-sky-100",
    "from-indigo-50 to-indigo-100",
    "from-purple-50 to-purple-100",
    "from-yellow-50 to-yellow-100",
    "from-green-50 to-green-100"
  ];

  const textColors = [
    "text-primary",
    "text-secondary",
    "text-primary",
    "text-accent-purple",
    "text-accent-yellow",
    "text-accent-green"
  ];

  const reasonsToDisplay = data?.reasons && data.reasons.length > 0 
    ? data.reasons.map((reason, i) => ({
        ...reason,
        icon: iconMap[reason.iconName] || Lightbulb,
        color: colors[i % colors.length],
        iconColor: textColors[i % textColors.length]
      }))
    : defaultReasons;

  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            {data?.whyChooseHeading?.split(' ').slice(0, -1).join(' ') || "Why Choose"} <span className="text-secondary">{data?.whyChooseHeading?.split(' ').slice(-1) || "Us"}?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary/40 font-black uppercase tracking-[0.4em] text-xs"
          >
            {data?.whyChooseSubheading || "Defining the Future of Education"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonsToDisplay.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${reason.color} p-8 rounded-[40px] border border-white/50 shadow-sm group hover:shadow-xl transition-all duration-500`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <reason.icon className={reason.iconColor} size={28} />
              </div>
              <h4 className="text-xl font-black text-primary mb-4">{reason.title}</h4>
              <p className="text-primary/60 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

