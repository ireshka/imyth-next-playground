import { parseISO, format } from "date-fns";
import { DateProps, DateResult } from "./Date.components.types";
import { DATE_DISPLAY_FORMAT } from "../../constants/docs.constants";

export const Date = ({ dateString }: DateProps): DateResult => {
  const date = parseISO(dateString);
  const formattedDate = format(date, DATE_DISPLAY_FORMAT);
  return <time dateTime={dateString}>{formattedDate}</time>;
};
