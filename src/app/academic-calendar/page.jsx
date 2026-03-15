"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Bell, Download, Star, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function AcademicCalendar() {
  const events = [
    { date: "Mar 25", title: "Holi Celebration", type: "Holiday", color: "bg-pink-500" },
    { date: "Apr 05", title: "New Session Starts", type: "Academic", color: "bg-blue-500" },
    { date: "Apr 14", title: "Ambedkar Jayanti", type: "Holiday", color: "bg-pink-500" },
    { date: "May 10", title: "Summer Camp Begins", type: "Event", color: "bg-orange-500" },
    { date: "Jun 15", title: "School Reopens", type: "Academic", color: "bg-blue-500" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 mb-6"
          >
            <Star className="text-secondary fill-secondary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Planning Ahead</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8"
          >
            ACADEMIC <span className="text-secondary">CALENDAR</span>
          </motion.h1>
          <p className="text-white/50 text-xl max-w-2xl font-medium">
            Stay updated with our school's schedule, including holidays, special events, and academic milestones for the year 2026.
          </p>
        </div>
      </section>

      {/* Calendar List */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black text-primary uppercase">Upcoming <span className="text-secondary">Dates</span></h2>
              <button className="flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest bg-primary/5 px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-all">
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white border border-primary/5 p-8 rounded-[40px] flex items-center justify-between hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center space-x-8">
                    <div className={`${event.color} text-white w-20 h-20 rounded-3xl flex flex-col items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                      <span className="text-xs font-black uppercase">{event.date.split(' ')[0]}</span>
                      <span className="text-2xl font-black leading-none">{event.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">{event.type}</span>
                      <h3 className="text-2xl font-black text-primary">{event.title}</h3>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <div className="bg-[#F8FBFF] p-10 rounded-[50px] border border-primary/5 sticky top-32">
                <Bell className="text-secondary mb-6" size={40} />
                <h3 className="text-2xl font-black text-primary mb-4 uppercase">Notifications</h3>
                <p className="text-primary/50 text-sm mb-8 leading-relaxed">
                  Subscribe to our mailing list to receive automatic updates about schedule changes and upcoming holidays directly in your inbox.
                </p>
                <div className="space-y-4">
                   <div className="p-6 bg-white rounded-3xl border border-primary/5">
                      <div className="flex items-center space-x-3 text-primary/40 text-[10px] font-black uppercase tracking-widest mb-2">
                         <Clock size={12} />
                         <span>Reporting Time</span>
                      </div>
                      <span className="text-lg font-black text-primary">08:45 AM</span>
                   </div>
                   <div className="p-6 bg-white rounded-3xl border border-primary/5">
                      <div className="flex items-center space-x-3 text-primary/40 text-[10px] font-black uppercase tracking-widest mb-2">
                         <MapPin size={12} />
                         <span>Location</span>
                      </div>
                      <span className="text-lg font-black text-primary font-bold">Assembly Hall</span>
                   </div>
                </div>
                <Link href="/admission">
                   <button className="w-full mt-10 py-5 bg-primary text-white font-black rounded-3xl shadow-xl shadow-primary/20 hover:scale-105 transition-transform uppercase text-xs tracking-widest">
                      Inquire Now
                   </button>
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
