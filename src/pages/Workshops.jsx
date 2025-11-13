import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaFilter, 
  FaCalendarAlt, 
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaCode,
  FaMobile,
  FaCloud,
  FaRobot,
  FaPalette,
  FaDatabase,
  FaVideo,
  FaChalkboardTeacher,
  FaCertificate,
  FaRegCalendarCheck,
  FaLaptop
} from "react-icons/fa";

export default function Workshops() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
    { id: "all", name: "All Workshops", icon: <FaCode /> },
    { id: "web", name: "Web Development", icon: <FaLaptop /> },
    { id: "mobile", name: "Mobile Development", icon: <FaMobile /> },
    { id: "cloud", name: "Cloud & DevOps", icon: <FaCloud /> },
    { id: "ai", name: "AI/ML", icon: <FaRobot /> },
    { id: "uiux", name: "UI/UX Design", icon: <FaPalette /> },
    { id: "database", name: "Database", icon: <FaDatabase /> }
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" }
  ];

  const workshops = [
    {
      id: 1,
      title: "React Fundamentals Workshop",
      instructor: "Prof. Rajesh Kumar",
      category: "web",
      level: "beginner",
      duration: "3 hours",
      date: "2024-03-20",
      time: "2:00 PM - 5:00 PM",
      location: "CS Lab, Block A",
      seats: 30,
      enrolled: 25,
      description: "Learn the fundamentals of React including components, state, props, and hooks through hands-on coding exercises.",
      topics: ["Components", "State Management", "Props", "Hooks", "Event Handling"],
      requirements: ["Basic JavaScript", "HTML/CSS"],
      featured: true,
      recording: true,
      certificate: true
    },
    {
      id: 2,
      title: "Mobile App Development with Flutter",
      instructor: "Dr. Priya Sharma",
      category: "mobile",
      level: "intermediate",
      duration: "4 hours",
      date: "2024-03-25",
      time: "10:00 AM - 2:00 PM",
      location: "IT Center, Block B",
      seats: 25,
      enrolled: 18,
      description: "Build cross-platform mobile applications using Flutter and Dart. Create your first mobile app from scratch.",
      topics: ["Flutter Basics", "Widgets", "State Management", "API Integration"],
      requirements: ["Programming Basics", "OOP Concepts"],
      featured: true,
      recording: true,
      certificate: true
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      instructor: "Dr. Amit Patel",
      category: "ai",
      level: "beginner",
      duration: "6 hours",
      date: "2024-04-02",
      time: "9:00 AM - 3:00 PM",
      location: "AI Lab, Block C",
      seats: 20,
      enrolled: 15,
      description: "Get started with machine learning concepts and build your first ML model using Python and scikit-learn.",
      topics: ["ML Concepts", "Data Preprocessing", "Model Training", "Evaluation"],
      requirements: ["Python Basics", "Math Fundamentals"],
      featured: false,
      recording: true,
      certificate: true
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      instructor: "Ms. Anjali Mehta",
      category: "uiux",
      level: "beginner",
      duration: "3 hours",
      date: "2024-04-05",
      time: "1:00 PM - 4:00 PM",
      location: "Design Studio, Block D",
      seats: 35,
      enrolled: 28,
      description: "Learn essential UI/UX design principles and create user-centered designs using Figma.",
      topics: ["Design Thinking", "Wireframing", "Prototyping", "User Testing"],
      requirements: ["No prior experience needed"],
      featured: false,
      recording: false,
      certificate: true
    },
    {
      id: 5,
      title: "Cloud Computing with AWS",
      instructor: "Mr. Sameer Joshi",
      category: "cloud",
      level: "intermediate",
      duration: "5 hours",
      date: "2024-04-10",
      time: "11:00 AM - 4:00 PM",
      location: "Cloud Lab, Block E",
      seats: 15,
      enrolled: 12,
      description: "Hands-on workshop on AWS services including EC2, S3, and Lambda. Deploy your first cloud application.",
      topics: ["AWS Fundamentals", "EC2 Instances", "S3 Storage", "Lambda Functions"],
      requirements: ["Basic Linux", "Networking Basics"],
      featured: true,
      recording: true,
      certificate: true
    },
    {
      id: 6,
      title: "Database Design & Optimization",
      instructor: "Prof. Sanjay Verma",
      category: "database",
      level: "advanced",
      duration: "4 hours",
      date: "2024-04-15",
      time: "2:00 PM - 6:00 PM",
      location: "DB Lab, Block A",
      seats: 20,
      enrolled: 16,
      description: "Advanced database concepts including normalization, indexing, query optimization, and performance tuning.",
      topics: ["Database Design", "Normalization", "Indexing", "Query Optimization"],
      requirements: ["SQL Knowledge", "Database Basics"],
      featured: false,
      recording: true,
      certificate: true
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || workshop.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || workshop.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
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

  const getLevelColor = (level) => {
    switch(level) {
      case 'beginner': return 'from-green-500 to-green-600';
      case 'intermediate': return 'from-yellow-500 to-yellow-600';
      case 'advanced': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
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
              Workshops
            </span>{" "}
            & Training
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Enhance your skills with hands-on workshops conducted by industry experts and faculty members
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { number: workshops.length, label: "Upcoming Workshops", icon: "📅" },
              { number: "15+", label: "Expert Instructors", icon: "👨‍🏫" },
              { number: "500+", label: "Students Trained", icon: "🎓" },
              { number: "100%", label: "Practical Learning", icon: "💻" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl mb-2">{stat.icon}</div>
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
                placeholder="Search workshops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filters */}
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

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
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

        {/* Workshops Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredWorkshops.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No workshops found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            filteredWorkshops.map((workshop) => (
              <motion.div
                key={workshop.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${getLevelColor(workshop.level)} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                        {workshop.level.charAt(0).toUpperCase() + workshop.level.slice(1)}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                        {workshop.title}
                      </h3>
                    </div>
                    {workshop.featured && (
                      <span className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                        <FaStar className="text-xs" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/90">
                    <FaChalkboardTeacher className="text-sm" />
                    <span className="text-sm">By {workshop.instructor}</span>
                  </div>
                </div>

                {/* Workshop Details */}
                <div className="p-6 space-y-4">
                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{new Date(workshop.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-blue-500" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUsers className="text-blue-500" />
                      <span>{workshop.enrolled}/{workshop.seats} enrolled</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {workshop.description}
                  </p>

                  {/* Topics */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                      {workshop.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          +{workshop.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Requirements</h4>
                    <p className="text-gray-600 text-sm">{workshop.requirements}</p>
                  </div>

                  {/* Features */}
                  <div className="flex gap-4 text-sm">
                    {workshop.recording && (
                      <div className="flex items-center gap-1 text-green-600">
                        <FaVideo className="text-xs" />
                        <span>Recording</span>
                      </div>
                    )}
                    {workshop.certificate && (
                      <div className="flex items-center gap-1 text-purple-600">
                        <FaCertificate className="text-xs" />
                        <span>Certificate</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 pb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(workshop.enrolled / workshop.seats) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{workshop.seats - workshop.enrolled} seats left</span>
                    <span>{Math.round((workshop.enrolled / workshop.seats) * 100)}% filled</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {workshop.time}
                    </span>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll Now
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Upcoming Schedule */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <FaRegCalendarCheck className="text-blue-600" />
              Workshop Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.slice(0, 3).map((workshop) => (
                <div key={workshop.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaCalendarAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{workshop.title}</h4>
                    <p className="text-gray-600 text-xs">
                      {new Date(workshop.date).toLocaleDateString()} • {workshop.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Want to Conduct a Workshop?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Share your expertise with the SDC community. We're always looking for passionate instructors and industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Propose a Workshop
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