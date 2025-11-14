import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaLaptop,
  FaMicrophone,
  FaLightbulb,
  FaTrophy,
  FaRegCalendarCheck,
  FaExternalLinkAlt,
  FaVideo,
  FaBook,
  FaUserGraduate,
  FaHandsHelping
} from "react-icons/fa";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Events", icon: <FaCalendarAlt /> },
    { id: "workshop", name: "Workshops", icon: <FaCode /> },
    { id: "hackathon", name: "Hackathons", icon: <FaLaptop /> },
    { id: "seminar", name: "Seminars", icon: <FaMicrophone /> },
    { id: "competition", name: "Competitions", icon: <FaTrophy /> },
    { id: "networking", name: "Networking", icon: <FaUsers /> },
    { id: "training", name: "Training", icon: <FaUserGraduate /> }
  ];

  const types = [
    { id: "all", name: "All Types" },
    { id: "upcoming", name: "Upcoming" },
    { id: "past", name: "Past Events" },
    { id: "ongoing", name: "Ongoing" }
  ];

  const timeFilters = [
    { id: "all", name: "Any Time" },
    { id: "today", name: "Today" },
    { id: "week", name: "This Week" },
    { id: "month", name: "This Month" }
  ];

  const events = [
    {
      id: 1,
      title: "React Advanced Workshop",
      description: "Deep dive into advanced React concepts including hooks optimization, performance tuning, and state management patterns.",
      category: "workshop",
      type: "upcoming",
      date: "2024-03-25",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      location: "CS Lab, Block A",
      speaker: "Prof. Rajesh Kumar",
      capacity: 30,
      registered: 25,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      featured: true,
      tags: ["React", "Advanced", "Hands-on"],
      requirements: ["Basic React Knowledge", "Laptop with Node.js"],
      recording: true,
      materials: true,
      registrationLink: "#register"
    },
    {
      id: 2,
      title: "Annual Hackathon 2024",
      description: "24-hour coding competition to solve real-world problems. Form teams and build innovative solutions for campus challenges.",
      category: "hackathon",
      type: "upcoming",
      date: "2024-04-05",
      time: "9:00 AM - 9:00 AM",
      duration: "24 hours",
      location: "Innovation Center",
      speaker: "Multiple Mentors",
      capacity: 100,
      registered: 78,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      featured: true,
      tags: ["Hackathon", "Competition", "Innovation"],
      requirements: ["Team of 2-4", "Programming Basics"],
      prizes: true,
      registrationLink: "#register"
    },
    {
      id: 3,
      title: "AI in Modern Applications",
      description: "Industry expert session on implementing AI and machine learning in real-world applications and startups.",
      category: "seminar",
      type: "upcoming",
      date: "2024-03-28",
      time: "11:00 AM - 1:00 PM",
      duration: "2 hours",
      location: "Auditorium, Main Block",
      speaker: "Dr. Priya Sharma (Google AI)",
      capacity: 200,
      registered: 145,
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop",
      featured: false,
      tags: ["AI", "Machine Learning", "Industry"],
      requirements: ["None"],
      recording: true,
      registrationLink: "#register"
    },
    {
      id: 4,
      title: "UI/UX Design Sprint",
      description: "Hands-on design workshop focusing on user-centered design principles and prototyping with Figma.",
      category: "workshop",
      type: "upcoming",
      date: "2024-04-02",
      time: "10:00 AM - 4:00 PM",
      duration: "6 hours",
      location: "Design Studio, Block D",
      speaker: "Ms. Anjali Mehta",
      capacity: 25,
      registered: 18,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      featured: false,
      tags: ["UI/UX", "Design", "Figma"],
      requirements: ["Laptop", "Figma Account"],
      materials: true,
      registrationLink: "#register"
    },
    {
      id: 5,
      title: "Code & Coffee Networking",
      description: "Informal networking session for developers to connect, share ideas, and collaborate on projects.",
      category: "networking",
      type: "upcoming",
      date: "2024-03-30",
      time: "4:00 PM - 6:00 PM",
      duration: "2 hours",
      location: "SDC Lounge",
      speaker: "SDC Community",
      capacity: 50,
      registered: 32,
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Networking", "Community", "Casual"],
      requirements: ["None"],
      registrationLink: "#register"
    },
    {
      id: 6,
      title: "Cloud Computing Bootcamp",
      description: "Intensive training session on cloud fundamentals, AWS services, and deployment strategies.",
      category: "training",
      type: "past",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      duration: "8 hours",
      location: "Cloud Lab, Block E",
      speaker: "Mr. Sameer Joshi",
      capacity: 20,
      registered: 20,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Cloud", "AWS", "DevOps"],
      requirements: ["Basic Linux Knowledge"],
      recording: true,
      materials: true
    },
    {
      id: 7,
      title: "Tech Career Fair",
      description: "Connect with industry professionals and learn about internship and job opportunities in tech companies.",
      category: "networking",
      type: "upcoming",
      date: "2024-04-10",
      time: "10:00 AM - 3:00 PM",
      duration: "5 hours",
      location: "Main Ground",
      speaker: "Multiple Companies",
      capacity: 300,
      registered: 210,
      image: "https://images.unsplash.com/photo-1731160807880-daf859b64420?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      tags: ["Career", "Networking", "Opportunities"],
      requirements: ["Resume"],
      registrationLink: "#register"
    },
    {
      id: 8,
      title: "Open Source Contribution Day",
      description: "Learn how to contribute to open source projects and make your first pull request with guidance from mentors.",
      category: "workshop",
      type: "ongoing",
      date: "2024-03-22",
      time: "1:00 PM - 5:00 PM",
      duration: "4 hours",
      location: "Open Source Lab",
      speaker: "SDC Core Team",
      capacity: 40,
      registered: 35,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Open Source", "Git", "Collaboration"],
      requirements: ["Git Basics", "Laptop"],
      materials: true,
      registrationLink: "#register"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesType = selectedType === "all" || event.type === selectedType;
    
    // Time filtering logic
    const eventDate = new Date(event.date);
    const today = new Date();
    const matchesTime = timeFilter === "all" || 
                       (timeFilter === "today" && eventDate.toDateString() === today.toDateString()) ||
                       (timeFilter === "week" && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) ||
                       (timeFilter === "month" && eventDate <= new Date(today.getFullYear(), today.getMonth() + 1, 0));
    
    return matchesSearch && matchesCategory && matchesType && matchesTime;
  });

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'past': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'workshop': return 'bg-purple-500';
      case 'hackathon': return 'bg-orange-500';
      case 'seminar': return 'bg-blue-500';
      case 'competition': return 'bg-yellow-500';
      case 'networking': return 'bg-green-500';
      case 'training': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

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

  const EventCard = ({ event }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              <FaStar className="text-xs" />
              Featured
            </span>
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className={`flex items-center gap-1 ${getEventTypeColor(event.type)} px-3 py-1 rounded-full text-sm font-medium capitalize`}>
            {event.type}
          </span>
        </div>

        {/* Category Indicator */}
        <div className={`absolute bottom-4 left-4 w-3 h-3 rounded-full ${getCategoryColor(event.category)}`}></div>

        {/* Tags */}
        <div className="absolute bottom-4 right-4">
          <div className="flex gap-2">
            {event.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-black/70 text-white text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
            {event.title}
          </h3>
          <div className="flex gap-2 ml-4">
            {event.recording && (
              <div className="p-2 bg-gray-100 rounded-lg text-green-600" title="Recording Available">
                <FaVideo className="text-sm" />
              </div>
            )}
            {event.materials && (
              <div className="p-2 bg-gray-100 rounded-lg text-purple-600" title="Materials Provided">
                <FaBook className="text-sm" />
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt className="text-blue-500" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaClock className="text-blue-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUsers className="text-blue-500" />
            <span>{event.registered}/{event.capacity}</span>
          </div>
        </div>

        {/* Speaker */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <FaMicrophone className="text-blue-500" />
          <span>By {event.speaker}</span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{event.capacity - event.registered} spots left</span>
            <span>{Math.round((event.registered / event.capacity) * 100)}% filled</span>
          </div>
        </div>

        {/* Requirements */}
        {event.requirements && event.requirements[0] !== "None" && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-800 mb-2">Requirements</h4>
            <div className="flex flex-wrap gap-2">
              {event.requirements.map((req, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {event.duration}
          </span>
          {event.registrationLink ? (
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          ) : (
            <span className="text-sm text-gray-500">Event Completed</span>
          )}
        </div>
      </div>
    </motion.div>
  );

  const upcomingEvents = events.filter(event => event.type === 'upcoming').slice(0, 3);

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
              Events
            </span>{" "}
            & Activities
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join our vibrant community through workshops, hackathons, seminars, and networking events. 
            Learn, collaborate, and grow with SDC.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { number: events.filter(e => e.type === 'upcoming').length, label: "Upcoming Events", icon: "📅" },
              { number: "500+", label: "Participants", icon: "👥" },
              { number: "25+", label: "Events Conducted", icon: "🎯" },
              { number: "15+", label: "Expert Speakers", icon: "🎤" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Upcoming Events */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaRegCalendarCheck className="text-yellow-400" />
              Next Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      {categories.find(cat => cat.id === event.category)?.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm line-clamp-1">{event.title}</h3>
                      <p className="text-white/80 text-xs">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>{event.time}</span>
                    <span>{event.location.split(',')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by title, description, or speaker..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>

              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {timeFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>{filter.name}</option>
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

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedType("all");
                setTimeFilter("all");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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
              Want to Host an Event?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop, seminar, or tech event? Partner with SDC to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Propose an Event
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Event Team
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}