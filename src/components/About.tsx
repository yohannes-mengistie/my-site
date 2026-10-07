import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";
import { site } from "@/data/site";

const stats = [
  { label: "Degree", value: "Comp. Engineering · AAU" },
  { label: "GPA", value: "3.93 / 4.0" },
  { label: "Program", value: "A2SV · Flutter & CP" },
  { label: "Ubuntu", value: "3+ years daily use" },
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
              I am {site.name}, a Computer Engineering graduate from Addis Ababa
              University (GPA 3.93/4.0) with a strong foundation in algorithms, data
              structures, and mobile development. I completed a one-year intensive
              software engineering program at A2SV (Africa to Silicon Valley), focused
              on Android development with Flutter alongside competitive programming and
              rigorous problem-solving.
            </p>
            <p>
              I build scalable mobile applications on MVVM architecture and RESTful
              APIs. I bring over three years of daily hands-on Ubuntu experience
              across local hosting, server management, and fullstack deployment. I
              decompose complex problems, write clean and well-tested code,
              troubleshoot independently in Linux environments, and communicate
              technical reasoning clearly in writing.
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
