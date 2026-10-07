import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-bold">{site.shortName}</p>
            <p className="mt-3 text-sm text-muted-foreground">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                On this page
              </p>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Connect
              </p>
              <div className="flex gap-4">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${site.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. Designed as a product, not a template.
          </p>
        </div>
      </div>
    </footer>
  );
}
