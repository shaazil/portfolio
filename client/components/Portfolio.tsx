import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Experience from "./Experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("PROJECTS");

  const projects = [
    {
      id: 1,
      title: "Smart Traffic Monitoring System",
      description:
        "AI-powered traffic analysis system using computer vision to detect vehicles, monitor congestion, and automate intelligent traffic insights in real time.",
      gradient: "from-blue-900/40 via-black to-purple-900/40",
      tech: ["Python", "OpenCV", "Flask", "YOLO", "Streamlit"],
      features: [
        "Real-time vehicle detection",
        "Traffic density monitoring",
        "Intelligent analytics dashboard",
        "Computer vision powered tracking",
      ],
      githubUrl: "#",
      liveUrl: "#",
      inProgress: false,
    },
    {
      id: 2,
      title: "AI Interview Assistant",
      description:
        "Building an AI-powered interview assistant designed to simulate technical interviews, analyze responses, and provide intelligent feedback using modern NLP workflows.",
      gradient: "from-emerald-900/40 via-black to-teal-900/40",
      tech: ["Python", "React", "Flask", "NLP", "AI APIs"],
      features: [
        "AI-generated interview questions",
        "Response evaluation",
        "Real-time feedback system",
        "Intelligent conversation flow",
      ],
      githubUrl: "#",
      liveUrl: "#",
      inProgress: true,
    },
    {
      id: 3,
      title: "YouTube AI Summarizer",
      description:
        "Tool that converts long-form YouTube videos into concise AI-generated summaries for faster learning and content consumption.",
      gradient: "from-red-900/40 via-black to-orange-900/40",
      tech: ["Python", "Flask", "AI APIs", "JavaScript"],
      features: [
        "AI summarization",
        "Video transcript analysis",
        "Quick learning workflow",
        "Clean minimal interface",
      ],
      githubUrl: "#",
      liveUrl: "#",
      inProgress: false,
    },
    {
      id: 4,
      title: "ML From Scratch",
      description:
        "Implemented core machine learning algorithms from scratch using Python and NumPy to deeply understand optimization and learning mechanics.",
      gradient: "from-indigo-900/40 via-black to-cyan-900/40",
      tech: ["Python", "NumPy", "Machine Learning"],
      features: [
        "Gradient descent implementation",
        "Linear regression",
        "Logistic regression",
        "NumPy-based ML workflows",
      ],
      githubUrl: "#",
      liveUrl: "#",
      inProgress: false,
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Python Data Structures",
      issuer: "University of Michigan",
      issuerLink: "https://www.coursera.org/learn/python-data",
      description:
        "Comprehensive course covering Python data structures including lists, dictionaries, tuples, and sets.",
      date: "February 14, 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/4PB883HD6NO1",
      color: "from-blue-500 to-blue-700",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F48f38dd7864840a29a4407bd35c95052%2F2c588f64b95d441b8a6cbafe9267848a?format=webp&width=800",
    },
    {
      id: 2,
      title: "Fundamentals of Java Programming",
      issuer: "Board Infinity",
      issuerLink:
        "https://www.coursera.org/learn/fundamentals-of-java-programming",
      description:
        "Master the core components of Java programming such as syntax, variables, methods, control statements, and understand JVM, JRE, and JDK.",
      date: "March 20, 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/77WLVRFNIP7X",
      color: "from-green-500 to-green-700",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F48f38dd7864840a29a4407bd35c95052%2F2158777b1bea474eb6a2fa212bb8ce0a?format=webp&width=800",
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      issuer: "Sungkyunkwan University",
      issuerLink: "https://www.coursera.org/learn/machine-learning-basics",
      description:
        "Fundamental concepts in machine learning including supervised and unsupervised learning.",
      date: "April 26, 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/94ZFXFVJ0R7C",
      color: "from-purple-500 to-purple-700",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F48f38dd7864840a29a4407bd35c95052%2F89a1fdeabf4d4f90872da53a740bcc66?format=webp&width=800",
    },
    {
      id: 4,
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      issuerLink: "https://www.coursera.org/learn/python-project-for-ai-application-development",
      description:
        "Build and deploy web applications using Flask, including routing, error handling, and CRUD operations.",
      date: "July 29, 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/QHOGMCSWPO74",
      color: "from-blue-500 to-blue-700",
      image: "/certificates/CERTIFICATE_LANDING_PAGE~QHOGMCSWPO74.jpeg",
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      issuer: "IBM",
      issuerLink: "https://www.coursera.org/learn/machine-learning-with-python",
      description:
        "Build and assess end-to-end machine learning solutions on real-world datasets through hands-on labs, projects, and practical evaluations.",
      date: "July 29, 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/YTM52O0SE3PI",
      color: "from-blue-500 to-blue-700",
      image: "/certificates/CERTIFICATE_LANDING_PAGE~YTM52O0SE3PI.jpeg",
    },
  ];

  // Keeping EXPERIENCE and CERTIFICATES as placeholders for future reference
  const tabs = ["PROJECTS"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "EXPERIENCE":
        return <Experience />;

      case "PROJECTS":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#0a0a0a] border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative">
                  
                  {proj.inProgress && (
                    <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full z-10">
                      IN PROGRESS
                    </span>
                  )}

                  {/* Project Image/Gradient */}
                  <div className={`relative h-48 md:h-56 overflow-hidden bg-gradient-to-br ${proj.gradient} grayscale group-hover:grayscale-0 transition-all duration-700`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700"></div>
                    {/* Abstract tech pattern */}
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {proj.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {proj.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="grid grid-cols-1 gap-2">
                        {proj.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-white/40 rounded-full mr-3 flex-shrink-0"></span>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {proj.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 border border-white/20 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>

                      <motion.a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>View</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "CERTIFICATES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-[#0a0a0a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-white/20">
                  {/* Certificate Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      {cert.title}
                    </h3>

                    <a
                      href={cert.issuerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 font-semibold mb-3 block hover:text-white transition-colors text-sm"
                    >
                      {cert.issuer}
                    </a>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-base font-medium">
                        {cert.date}
                      </span>

                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-semibold"
                      >
                        <span>Verify</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="pt-20 pb-14 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-white/20 p-4 mb-8 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl font-bold tracking-[0.3em]">
              PORTFOLIO
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            My journey in AI/ML development, projects, and continuous learning
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12 relative"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-semibold transition-all relative ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

