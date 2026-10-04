import { motion } from "framer-motion";
import { EXPERIENCE, CERTIFICATES } from "@/lib/site-data";
import { ExternalLink } from "lucide-react";
import { ChassisSticker } from "./decorative/TelemetryStickers";

export default function Experience() {
  return (
    <section id="experience" className="section-shell relative sticker-zone border-t border-border/50">
      <ChassisSticker className="absolute -left-16 bottom-16 text-muted-foreground hidden lg:block opacity-10" size={240} />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="md:col-span-6">
            <p className="section-marker mb-6">02.5 / LOG.EXPERIENCE</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-foreground">
              Industry roles & credentials.
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Practical application of technical skills in real-world environments, backed by verified industry certifications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="surface-card p-6 md:p-7 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-secondary tracking-wider bg-secondary/10 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto border-t border-border/60 pt-4">
                {exp.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Sub-section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-10">
          <div className="md:col-span-12">
            <p className="section-marker mb-6">02.8 / CREDENTIALS</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="surface-card p-5 md:p-6 flex items-center justify-between group hover:border-border/80 transition-colors"
            >
              <div>
                <h3 className="font-medium text-foreground text-sm">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                aria-label={`Verify ${cert.title}`}
              >
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
