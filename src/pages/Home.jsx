import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";
import emailjs from "@emailjs/browser";
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaPalette,
  FaCloud,
  FaFlask,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await API.get("/projects");
        const items = Array.isArray(res.data) ? res.data.slice(0, 3) : [];
        setFeaturedProjects(items);
      } catch (err) {
        console.error("Failed to load projects for Home:", err);
      } finally {
        setLoadingProjects(false);
      }
    }
    loadProjects();
  }, []);

  // Animated Geometric Background Component
  const GeometricBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Triangles */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-24 h-24 opacity-5"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full border-l-2 border-t-2 border-blue-300"></div>
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/5 w-16 h-16 opacity-5"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full border-r-2 border-b-2 border-blue-200"></div>
      </motion.div>

      {/* Floating Circles */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 opacity-3"
        animate={{
          x: [0, 30, 0],
          y: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full rounded-full border border-blue-200"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-20 h-20 opacity-4"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full rounded-full border border-blue-300"></div>
      </motion.div>

      {/* Floating Squares */}
      <motion.div
        className="absolute top-2/3 left-1/5 w-28 h-28 opacity-4"
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border border-blue-400"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/5 right-1/6 w-12 h-12 opacity-3"
        animate={{
          x: [0, -15, 0],
          y: [0, 25, 0],
          rotate: [30, 150, 270, 390],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      >
        <div className="w-full h-full border border-blue-300"></div>
      </motion.div>

      {/* Hexagons */}
      <motion.div
        className="absolute bottom-1/3 right-1/6 w-24 h-24 opacity-4"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          rotate: [0, 60, 120, 180, 240, 300, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      >
        <div className="w-full h-full border border-blue-200 clip-hexagon"></div>
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-2/5 left-1/4 w-40 h-40 opacity-5"
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-100 to-blue-50 blur-xl"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/5 right-1/3 w-36 h-36 opacity-4"
        animate={{
          x: [0, -30, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-50 to-blue-100 blur-xl"></div>
      </motion.div>
    </div>
  );

  // Add this CSS for hexagon clip path
  const HexagonCSS = () => (
    <style jsx>{`
      .clip-hexagon {
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
      }
    `}</style>
  );

  function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
      <motion.div
        className="border border-blue-200 rounded-2xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button
          className="w-full text-left px-6 py-5 bg-white hover:bg-blue-50 transition-all duration-300 flex justify-between items-center group"
          onClick={() => setOpen(!open)}
        >
          <span className="text-lg font-semibold text-blue-800 group-hover:text-blue-600">
            {question}
          </span>
          <motion.span
            className="text-blue-600 text-xl transition-transform duration-300"
            animate={{ rotate: open ? 180 : 0 }}
          >
            <FaArrowRight />
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 py-4 text-gray-600 bg-blue-50">{answer}</div>
        </motion.div>
      </motion.div>
    );
  }

  function ContactForm() {
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
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
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
          },
          () => setStatus("error")
        );
    };

    return (
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl border-2 border-yellow-200 shadow-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 text-gray-800 rounded-xl w-full border-2 border-gray-200 focus:border-yellow-400 outline-none transition-all duration-300 focus:scale-105"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 text-gray-800 rounded-xl w-full border-2 border-gray-200 focus:border-yellow-400 outline-none transition-all duration-300 focus:scale-105"
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-4 bg-gray-50 text-gray-800 rounded-xl w-full border-2 border-gray-200 focus:border-yellow-400 outline-none transition-all duration-300 focus:scale-105 resize-none"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold rounded-xl transition-all duration-300 w-full md:w-auto hover:from-yellow-500 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-400/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "Sent Successfully! 🎉"
            : "Send Message"}
        </motion.button>

        {status === "error" && (
          <motion.p
            className="text-red-500 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </motion.form>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-hidden">
      {/* CSS for hexagon */}
      <HexagonCSS />

      {/* Geometric Background */}
      <GeometricBackground />

      {/* Light Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
                speed: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: ["#3b82f6", "#60a5fa", "#93c5fd"],
            },
            links: {
              color: "#3b82f6",
              distance: 120,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              enable: true,
              speed: 0.5,
              outModes: { default: "bounce" },
              direction: "none",
              random: true,
            },
            number: {
              value: 40,
              density: { enable: true, area: 800 },
            },
            opacity: {
              value: { min: 0.05, max: 0.2 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Rest of your existing code remains the same */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full blur-3xl opacity-40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <motion.div
          className="relative z-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          

          {/* Main Heading with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              {/* <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                SDC
              </span> */}
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-4">
                Software Development Cell
              </span>
            </h1>
          </motion.div>

          {/* University Tagline */}
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="text-lg font-semibold">
              Dev Sanskriti Vishwavidyalaya
            </span>
          </motion.div>

          {/* Description with Icon */}
          <motion.div
            className="flex items-center justify-center gap-4 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light text-left">
              Empowering{" "}
              <span className="text-blue-600 font-semibold">DSVV students</span>{" "}
              through innovation, cutting-edge technology, and real-world
              software excellence.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link
                to="/projects"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaCode className="text-lg" />
                Explore Projects
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <Link
                to="/join-sdc"
                className="relative px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 flex items-center gap-3 group"
              >
                <FaUsers className="text-lg" />
                Join Our Community
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              {
                number: "50+",
                label: "Projects",
                icon: "🚀",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "100+",
                label: "Members",
                icon: "👥",
                color: "from-green-500 to-green-600",
              },
              {
                number: "25+",
                label: "Workshops",
                icon: "💡",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "15+",
                label: "Internships",
                icon: "⭐",
                color: "from-orange-500 to-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500 font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest innovations and cutting-edge solutions built
              with passion and expertise
            </p>
          </motion.div>

          {loadingProjects ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 mt-4">Loading amazing projects...</p>
            </div>
          ) : featuredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-600 text-xl">
                Exciting projects coming soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((proj, idx) => (
                <motion.div
                  key={proj._id || idx}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {proj.imageUrl ? (
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <FaCode className="text-4xl text-blue-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 relative">
                    <div className="absolute -top-4 left-6">
                      <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        New
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {proj.description || "No description provided."}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 text-sm font-semibold">
                        View Details
                      </span>
                      <FaArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            >
              View All Projects
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="relative z-10 py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mastering the latest technologies to deliver exceptional digital
              experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Modern, scalable, and responsive websites built with React, Node.js, and MongoDB.",
                icon: <FaCode className="text-4xl" />,
                color: "text-blue-600",
              },
              {
                title: "Mobile Apps",
                desc: "Cross-platform apps using React Native that deliver native performance and experience.",
                icon: <FaMobile className="text-4xl" />,
                color: "text-green-600",
              },
              {
                title: "AI & Machine Learning",
                desc: "Building intelligent solutions that automate, analyze, and optimize workflows.",
                icon: <FaRobot className="text-4xl" />,
                color: "text-purple-600",
              },
              {
                title: "UI/UX Design",
                desc: "Designing intuitive and engaging interfaces that users love to use.",
                icon: <FaPalette className="text-4xl" />,
                color: "text-pink-600",
              },
              {
                title: "Cloud & DevOps",
                desc: "Deploying and managing applications efficiently on AWS, Azure, and Vercel.",
                icon: <FaCloud className="text-4xl" />,
                color: "text-orange-600",
              },
              {
                title: "Research & Innovation",
                desc: "Experimenting with new technologies and solving real-world academic problems.",
                icon: <FaFlask className="text-4xl" />,
                color: "text-red-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Software Development Cell
            </p>
          </motion.div>

          {[
            {
              q: "What is the purpose of SDC?",
              a: "SDC (Software Development Cell) is a student-led initiative under DSVV that builds real-world software projects, conducts workshops, and mentors students in technology and development.",
            },
            {
              q: "Who can join SDC?",
              a: "Any DSVV student with an interest in coding, design, or technology can apply to join SDC. Passion and willingness to learn matter more than prior experience.",
            },
            {
              q: "Are there any prerequisites to join?",
              a: "No strict prerequisites — however, basic programming knowledge and curiosity about solving problems with technology are helpful.",
            },
            {
              q: "Does SDC provide internships?",
              a: "Yes. SDC offers internships on internal and external projects where students gain hands-on experience under the guidance of mentors.",
            },
            {
              q: "How can I contribute if I'm not a developer?",
              a: "You can still contribute through content creation, UI/UX design, event organization, or documentation — we value multidisciplinary collaboration.",
            },
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's build something amazing
              together!
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
