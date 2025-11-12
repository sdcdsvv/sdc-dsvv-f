import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaFilter, 
  FaCalendarAlt, 
  FaClock,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
  FaArrowRight,
  FaExternalLinkAlt,
  FaStar,
  FaBriefcase,
  FaCode,
  FaMobile,
  FaCloud,
  FaRobot
} from "react-icons/fa";

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", icon: <FaBriefcase /> },
    { id: "web", name: "Web Development", icon: <FaLaptopCode /> },
    { id: "mobile", name: "Mobile Development", icon: <FaMobile /> },
    { id: "cloud", name: "Cloud & DevOps", icon: <FaCloud /> },
    { id: "ai", name: "AI/ML", icon: <FaRobot /> },
    { id: "uiux", name: "UI/UX Design", icon: <FaCode /> }
  ];

  const types = [
    { id: "all", name: "All Types" },
    { id: "paid", name: "Paid" },
    { id: "unpaid", name: "Unpaid" },
    { id: "credit", name: "For Credit" }
  ];

  const internships = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      company: "SDC Internal Projects",
      type: "unpaid",
      category: "web",
      duration: "3 months",
      location: "Remote",
      stipend: "Certificate + Experience",
      description: "Work on real-world web applications using modern technologies like React, Node.js, and MongoDB.",
      requirements: ["React", "Node.js", "MongoDB", "Git"],
      featured: true,
      applicants: 15,
      deadline: "2024-03-15"
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "SDC Innovation Lab",
      type: "unpaid",
      category: "mobile",
      duration: "4 months",
      location: "On Campus",
      stipend: "Certificate + Letter",
      description: "Develop cross-platform mobile applications using React Native for campus utilities.",
      requirements: ["React Native", "JavaScript", "API Integration"],
      featured: true,
      applicants: 12,
      deadline: "2024-03-20"
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "SDC Design Team",
      type: "unpaid",
      category: "uiux",
      duration: "2 months",
      location: "Hybrid",
      stipend: "Certificate",
      description: "Design user interfaces and experiences for SDC projects and platforms.",
      requirements: ["Figma", "UI/UX Principles", "Wireframing"],
      featured: false,
      applicants: 8,
      deadline: "2024-03-25"
    },
    {
      id: 4,
      title: "Cloud Engineering Intern",
      company: "SDC Infrastructure",
      type: "unpaid",
      category: "cloud",
      duration: "3 months",
      location: "Remote",
      stipend: "Certificate + AWS Credits",
      description: "Learn and implement cloud infrastructure solutions using AWS and Docker.",
      requirements: ["AWS Basics", "Docker", "Linux"],
      featured: false,
      applicants: 6,
      deadline: "2024-04-01"
    },
    {
      id: 5,
      title: "AI/ML Research Intern",
      company: "SDC Research Wing",
      type: "credit",
      category: "ai",
      duration: "6 months",
      location: "On Campus",
      stipend: "Academic Credit",
      description: "Research and implement machine learning models for academic projects.",
      requirements: ["Python", "ML Basics", "Data Analysis"],
      featured: true,
      applicants: 10,
      deadline: "2024-03-30"
    },
    {
      id: 6,
      title: "Frontend Developer",
      company: "SDC Web Team",
      type: "unpaid",
      category: "web",
      duration: "3 months",
      location: "Remote",
      stipend: "Certificate",
      description: "Build responsive and interactive user interfaces for various SDC projects.",
      requirements: ["React", "CSS", "JavaScript", "Responsive Design"],
      featured: false,
      applicants: 18,
      deadline: "2024-03-18"
    }
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || internship.category === selectedCategory;
    const matchesType = selectedType === "all" || internship.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
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
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Internship
            </span>{" "}
            Opportunities
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Gain real-world experience, build your portfolio, and work on meaningful projects with SDC
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { number: internships.length, label: "Open Positions" },
              { number: "50+", label: "Alumni Interns" },
              { number: "100%", label: "Skill Growth" },
              { number: "4.8/5", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4 w-full lg:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Internships Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredInternships.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No internships found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            filteredInternships.map((internship) => (
              <motion.div
                key={internship.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {internship.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{internship.company}</p>
                    </div>
                    {internship.featured && (
                      <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        <FaStar className="text-xs" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {internship.description}
                  </p>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-blue-500" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaBriefcase className="text-blue-500" />
                      <span className="capitalize">{internship.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUsers className="text-blue-500" />
                      <span>{internship.applicants} applicants</span>
                    </div>
                  </div>

                  {/* Stipend */}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-800">Stipend</span>
                      <span className="text-sm text-blue-600 font-semibold">{internship.stipend}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-red-500" />
                      <span>Apply by {new Date(internship.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {Math.ceil((new Date(internship.deadline) - new Date()) / (1000 * 60 * 60 * 24))} days left
                    </span>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Career?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join SDC internships to gain hands-on experience, build your portfolio, and connect with industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse All Opportunities
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Coordinator
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}