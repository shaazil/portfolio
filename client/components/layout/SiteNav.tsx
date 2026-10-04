import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/site-data";
import { useTheme } from "@/components/ThemeProvider";

export default function SiteNav() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-colors duration-300">
      <div className="mx-auto flex max-w-[1040px] items-center justify-between gap-3 py-2.5 px-5">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-[28px] font-bold tracking-tight text-foreground"
        >
          Shazil
        </button>

        <nav aria-label="Sections" className="flex flex-1 max-w-[460px] gap-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={cn(
                "flex-1 text-center font-mono text-[13px] px-1 py-[9px] rounded-md border border-border border-b-4 transition-transform active:translate-y-[2px] active:border-b-2",
                activeSection === item.id
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "bg-accent text-accent-foreground hover:bg-accent/80",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="font-mono text-[13px] bg-transparent text-foreground border border-border rounded-md px-2.5 py-[9px] whitespace-nowrap cursor-pointer hover:bg-accent transition-colors"
        >
          {theme === 'dark' ? 'Day' : 'Night'}
        </button>
      </div>
    </header>
  );
}
