import Image from "next/image"
import Tag from "./tag"

interface ProjectProps {
  name: string,
  description: string,
  imageUrl: string,
  imageWidth: number,
  imageHeight: number,
  url: string,
  tags: string[],
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex mb-6">
      <a href={props.url} className="flex flex-wrap w-full hover:bg-deepblue-200 hover:text-cerulean-600 rounded-md py-3 sm:px-3">
        <div className="sm:w-1/3 flex-shrink-0 flex items-center">
          <Image
            src={props.imageUrl}
            width={props.imageWidth}
            height={props.imageHeight}
            alt={`${props.name} image`}
          />
        </div>
        <div className="flex-grow sm:w-2/3">
          <div className="flex items-center mt-3 sm:mt-0">
            {props.name}
          </div>
          <div className="mt-2 text-sm text-slate-400">
            {props.description}
          </div>
          <div className="mt-2">
          {
            (props.tags?.length > 0) ? props.tags.map((tag: string) => <Tag name={tag}/>) : <></>
          }
          </div>
        </div>
      </a>
    </div>
  )
}