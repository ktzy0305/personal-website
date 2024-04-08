import { useTheme } from '../contexts/ThemeContext';
import Tag from './tag';

interface ExperienceProps {
  organization: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
}

export default function Experience(props: ExperienceProps) {
  const { isDarkMode } = useTheme() ?? {};

  return (
    <div className="flex flex-row flex-wrap mb-12">
      <div className="flex sm:w-1/3">
        <div className="font-medium text-sm text-slate-500 uppercase">
          {props.start} - {props.end}
        </div>
      </div>
      <div className="flex flex-col sm:w-2/3">
        <div>
          {props.role} · {props.organization}
        </div>
        <div
          className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-2 text-sm`}
        >
          {props.description}
        </div>
        <div className="mt-2 flex flex-wrap">
          {props.tags?.length > 0 ? (
            props.tags.map((tag: string) => <Tag key={tag} name={tag} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
