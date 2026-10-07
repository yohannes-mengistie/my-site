export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
        {index} — {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
