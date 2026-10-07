import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Path"
          title="Where the work comes from"
          description="Not a padded resume. The through-line is school, shipped systems, and a bias for backends that hold."
        />
        <ol className="relative space-y-0 border-l border-border pl-8">
          {experience.map((item) => (
            <li key={item.title} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              <p className="mt-3 max-w-2xl text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
