import Link from "next/link";
import Date from "../components/date";
import utilStyles from "@/styles/utils.module.css"
import { getSortedPostsData } from '@/lib/posts';

type AllPostsData = {
  date: string
  title: string
  description: string
  id: string
}[]

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 lg:-mt-24 lg:pt-32">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingXl} px-3`}>What&apos;s on Kevin&apos;s mind?</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={`${utilStyles.listItem} hover:bg-deepblue-200 hover:text-cerulean-600 p-3 rounded-md`} key={id}>
              <Link href={`/blog/${id}`} className={utilStyles.headingLg}>{title}</Link>
              <p className={utilStyles.descriptionText}>{ description }</p>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}