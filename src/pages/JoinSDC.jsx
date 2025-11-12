import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaGraduationCap, FaCode, FaHeart, FaArrowRight, FaUsers } from "react-icons/fa";

export default function JoinSDC() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    motivation: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_JOIN_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("sent");
          setForm({
            name: "",
            email: "",
            department: "",
            skills: "",
            motivation: "",
          });
        },
        () => setStatus("error")
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SDC</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Become part of our innovative community and work on real-world projects with fellow DSVV students
          </motion.p>

          {/* Benefits Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { icon: "💼", title: "Real Projects", desc: "Work on meaningful software projects" },
              { icon: "👥", title: "Teamwork", desc: "Collaborate with talented peers" },
              { icon: "🚀", title: "Skill Growth", desc: "Learn cutting-edge technologies" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaUsers className="text-blue-600" />
              Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Department Field */}
              <div className="relative">
                <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="department"
                  placeholder="Department / Program"
                  value={form.department}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Skills Field */}
              <div className="relative">
                <FaCode className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="skills"
                  placeholder="Your Skills (e.g., React, Python, UI/UX)"
                  value={form.skills}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Motivation Field */}
              <div className="relative">
                <FaHeart className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400 text-sm" />
                <textarea
                  name="motivation"
                  placeholder="Why do you want to join SDC? What interests you about software development?"
                  value={form.motivation}
                  onChange={handleChange}
                  rows="5"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-105 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : status === "sent" ? (
                  <>
                    ✅ Application Sent!
                  </>
                ) : (
                  <>
                    Submit Application
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <motion.p 
                  className="text-red-500 text-center mt-4 p-3 bg-red-50 rounded-lg border border-red-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Failed to submit application. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* What to Expect */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "Hands-on project experience",
                  "Mentorship from senior members",
                  "Regular workshops & sessions",
                  "Collaborative team environment",
                  "Portfolio building opportunities",
                  "Industry exposure"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Current DSVV student
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Passion for technology
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Willingness to learn
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Team collaboration spirit
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-yellow-50 rounded-3xl border border-yellow-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Questions?</h3>
              <p className="text-gray-600 text-sm">
                Reach out to us at{" "}
                <span className="text-blue-600 font-medium">sdc@dsvv.ac.in</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}