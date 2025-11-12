import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Internships from "./pages/Internships";
import Workshops from "./pages/Workshops";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import JoinSDC from "./pages/JoinSDC";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";  

import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow">
          <AuthProvider>
            <Toaster position="top-center" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/join-sdc" element={<JoinSDC />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Routes>
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}
