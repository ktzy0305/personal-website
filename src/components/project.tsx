import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import Tag from "./tag";

interface ProjectProps {
  name: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  tags: string[];
}

export default function ProjectComponent(props: ProjectProps) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-colors duration-300 hover:border-brand/50 hover:bg-card"
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-border/60 bg-muted/40">
        <Image
          src={props.imageUrl}
          width={props.imageWidth}
          height={props.imageHeight}
          alt={`${props.name}`}
          className="max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-snug">
            {props.name}
          </h3>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
          />
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {props.description}
        </p>

        {props.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {props.tags.map((tag: string) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
