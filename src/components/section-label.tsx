import { ReactNode } from "react";

interface SectionLabelProps {
  index?: string;
  children: ReactNode;
}

export default function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      {index && <span className="font-mono text-xs text-brand">{index}</span>}
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
