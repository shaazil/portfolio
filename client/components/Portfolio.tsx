import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/site-data";
import { TireSticker } from "./decorative/TelemetryStickers";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-shell relative sticker-zone border-t border-border/50">
      <TireSticker className="absolute right-8 top-32 text-muted-foreground hidden lg:block opacity-20" size={120} />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="md:col-span-6">
            <p className="section-marker mb-6">02 / WORKS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-foreground">
              Selected projects & technical builds.
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              A collection of software engineering projects, from scalable backend systems and machine learning pipelines to polished user interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
