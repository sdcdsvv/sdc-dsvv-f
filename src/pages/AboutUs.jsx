import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaRocket, 
  FaLightbulb, 
  FaHandshake,
  FaTrophy,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Faculty Advisor",
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Over 15 years of experience in software engineering and academic research. Passionate about mentoring students in technology.",
      social: { linkedin: "#", email: "rajesh.kumar@dsvv.ac.in" }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Student Lead",
      department: "MCA Final Year",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in React and Node.js. Leading SDC initiatives and project management.",
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Technical Head",
      department: "B.Tech CSE",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized in cloud computing and DevOps. Passionate about building scalable applications and mentoring juniors.",
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 4,
      name: "Anjali Mehta",
      role: "Design Lead",
      department: "M.Des",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "UI/UX designer with a keen eye for user-centered design. Creating beautiful and functional interfaces for SDC projects.",
      social: { linkedin: "#", behance: "#" }
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "100+", label: "Active Members", icon: "👥" },
    { number: "25+", label: "Workshops Conducted", icon: "💡" },
    { number: "15+", label: "Industry Collaborations", icon: "🤝" }
  ];

  const values = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective growth through shared knowledge and experiences."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation",
      description: "Encouraging creative thinking and exploring cutting-edge technologies to solve real-world problems."
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Learning",
      description: "Continuous skill development through hands-on projects, workshops, and peer-to-peer mentoring."
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Community",
      description: "Building a supportive environment where students can grow together and help each other succeed."
    }
  ];

  const milestones = [
    { year: "2020", event: "SDC Founded", description: "Software Development Cell established with 15 founding members" },
    { year: "2021", event: "First Major Project", description: "Successfully delivered university management system" },
    { year: "2022", event: "Expansion", description: "Grew to 50+ active members across multiple departments" },
    { year: "2023", event: "Industry Partnerships", description: "Established collaborations with tech companies" },
    { year: "2024", event: "Innovation Hub", description: "Launched dedicated lab space for projects and research" }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SDC</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The Software Development Cell at Dev Sanskriti Vishwavidyalaya is a student-driven initiative 
              dedicated to fostering innovation, collaboration, and technical excellence.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaRocket className="text-2xl text-yellow-400" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-blue-100">
                To empower DSVV students with practical software development skills through hands-on projects, 
                industry collaborations, and continuous learning opportunities. We aim to bridge the gap between 
                academic knowledge and real-world application.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-2xl text-yellow-400" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                To become the premier student-led technology innovation hub that produces industry-ready 
                software professionals and contributes to the technological advancement of our university 
                and community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at SDC
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped SDC over the years</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Year marker */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                    <div className="text-4xl font-black text-gray-300 opacity-50">
                      {milestone.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated students and faculty working together to drive innovation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-gray-700 transition-colors">
                        <FaGithub />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">Hear from our members and collaborators</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                quote: "SDC transformed my college experience. The hands-on projects gave me the confidence to pursue a career in tech.",
                author: "Rahul Verma",
                role: "Former SDC Member, Now at Google"
              },
              {
                quote: "The collaborative environment at SDC helped me develop both technical and soft skills that are invaluable in the industry.",
                author: "Neha Singh",
                role: "SDC Alumna, Software Engineer at Microsoft"
              },
              {
                quote: "As a faculty advisor, I've seen SDC students grow into competent professionals ready to tackle real-world challenges.",
                author: "Dr. Rajesh Kumar",
                role: "Faculty Advisor, SDC"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-200"
              >
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you at SDC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join SDC Today
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}