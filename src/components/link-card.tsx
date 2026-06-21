import Link from "next/link";
import { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

interface LinkCardProps {
  href: string;
  /** Small mono metadata shown above the title (e.g. a date or module code). */
  eyebrow: ReactNode;
  title: string;
  description?: string;
  /** How many lines of description to show before truncating. */
  descriptionLines?: 2 | 3;
  /** Render as a plain anchor opening in a new tab (e.g. a static file). */
  external?: boolean;
}

export default function LinkCard({
  href,
  eyebrow,
  title,
  description,
  descriptionLines = 3,
  external = false,
}: LinkCardProps) {
  const className =
    "group relative flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-5 transition-colors duration-300 hover:border-brand/50 hover:bg-card";

  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={18}
          strokeWidth={2}
          className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
        />
      </div>

      <h2 className="mt-3 font-display text-lg font-semibold leading-snug break-words">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
            descriptionLines === 2 ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
