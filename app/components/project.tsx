import Image from "next/image";
import Tag from "./tag";
import { useTheme } from "../contexts/ThemeContext";

interface ProjectProps {
  name: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  tags: string[];
}

export default function ProjectComponent(props: ProjectProps) {
  const { isDarkMode } = useTheme() ?? {};

  return (
    <div className="flex mb-6">
      <a
        href={props.url}
        className={`${
          isDarkMode
            ? "hover:bg-deepblue-200 text-cerulean-600"
            : "hover:bg-sky-50"
        } 
          flex flex-wrap w-full rounded-md py-3 sm:px-3`}
      >
        <div className="sm:w-1/3 flex-shrink-0 flex items-center">
          <Image
            src={props.imageUrl}
            width={props.imageWidth}
            height={props.imageHeight}
            alt={`${props.name} image`}
          />
        </div>
        <div className="flex-grow sm:w-2/3">
          <div className="flex items-center mt-3 sm:mt-0">{props.name}</div>
          <div
            className={`${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            } mt-2 text-sm`}
          >
            {props.description}
          </div>
          <div className="mt-2">
            {props.tags?.length > 0 ? (
              props.tags.map((tag: string) => <Tag key={tag} name={tag} />)
            ) : (
              <></>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
