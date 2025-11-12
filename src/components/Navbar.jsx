import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const links = [
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/internships" },
    { name: "Workshops", path: "/workshops" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Join SDC", path: "/join-sdc", highlight: true },
  ];

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-600 to-yellow-500 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setOpen(false)}
          >
            <img
              src="/sdc-logo-2.png"
              alt="Software Development Cell Logo"
              className="relative h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`
                    relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                    ${
                      location.pathname === link.path
                        ? "text-white bg-blue-700 shadow-lg"
                        : "text-blue-100 hover:text-white hover:bg-blue-600/50"
                    }
                    ${
                      link.highlight
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400 shadow-lg hover:shadow-yellow-300/25"
                        : ""
                    }
                  `}
                >
                  {link.name}
                  {location.pathname === link.path && !link.highlight && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 rounded-full"></span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="bg-blue-800/95 backdrop-blur-lg rounded-2xl mt-2 p-4 border border-blue-600 shadow-2xl">
            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-3 my-1 rounded-xl font-semibold transition-all duration-300 transform hover:translate-x-2
                  ${
                    location.pathname === link.path
                      ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-inner"
                      : "text-blue-100 hover:text-white hover:bg-blue-600/50"
                  }
                  ${
                    link.highlight
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
    </nav>
  );
}
