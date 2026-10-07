import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";
import { site } from "@/data/site";

const stats = [
  { label: "Focus", value: "Backend + product" },
  { label: "Base", value: "Addis Ababa" },
  { label: "Mode", value: "Ship, then refine" },
  { label: "Next", value: "Teams with real systems" },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Engineer first. Designer of the boring parts that make products last."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I am {site.name}, a fifth-year Computer Engineering student at Addis Ababa
              University. I like the layer most portfolios skip: APIs, data models, auth,
              and the path from a messy real-world problem to something people can actually
              use.
            </p>
            <p>
              Hardware–software overlap is part of how I think — IoT, automation, and
              backends that sit behind a calm interface. I write for reliability, then
              make the surface feel considered.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-card/70 p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/60 px-3 py-4 text-center"
              >
                <Icon className={`text-2xl ${skill.color ?? ""}`} />
                <span className="text-xs text-muted-foreground">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
