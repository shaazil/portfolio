import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className,
      )}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
        {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.header>
  );
}
