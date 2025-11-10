import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

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
        // show up to 3 featured projects (take the newest ones)
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

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "#9333ea" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#38bdf8" },
            links: {
              color: "#38bdf8",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: true },
            move: { enable: true, speed: 2, outModes: { default: "bounce" } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[60vh] px-6 pt-24 pb-12">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Software Development Cell
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Empowering students of DSVV through innovation, learning, and
          real-world software projects.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
          >
            View Projects
          </Link>

          <Link
            to="/join-sdc"
            className="px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-600/20 transition"
          >
            Join SDC
          </Link>
        </motion.div>
      </div>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="relative z-10 bg-white text-gray-900 py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
            <p className="text-gray-600 mt-2">
              Selected projects built by SDC — click to view more.
            </p>
          </div>

          {loadingProjects ? (
            <div className="text-center py-12">Loading projects...</div>
          ) : featuredProjects.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No projects to show yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((proj, idx) => (
                <motion.article
                  key={proj._id || idx}
                  className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * idx, duration: 0.6 }}
                >
                  {proj.imageUrl ? (
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-44 bg-gray-200 flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {proj.description || "No description provided."}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
            >
              See all projects
            </Link>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section className="relative z-10 bg-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-sky-400">
            Our Expertise
          </h2>
          <p className="text-gray-300 mb-12">
            We turn ideas into reliable digital products using cutting-edge
            technologies and proven engineering practices.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Modern, scalable, and responsive websites built with React, Node.js, and MongoDB.",
                icon: "🌐",
              },
              {
                title: "Mobile Apps",
                desc: "Cross-platform apps using React Native that deliver native performance and experience.",
                icon: "📱",
              },
              {
                title: "AI & Machine Learning",
                desc: "Building intelligent solutions that automate, analyze, and optimize workflows.",
                icon: "🤖",
              },
              {
                title: "UI/UX Design",
                desc: "Designing intuitive and engaging interfaces that users love to use.",
                icon: "🎨",
              },
              {
                title: "Cloud & DevOps",
                desc: "Deploying and managing applications efficiently on AWS, Azure, and Vercel.",
                icon: "☁️",
              },
              {
                title: "Research & Innovation",
                desc: "Experimenting with new technologies and solving real-world academic problems.",
                icon: "🔬",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition transform hover:-translate-y-2 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-sky-400">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
