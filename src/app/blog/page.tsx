import Date from "@/components/date";
import LinkCard from "@/components/link-card";
import { getSortedPostsData } from "@/lib/posts";

type AllPostsData = {
  date: string;
  title: string;
  description: string;
  id: string;
}[];

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <header className="mb-12 animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
          Blog
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What&apos;s on Kevin&apos;s mind?
        </h1>
      </header>

      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
        {allPostsData.map(({ id, date, title, description }) => (
          <li key={id}>
            <LinkCard
              href={`/blog/${id}`}
              eyebrow={<Date dateString={date} />}
              title={title}
              description={description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
