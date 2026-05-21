import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TYPING_ROLES = [
  "AI Engineer",
  "Full Stack Developer",
  "Creative Technologist",
] as const;

function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length - 1)),
        38,
      );
    } else {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length + 1)),
        72,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <p
      className="mt-3 font-['Syne',sans-serif] text-xs font-bold tracking-wide text-white md:text-[0.8125rem]"
      aria-live="polite"
    >
      {text}
      <span className="ml-px text-white">|</span>
    </p>
  );
}

const GITHUB_URL = "https://github.com/shaazil";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammadshazil/";
const MAIL_URL = "mailto:mohammadshazil.am@gmail.com";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
] as const;

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToAbout = () => scrollToSection("about");

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#000000]"
    >
      {/* Layer 2 — Massive background typography — sits BEHIND photo */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4"
        aria-hidden
      >
        <h1
          className="whitespace-nowrap text-center font-black uppercase text-white select-none leading-none"
          style={{
            fontSize: "clamp(80px, 22vw, 280px)",
            letterSpacing: "0.13em",
          }}
        >
          SHAZIL
        </h1>
      </div>

      {/* Layer 3 — Subtle dark vignette at bottom so text is readable */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[25]"
        style={{
          height: "45%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Layer 4 — Portrait: zoomed up, bleeding to all edges */}
      <img
        src="/my-photo.png"
        alt="Mohammad Shazil"
        className="absolute left-1/2 z-20 pointer-events-none"
        style={{
          height: "93vh",
          width: "auto",
          maxWidth: "none",
          bottom: "-2vh", // slight bleed past bottom
          transform: "translateX(-50%)",
          objectFit: "contain",
          objectPosition: "top",
          filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
        }}
        loading="eager"
        decoding="async"
      />

      {/* Top bar — logo & menu */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-8 md:px-12 md:py-10">
        <span className="font-['Rubik',sans-serif] text-xs font-medium uppercase tracking-[0.2em] text-white md:text-sm">
          MOHAMMAD SHAZIL AM
        </span>

        {/* Hamburger + compact dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex flex-col items-end gap-[5px] p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                "h-px w-7 bg-white transition-all duration-300 md:w-8",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-7 bg-white transition-all duration-300 md:w-8",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>

          {/* Compact dropdown panel */}
          <nav
            aria-label="Site navigation"
            className={cn(
              "absolute right-0 top-full mt-2 transition-all duration-300 ease-in-out",
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none",
            )}
          >
            <div className="rounded-sm border border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 flex flex-col items-end gap-3 min-w-[120px]">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="font-['Rubik',sans-serif] text-xs uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Bottom left — intro & social icons (above vignette) */}
      <div className="absolute bottom-20 left-6 z-30 max-w-[280px] sm:max-w-sm md:bottom-24 md:left-12 md:max-w-md lg:max-w-lg">
        <p className="font-['Rubik',sans-serif] text-sm leading-[1.7] tracking-[0.02em] text-white md:text-[0.9375rem] md:leading-[1.75]">
          Building modern digital experiences through
          <br />
          AI, full-stack development, and thoughtful design.
        </p>

        <TypingRoles />

        {/* Social icon row */}
        <div className="mt-6 flex items-center gap-5">
          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/40 transition-colors duration-500 ease-out hover:text-white/85"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 transition-colors duration-500 ease-out hover:text-white/85"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Mail */}
          <a
            href={MAIL_URL}
            aria-label="Email"
            className="text-white/40 transition-colors duration-500 ease-out hover:text-white/85"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom center — scroll indicator */}
      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll to about section"
      >
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/50">
          <span className="mt-2 h-1.5 w-1.5 animate-scroll-dot rounded-full bg-white" />
        </span>
      </button>

      {/* Cinematic grain — static, very low opacity */}
      <div className="hero-grain" aria-hidden />
    </section>
  );
}
