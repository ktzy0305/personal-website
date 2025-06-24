import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const docsRoot = path.join(process.cwd(), "public", "docs");
  const moduleDirs = fs.readdirSync(docsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());
  return moduleDirs.map((dir) => ({
    id: dir.name,
  }));
}

function getModuleDirs(moduleId: string) {
  const docsDir = path.join(process.cwd(), "public", "docs", moduleId);
  if (!fs.existsSync(docsDir)) return [];
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

export default async function ModulePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const subdirs = getModuleDirs(id);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6"><span className="uppercase">{ id }</span> Resources</h1>
      {subdirs.length === 0 && <p>No resources found for this module.</p>}
      {subdirs.map((dir) => (
        <section key={dir.name} className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 capitalize">{dir.name}</h2>
          <ul className="list-disc ml-6">
            {dir.files.length === 0 ? (
              <li>No files.</li>
            ) : (
              dir.files.map((file) => (
                <li key={file}>
                  <a
                    href={`/docs/${id}/${dir.name}/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    {file}
                  </a>
                </li>
              ))
            )}
          </ul>
        </section>
      ))}
    </div>
  );
}