"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { publicApi } from "@/services/api";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await publicApi.submitAdmission(formData);
      setSuccess(true);
      setFormData({
        studentName: "",
        dateOfBirth: "",
        classApplying: "",
        parentName: "",
        phone: "",
        email: "",
        address: "",
      });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden">
        <div className="bg-primary p-8 text-white text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-2"
          >
            Admission Open 2026-27
          </motion.h1>
          <p className="text-secondary opacity-80">Join our school family today!</p>
        </div>

        <div className="p-8 md:p-12">
          {success ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-accent-green rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl">
                ✓
              </div>
              <h2 className="text-3xl font-bold mb-4">Submission Successful!</h2>
              <p className="text-primary/60 mb-8">
                Thank you for applying. Our team will contact you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-accent-red font-bold hover:underline"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Student Name *</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Date of Birth *</label>
                  <input
                    required
                    type="date"
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-bold mb-2">Class Applying For *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    value={formData.classApplying}
                    onChange={(e) => setFormData({ ...formData, classApplying: e.target.value })}
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Parent/Guardian Name *</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    placeholder="Jane Doe"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

               <div>
                <label className="block text-sm font-bold mb-2">Home Address *</label>
                <textarea
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-2xl bg-background border-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 bg-accent-yellow text-primary font-bold text-lg rounded-2xl shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
