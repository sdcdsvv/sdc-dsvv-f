import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/internships" },
    { name: "Workshops", path: "/workshops" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join SDC", path: "/join-sdc" },
  ];

  const resources = [
    { name: "Documentation", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Code Repository", path: "/code" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/sdc-dsvv",
      color: "hover:text-gray-700",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/sdc-dsvv",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/sdc_dsvv",
      color: "hover:text-sky-500",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:sdc@dsvv.ac.in",
      color: "hover:text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-white border-t border-blue-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SDC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Software Development
                </span>
                <span className="block text-sm text-gray-600">Cell, DSVV</span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Empowering DSVV students through innovation, technology, and
              real-world software development experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 ${social.color} border border-gray-200 hover:border-blue-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              Quick Links
              <FaArrowRight className="text-blue-600 text-sm" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">
                    Dev Sanskriti Vishwavidyalaya
                  </p>
                  <p className="text-gray-600 text-sm">Gayatrikunj, Haridwar</p>
                  <p className="text-gray-600 text-sm">Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:sdc@dsvv.ac.in"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  sdc@dsvv.ac.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +91 12345 67890
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <motion.button
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-600 text-sm flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Software Development Cell, DSVV. Made with{" "}
              <FaHeart className="text-red-500 mx-1" />
              by SDC Team
            </motion.p>

            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
