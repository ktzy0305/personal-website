import Date from "@/app/components/date";
import { getPostData } from "@/lib/posts";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import utilStyles from "@/styles/utils.module.css";
import "@/app/blog/styles.css";

interface PostData {
  title: string,
  date: string,
  contentHtml: string,
}

type Params = {
  id: string
}

type Props = {
  params: Params
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  }
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <div className="min-h-screen px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 lg:-mt-20 lg:pt-32">
      {/* Back to Blog Link */}
      <Link href="/blog">
        <div className="flex flex-row mr-auto w-48 rounded-lg py-3 px-3 content-center hover:bg-white hover:text-black">
          <FaArrowLeft className="mr-3 w-6 h-6" />
          <span>Back to Blog</span>
        </div>
      </Link>
      <article className="px-3 py-6">
        {/* Post Title */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        {/* Author and Date  */}
        <div className="flex flex-row mb-3">
          <Image
            priority
            className='rounded-full mr-4'
            src="/images/profile/kevin.jpg"
            height={64}
            width={64}
            alt={"Kevin"}
          />
          <div className="flex flex-col my-auto">
            {/* Post Author */}
            <div>Kevin Toh</div>
            {/* Post Date */}
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  );
}
