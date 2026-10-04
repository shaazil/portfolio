import { motion } from "framer-motion";
import { SITE, LINKS } from "@/lib/site-data";
import { AeroSticker } from "./decorative/TelemetryStickers";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-6 border-b border-border">
      <div className="max-w-[1040px] mx-auto px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 items-center pt-12 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-display text-[clamp(40px,7vw,76px)] tracking-[-0.02em] font-bold leading-[1.05] mt-3.5 mb-0 text-foreground">
              Mohammad Shazil A M
            </h1>
            <p className="text-[clamp(17px,2.4vw,22px)] my-[18px] mb-1.5 font-mono text-foreground">
              Good things take a <u className="no-underline border-b-[3px] border-primary">little throttle.</u>
            </p>
            <p className="text-muted-foreground max-w-[44ch] mb-[18px] font-mono leading-[1.65]">
              3rd year CSE student. I build things I'd want to use, and I care how they feel in the hand.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-block bg-primary text-primary-foreground px-[18px] py-[12px] rounded-[6px] no-underline font-medium border-b-4 border-black/20 font-mono text-[16px]"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center relative w-[min(100%,300px)] justify-self-center order-first md:order-last"
          >
            <div className="relative w-full aspect-[4/5] border-2 border-foreground rounded-[10px] bg-card flex items-center justify-center overflow-hidden text-center text-muted-foreground text-[13px]">
              <img
                src="/my-photo.png"
                alt="Mohammad Shazil A M"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute left-3 -bottom-3 bg-primary text-primary-foreground font-mono text-[12px] px-[10px] py-[5px] rounded-[4px] z-10">
              SHAZIL · CSE-3
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
