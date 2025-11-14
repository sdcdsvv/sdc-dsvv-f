import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/internships" },
    { name: "Workshops", path: "/workshops" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Join SDC", path: "/join-sdc", highlight: true },
  ];

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
              src="/sdc-logo-white-2.png"
              alt="Software Development Cell Logo"
              className="relative h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`
                    relative px-4 py-2 rounded-lg font-semibold transition-all duration-300
                    ${
                      location.pathname === link.path
                        ? "text-white bg-blue-700 shadow-lg"
                        : "text-blue-100 hover:text-white hover:bg-blue-500/50"
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
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar - Slides from right to left */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-800 to-blue-700 shadow-2xl z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-600">
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/sdc-logo-white-2.png"
              alt="Software Development Cell Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaTimes size={20} className="text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6">
          <div className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-3 rounded-xl font-semibold transition-all duration-200 border-l-4
                  ${
                    location.pathname === link.path
                      ? "bg-blue-600 text-white border-yellow-400 shadow-inner"
                      : "text-blue-100 hover:text-white hover:bg-blue-600/50 border-transparent"
                  }
                  ${
                    link.highlight
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400 border-yellow-400"
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

          {/* Additional Mobile Info */}
          <div className="mt-8 p-4 bg-blue-600/30 rounded-xl border border-blue-500">
            <p className="text-sm text-blue-100 text-center">
              Software Development Cell
            </p>
            <p className="text-xs text-blue-200 text-center mt-1">
              Dev Sanskriti Vishwavidyalaya
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
    </nav>
  );
}