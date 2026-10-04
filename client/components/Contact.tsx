import { useState } from "react";
import { LINKS, SITE } from "@/lib/site-data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mohammadshazil.am@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-14 border-t border-border relative">
      <div className="absolute w-[80px] right-6 top-11 -rotate-[9deg] hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 84 84">
          <rect x="3" y="3" width="78" height="78" rx="20" fill="currentColor" className="text-foreground" />
          <rect x="9" y="9" width="66" height="66" rx="14" fill="currentColor" className="text-background" />
          <text x="42" y="50" textAnchor="middle" fontSize="24" fontWeight="700" fill="#FF7A1A" fontFamily="DM Mono,monospace">&lt;/&gt;</text>
        </svg>
      </div>

      <div className="max-w-[1040px] mx-auto px-5 w-full">
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] font-bold mb-[22px] text-foreground">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-card border border-border rounded-[10px] p-[22px_26px]" style={{ backgroundImage: "radial-gradient(circle at 12px 12px, hsl(var(--border)) 0 3px, transparent 4px), radial-gradient(circle at calc(100% - 12px) 12px, hsl(var(--border)) 0 3px, transparent 4px), radial-gradient(circle at 12px calc(100% - 12px), hsl(var(--border)) 0 3px, transparent 4px), radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), hsl(var(--border)) 0 3px, transparent 4px)" }}>
            <p className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground m-0 mb-[14px]">Driver details</p>
            <dl className="grid grid-cols-[84px_1fr] m-0">
              <dt className="m-0 py-3 border-t border-dashed border-border text-muted-foreground text-[13px]">Name</dt>
              <dd className="m-0 py-3 border-t border-dashed border-border text-foreground text-[14px]">Mohammad Shazil A M</dd>
              
              <dt className="m-0 py-3 border-t border-dashed border-border text-muted-foreground text-[13px]">Focus</dt>
              <dd className="m-0 py-3 border-t border-dashed border-border text-foreground text-[14px]">Cloud and DevOps, full-stack development</dd>
              
              <dt className="m-0 py-3 border-t border-dashed border-border text-muted-foreground text-[13px]">Status</dt>
              <dd className="m-0 py-3 border-t border-dashed border-border text-muted-foreground text-[14px] flex items-center gap-2">
                Open to collaboration
              </dd>
              
              <dt className="m-0 py-3 border-t border-dashed border-border text-muted-foreground text-[13px]">Location</dt>
              <dd className="m-0 py-3 border-t border-dashed border-border text-foreground text-[14px]">IIIT Sri City, India</dd>
            </dl>
          </div>

          <div className="bg-card border border-border rounded-[10px] p-[18px]">
            <p className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground m-0 mb-[14px]">Email</p>
            <a 
              href="mailto:mohammadshazil.am@gmail.com" 
              className="inline-block font-display text-[clamp(18px,2.6vw,26px)] leading-[1.3] font-bold text-foreground break-all border-b-[3px] border-primary hover:opacity-80 transition-opacity"
            >
              mohammadshazil.am@gmail.com
            </a>
            
            <p className="text-muted-foreground mt-[14px] mb-[18px] text-[14px] leading-[1.65]">
              Best for project ideas and collaborations. I read every message.
            </p>
            
            <div className="flex flex-wrap gap-[10px] my-[18px]">
              <a 
                href="mailto:mohammadshazil.am@gmail.com"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-[18px] py-[12px] rounded-[6px] no-underline font-medium border-b-4 border-black/20 text-[16px]"
              >
                Send an email
              </a>
              <button 
                type="button" 
                onClick={copyEmail}
                className="inline-flex items-center justify-center bg-accent text-accent-foreground px-[16px] py-[10px] rounded-[6px] border border-border border-b-4 text-[14px] cursor-pointer hover:bg-accent/80 transition-colors"
              >
                {copied ? "Copied" : "Copy email"}
              </button>
              <a 
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground px-[16px] py-[10px] rounded-[6px] border border-border border-b-4 text-[14px] no-underline cursor-pointer hover:bg-accent/80 transition-colors"
              >
                View resume
              </a>
            </div>
            
            <p className="flex gap-[18px] m-0 text-[13px]">
              <a href={LINKS.github} className="text-foreground hover:opacity-80 border-b-2 border-primary transition-colors">GitHub</a>
              <a href={LINKS.linkedin} className="text-foreground hover:opacity-80 border-b-2 border-primary transition-colors">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
