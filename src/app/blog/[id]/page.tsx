import Date from "@/components/date";
import Link from "next/link";
import { getAllPostIds, getPostData } from "@/lib/posts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import "@/app/blog/styles.css";
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

// Load Language CSS
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

interface PostData {
  title: string;
  date: string;
  contentHtml: string;
}

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return getAllPostIds();
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);

  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-brand"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={14} strokeWidth={2} />
        Back to Blog
      </Link>

      <article className="mt-8">
        <header className="mb-10 border-b border-border pb-8">
          {/* Date */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
            <Date dateString={postData.date} />
          </p>

          {/* Post Title */}
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {postData.title}
          </h1>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <Avatar className="h-10 w-10 overflow-hidden rounded-lg after:rounded-lg">
              <AvatarImage
                src="/images/profile/kevin.jpg"
                alt="Kevin"
                className="rounded-lg object-cover"
              />
              <AvatarFallback className="rounded-lg font-display text-xs">
                KT
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Kevin Toh</span>
          </div>
        </header>

        {/* Post Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </main>
  );
}
