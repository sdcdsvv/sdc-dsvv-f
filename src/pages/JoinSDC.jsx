import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-2xl w-full bg-gray-900 p-10 rounded-2xl border border-gray-800 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center text-sky-400 mb-6">
          Join Software Development Cell
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Fill out the form below to become part of SDC and work on real-world
          tech projects with your peers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-sky-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-sky-500 outline-none"
          />
          <input
            type="text"
            name="department"
            placeholder="Department / Program"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-sky-500 outline-none"
          />
          <input
            type="text"
            name="skills"
            placeholder="Your Skills (e.g., React, Python, UI/UX)"
            value={form.skills}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-sky-500 outline-none"
          />
          <textarea
            name="motivation"
            placeholder="Why do you want to join SDC?"
            value={form.motivation}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-sky-500 outline-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition"
          >
            {status === "sending"
              ? "Submitting..."
              : status === "sent"
              ? "Application Sent ✅"
              : "Submit Application"}
          </button>

          {status === "error" && (
            <p className="text-red-400 mt-4 text-center">
              Failed to submit. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
