interface SectionTitleProps {
  title: string;
  tagline?: string;
  /** Applied to the heading so the parent section can reference it via aria-labelledby */
  headingId?: string;
}

/** Shared centered section heading + supporting tagline, per the Design System's heading pattern. */
export default function SectionTitle({ title, tagline, headingId }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2
        id={headingId}
        className="font-heading text-3xl font-bold uppercase tracking-wide text-espresso sm:text-4xl"
      >
        {title}
      </h2>
      {tagline && (
        <p className="mt-3 font-body text-base text-espresso/70">{tagline}</p>
      )}
    </div>
  );
}
