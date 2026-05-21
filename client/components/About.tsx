import { motion } from "framer-motion";
import { Code, Palette, Wrench } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "AI/ML DEVELOPMENT",
      description:
        "Building intelligent systems using machine learning algorithms, neural networks, and deep learning frameworks like TensorFlow to solve complex problems.",
    },
    {
      icon: <Palette size={40} />,
      title: "WEB DEVELOPMENT",
      description:
        "Creating modern, responsive web applications using React, Next.js, and other cutting-edge technologies with focus on user experience.",
    },
    {
      icon: <Wrench size={40} />,
      title: "SOFTWARE SOLUTIONS",
      description:
        "Developing custom software applications, data analysis tools, and automation scripts to streamline processes and boost productivity.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Tech Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/10 text-white py-16 px-8 md:px-16 rounded-lg mb-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Syne',sans-serif] text-3xl md:text-4xl font-bold mb-6 tracking-wider text-white"
            >
              MY TECH JOURNEY
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-5xl"
            >
              As a passionate tech enthusiast and B.Tech CSE (AI & ML) student,
              I'm deeply immersed in the world of artificial intelligence,
              machine learning, and software development. My journey spans
              across web development, AI model building, and creating
              intelligent solutions that solve real-world problems. I believe in
              the power of technology to transform lives and am constantly
              exploring cutting-edge frameworks and methodologies.
            </motion.p>

          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </motion.div>

        {/* About Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-white/20 p-4 mb-8 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl font-bold tracking-[0.2em] text-white">
              ABOUT ME
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed mb-12"
          >
            My name is Mohammad Shazil A M, I'm a dedicated B.Tech CSE student and aspiring AI/ML developer with a passion for creating
            intelligent solutions. I specialize in machine learning model
            development, web applications, and software engineering. My
            expertise spans from building neural networks to developing
            full-stack applications, always focusing on leveraging technology to
            solve complex problems and improve user experiences.
          </motion.p>


        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wider text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
