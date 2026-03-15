"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactService } from "@/services";

const ContactInfo = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await contactService.get();
        
        const mappedInfo = [
          {
            icon: Phone,
            title: "Call Us",
            details: data.phones.length > 0 ? data.phones : ["+1 (234) 567-890"],
            color: "text-primary",
            bgColor: "bg-primary/5"
          },
          {
            icon: Mail,
            title: "Email Us",
            details: data.emails.length > 0 ? data.emails : ["info@pmschool.com"],
            color: "text-secondary",
            bgColor: "bg-secondary/10"
          },
          {
            icon: MapPin,
            title: "Visit Us",
            details: data.address.length > 0 ? data.address : ["123 Education Excellence Way"],
            color: "text-accent-purple",
            bgColor: "bg-accent-purple/5"
          },
          {
            icon: Clock,
            title: "School Hours",
            details: data.workingHours.length > 0 ? data.workingHours : ["Mon - Fri: 8:00 AM - 4:00 PM"],
            color: "text-accent-green",
            bgColor: "bg-accent-green/5"
          }
        ];
        setInfo(mappedInfo);
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, []);

  if (isLoading) return <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-50">Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {info.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[32px] border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
        >
          <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <item.icon className={item.color} size={28} />
          </div>
          <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
          <div className="space-y-1">
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-primary/60 text-sm font-medium">{detail}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
