import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  if (!dateString) {
    return <time>Unknown date</time>;
  }
  
  const date = parseISO(dateString);
  
  if (isNaN(date.getTime())) {
    return <time>Invalid date</time>;
  
  }
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
