import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import { Module } from "../@types/module";
import { loadModuleData } from "@/lib/dataLoader";

export default function Notes(){

  const modules: Module[] = loadModuleData();

  return (
    <div className="min-h-screen px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 lg:-mt-24 lg:pt-32">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingXl} px-3`}>
          Kevin&apos;s NUS Notes Collection
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module: Module) => (
            <div key={module.id} className="rounded-2xl shadow-lg p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{module.code}: {module.name}</h3>
                <p className="text-gray-500 text-base mb-4">{module.description || "Notes available"}</p>
              </div>
              <Link
                href={`/notes/${module.id}`}
                className="inline-block mt-auto px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
              >
                View Collection
              </Link>
            </div>
          ))}
        </div>
        {/* <ul className={utilStyles.list}>
          {modules.map((module: Module) => 
            <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
              <Link href={`/notes/${module.id}`} className={utilStyles.headingLg}>
                {module.code}: {module.name}
              </Link>
              <p className={utilStyles.descriptionText}>Notes</p>
            </li>
          )} */}
          {/* <li className={`${utilStyles.listItem} hover:bg-sky-50 hover:text-neutral-500 p-3 rounded-md`}>
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
          </li> */}
        {/* </ul> */}
      </section>
    </div>
  );
}