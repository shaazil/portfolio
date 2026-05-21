import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  "> initializing connection...",
  "> user: Mohammad Shazil",
  "> role: AI/ML Engineer & Full Stack Developer",
  "> status: available for collaboration",
  "> building: intelligent digital experiences",
  "> interests: AI systems, computer vision, modern UI",
  "> location: India"
];

const Contact = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
        const currentText = currentLine.substring(0, currentCharIndex + 1);
        
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] !== undefined) {
            newLines[currentLineIndex] = currentText;
          } else {
            newLines.push(currentText);
          }
          return newLines;
        });
      }, 30); // Fast typing speed
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 400); // Pause between lines
      
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const socialCards = [
    { label: "GitHub", href: "https://github.com/shaazil/", icon: <Github size={20} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammadshazil/", icon: <Linkedin size={20} /> },
    { label: "Email", href: "mailto:mohammadshazil.am@gmail.com", icon: <Mail size={20} /> },
    { label: "Resume", href: "/resume.pdf", icon: <FileText size={20} /> },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-white/20 px-6 py-2 rounded-full mb-8 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="font-['Syne',sans-serif] text-sm md:text-base font-bold tracking-[0.3em] text-white">
              CONTACT
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full min-h-[400px]"
          >
            {/* Terminal Header */}
            <div className="bg-[#111] border-b border-white/5 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-4 text-xs font-mono text-gray-500">shazil@portfolio:~</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300 leading-loose flex-grow relative">
              {/* Subtle terminal scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>

              {displayedLines.map((line, i) => (
                <div key={i} className="mb-2 text-green-400/90 drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">
                  {line}
                  {i === currentLineIndex && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2.5 h-4 bg-green-400 ml-1 translate-y-1"
                    />
                  )}
                </div>
              ))}
              {currentLineIndex >= terminalLines.length && (
                <div className="mt-4 flex items-center text-green-400/90">
                  <span>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 bg-green-400 ml-2 translate-y-0.5"
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Dashboard Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {socialCards.map((card, index) => (
                <motion.a
                  key={index}
                  href={card.href}
                  target={card.href.startsWith("http") || card.href.endsWith(".pdf") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-[#0a0a0a] border border-white/5 hover:border-white/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden"
                >
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {card.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Currently Building Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex-grow relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
            >
              {/* Animated subtle glow */}
              <div className="absolute -inset-24 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Activity size={18} className="text-white/60" />
                  <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white tracking-wide">
                    CURRENTLY BUILDING
                  </h3>
                </div>
                {/* Pulsing indicator */}
                <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></div>
              </div>

              <div className="space-y-4">
                {["AI Interview Assistant", "Computer Vision Systems", "Intelligent UI Experiments"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center pb-12"
        >
          <h2 className="font-['Syne',sans-serif] text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Let’s build something <span className="text-gray-400">meaningful.</span>
          </h2>
          
          <motion.a
            href="mailto:mohammadshazil.am@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 group"
          >
            <span>Start a conversation</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
