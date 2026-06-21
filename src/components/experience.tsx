import Tag from "./tag";

interface ExperienceProps {
  organization: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
}

export default function ExperienceComponent(props: ExperienceProps) {
  const isPresent = props.end?.toLowerCase() === "present";

  return (
    <article
      className="group relative flex flex-col rounded-xl border border-border/60 bg-card/40 p-5 transition-colors duration-300 hover:border-brand/50 hover:bg-card"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
          {props.start} — {props.end}
        </span>
        {isPresent && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-brand">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand [animation:brand-pulse_2s_ease-in-out_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Now
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
        {props.role}
      </h3>
      <p className="text-sm font-medium text-brand/90">{props.organization}</p>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {props.description}
      </p>

      {props.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {props.tags.map((tag: string) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
