import { parseISO, format } from "date-fns";
import { DateProps, DateResult } from "./Date.components.types";
import { DATE_DISPLAY_FORMAT } from "../../../constants/docs.constants";

export const Date = ({ dateString, className }: DateProps): DateResult => {
  const date = parseISO(dateString);
  const formattedDate = format(date, DATE_DISPLAY_FORMAT);

  const dateClass = className;

  return (
    <span className={dateClass}>
      <time dateTime={dateString}>{formattedDate}</time>
    </span>
  );
};
