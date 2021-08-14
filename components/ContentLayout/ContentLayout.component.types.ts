import { ReactElement } from "react";

export type ContentLayoutProps = {
  header: ReactElement;
  main: ReactElement;
  footer?: ReactElement | null;
  noReturnHome?: boolean;
};

export type ContentLayoutReturns = ReactElement;
