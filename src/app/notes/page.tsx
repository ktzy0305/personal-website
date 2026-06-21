import { Module } from "@/types/module";
import { loadModuleData } from "@/lib/dataLoader";
import LinkCard from "@/components/link-card";

export default function Notes() {
  const modules: Module[] = loadModuleData();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <header className="mb-12 animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
          Notes
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Course and Personal Notes
        </h1>
      </header>

      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module: Module) => (
          <li key={module.id}>
            <LinkCard
              href={`/notes/${module.id}`}
              eyebrow={module.code}
              title={module.name}
              description={module.description || "Notes available"}
              descriptionLines={2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
