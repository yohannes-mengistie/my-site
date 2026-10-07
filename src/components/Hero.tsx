"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % site.roles.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {site.availability}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            {site.name}
            <span className="mt-3 block text-2xl font-semibold text-primary sm:text-4xl lg:text-5xl">
              {site.roles[roleIndex]}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              See selected work
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary/50"
            >
              Start a conversation
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-primary" aria-label="Email">
              <Mail size={20} />
            </a>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden font-mono text-xs sm:block">{site.location}</span>
          </div>
        </div>

        <aside className="relative">
          <div className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Now</span>
              <span className="text-primary">online</span>
            </div>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Building</dt>
                <dd className="mt-1 text-lg font-display font-semibold">
                  Reliable APIs and product surfaces
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Studying</dt>
                <dd className="mt-1">Computer Engineering · AAU</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Looking for</dt>
                <dd className="mt-1">Teams that care about systems, not just screens</dd>
              </div>
            </dl>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
