"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import ProjectCover from "@/components/ProjectCover";
import SectionHeading from "@/components/SectionHeading";
import { projectCategories, projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="work" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Projects with a point of view"
          description="Filter by surface. Open a project for the story, stack, and links — not just a screenshot dump."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((project, index) => (
            <article
              key={project.slug}
              className={cn(
                "group overflow-hidden rounded-[1.75rem] border border-border bg-card/80 transition hover:-translate-y-1 hover:border-primary/40",
                project.featured && index === 0 ? "md:col-span-2" : ""
              )}
            >
              <button
                type="button"
                className="block w-full text-left"
                onClick={() => setActive(project)}
              >
                <ProjectCover project={project} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.summary}</p>
                    </div>
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-border bg-background p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  {active.category} · {active.year}
                </p>
                <h3 id="project-dialog-title" className="mt-2 font-display text-3xl font-bold">
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border"
                aria-label="Close project details"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-muted-foreground">{active.description}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {active.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {active.liveUrl ? (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Live site
                  <ArrowUpRight size={14} />
                </a>
              ) : null}
              {active.githubUrl ? (
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
                >
                  <Github size={14} />
                  Source
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
