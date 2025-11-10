import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { Link } from "react-router-dom";

export default function Home() {
  const particlesInit = async (engine = tsParticles) => {
    await loadFull(engine);
  };

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
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Software Development Cell
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Empowering students of DSVV through innovation, learning, and
          real-world software projects.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* <a
            href="/projects"
            className="px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
          >
            View Projects
          </a> */}
          <Link
            to="/projects"
            className="px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
          >
            View Projects
          </Link>
          {/* <a
            href="/join-sdc"
            className="px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-600/20 transition"
          >
            Join SDC
          </a> */}
          <Link
            to="/join-sdc"
            className="px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-600/20 transition"
          >
            Join SDC
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
