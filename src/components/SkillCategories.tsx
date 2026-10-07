import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function SkillCategories() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title="Tools I actually reach for"
          description="Grouped by how I work — not fake percentage bars. Depth lives in the projects."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-border bg-card/70 p-6"
            >
              <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                    >
                      <Icon className={`text-xs ${item.color ?? ""}`} />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
