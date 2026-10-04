import { LINKS, NAV_ITEMS, SITE } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-lg font-semibold">{SITE.name}</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              {SITE.title} · {SITE.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 flex items-center justify-center"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 flex items-center justify-center"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 flex items-center justify-center"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 flex items-center justify-center"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {year} {SITE.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
