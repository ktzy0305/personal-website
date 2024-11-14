import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

export default function Notes(){
  return (
    <div className="min-h-screen px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 lg:-mt-24 lg:pt-32">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingXl} px-3`}>
          Kevin's NUS Notes Collection
        </h2>
        <ul className={utilStyles.list}>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
            <Link href={``} className={utilStyles.headingLg}>
              CS2100: Computer Organization
            </Link>
            <p className={utilStyles.descriptionText}>Notes</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
            <Link href={``} className={utilStyles.headingLg}>
              CS2102: Database Systems
            </Link>
            <p className={utilStyles.descriptionText}>Cheatsheet</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
            <Link href={``} className={utilStyles.headingLg}>
              CS2103/T: Software Engineering
            </Link>
            <p className={utilStyles.descriptionText}>Notes</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
            <Link href={``} className={utilStyles.headingLg}>
              CS2106: Operating Systems
            </Link>
            <p className={utilStyles.descriptionText}>Notes</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
              <Link href={``} className={utilStyles.headingLg}>
                CS2109S: Introduction to AI and Machine Learning
              </Link>
              <p className={utilStyles.descriptionText}>Cheatsheet</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
              <Link href={``} className={utilStyles.headingLg}>
                CS3213: Foundations of Software Engineering
              </Link>
              <p className={utilStyles.descriptionText}>Notes</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
              <Link href={``} className={utilStyles.headingLg}>
                CS3230: Design and Analysis of Algorithms
              </Link>
              <p className={utilStyles.descriptionText}>Notes</p>
          </li>
          <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
              <Link href={``} className={utilStyles.headingLg}>
                CS4211: Formal Verification for Software Engineering
              </Link>
              <p className={utilStyles.descriptionText}>Notes and Cheatsheets</p>
          </li>
        </ul>
      </section>
    </div>
  );
}