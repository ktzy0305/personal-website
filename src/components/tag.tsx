interface TagProps {
  name: string;
}

export default function Tag(props: TagProps) {
  return (
    <span className="rounded-md border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground transition-colors group-hover:border-border">
      {props.name}
    </span>
  );
}
