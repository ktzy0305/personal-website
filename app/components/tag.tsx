interface TagProps {
  name: string;
}

export default function Tag(props: TagProps) {
  return (
    <span className="relative z-10 rounded-full px-3 py-1.5 my-1 me-2 bg-cerulean-100 font-medium text-cerulean-600 text-xs">
      {props.name}
    </span>
  );
}
