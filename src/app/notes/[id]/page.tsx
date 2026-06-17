import fs from "fs";
import path from "path";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import LinkCard from "@/components/link-card";
import SectionLabel from "@/components/section-label";
import { loadModuleData } from "@/lib/dataLoader";

export async function generateStaticParams() {
  const docsRoot = path.join(process.cwd(), "public", "docs");
  const moduleDirs = fs.readdirSync(docsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());
  return moduleDirs.map((dir) => ({
    id: dir.name,
  }));
}

function getModuleDirs(moduleId: string) {
  const docsDir = path.join(process.cwd(), "public", "docs", moduleId);
  if (!fs.existsSync(docsDir) || !fs.statSync(docsDir).isDirectory()) return [];
  return fs
    .readdirSync(docsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((dir) => ({
      name: dir.name,
      files: fs
        .readdirSync(path.join(docsDir, dir.name))
        .filter((f) => !f.startsWith(".")),
    }));
}

function fileMeta(file: string) {
  const dot = file.lastIndexOf(".");
  if (dot <= 0) {
    return { name: file, ext: "FILE" };
  }
  return { name: file.slice(0, dot), ext: file.slice(dot + 1).toUpperCase() };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const subdirs = getModuleDirs(id);
  const moduleInfo = loadModuleData().find((m) => m.id === id);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="animate-fade-up">
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-brand"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={14} strokeWidth={2} />
          Back to Notes
        </Link>

        <header className="mt-6 mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
            {moduleInfo?.code ?? id.toUpperCase()}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {moduleInfo?.name ?? "Resources"}
          </h1>
        </header>
      </div>

      {subdirs.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No resources found for this module.
        </p>
      )}

      <div className="flex flex-col gap-16">
        {subdirs.map((dir, i) => (
          <section key={dir.name}>
            <SectionLabel index={String(i + 1).padStart(2, "0")}>
              {dir.name}
            </SectionLabel>

            {dir.files.length === 0 ? (
              <p className="text-sm text-muted-foreground">No files.</p>
            ) : (
              <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {dir.files.map((file) => {
                  const { name, ext } = fileMeta(file);
                  return (
                    <li key={file}>
                      <LinkCard
                        href={`/docs/${id}/${dir.name}/${file}`}
                        eyebrow={ext}
                        title={name}
                        external
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
