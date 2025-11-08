import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Internships", path: "/internships" },
    { name: "Workshops", path: "/workshops" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Join SDC", path: "/join-sdc" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          SDC DSVV
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium hover:text-blue-600 transition-colors ${
                location.pathname === link.path ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col items-center pb-4">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 ${
                location.pathname === link.path
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
