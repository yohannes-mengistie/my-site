import type { Project } from "@/data/projects";

export default function ProjectCover({ project }: { project: Project }) {
  return (
    <div
      className="relative isolate overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, ${project.accent}33, transparent 55%),
          linear-gradient(160deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative flex min-h-[13rem] flex-col justify-between p-6 sm:min-h-[15rem]">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <p
          className="font-display text-4xl font-extrabold leading-none sm:text-5xl"
          style={{ color: project.accent }}
        >
          {project.title}
        </p>
      </div>
    </div>
  );
}
