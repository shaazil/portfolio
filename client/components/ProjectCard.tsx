import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  gradient: string;
  glow: string;
  tech: readonly string[];
  features?: readonly string[];
  githubUrl: string;
  liveUrl: string;
  inProgress?: boolean;
  telemetry: any; // Passed from site-data.ts ProjectTelemetry
}

interface ProjectCardProps {
  project: ProjectCardData;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border/80">
        
        {/* Telemetry Hover Reveal Area */}
        <div className={cn("relative h-48 sm:h-56 shrink-0 overflow-hidden transition-all duration-500", project.gradient)}>
          {/* Default state */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
             <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />
          </div>
          
          {/* Hover state (Telemetry) */}
          <div className="absolute inset-0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/95 backdrop-blur-md flex flex-col justify-center border-b border-border/50">
            <div className="font-mono text-[10px] sm:text-xs leading-[1.6] text-muted-foreground whitespace-pre">
              <span className="text-primary">{`{`}</span><br/>
              {`  "id": `}<span className="text-foreground">"{project.id}"</span>,<br/>
              {`  "status": `}<span className="text-secondary">"{project.telemetry.status}"</span>,<br/>
              {`  "linesOfCode": `}<span className="text-foreground">"{project.telemetry.linesOfCode}"</span>,<br/>
              {`  "commits": `}<span className="text-foreground">{project.telemetry.commits}</span>,<br/>
              {`  "architecture": `}<span className="text-foreground">"{project.telemetry.architecture}"</span>,<br/>
              {`  "stack": `}<span className="text-foreground">{`[`}</span><br/>
              {project.telemetry.stack.map((s: string) => `    "${s}"`).join(',\n')}
              <br/>{`  ]`}<br/>
              <span className="text-primary">{`}`}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-grow flex-col p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-xl font-bold leading-snug text-foreground">
              {project.title}
            </h3>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="chip bg-transparent hover:bg-secondary/10 transition-colors"
                aria-label="View Source"
              >
                <Github size={14} className="mr-1.5" /> Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="chip bg-transparent hover:bg-secondary/10 transition-colors"
                aria-label="View Live"
              >
                <ExternalLink size={14} className="mr-1.5" /> View
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
