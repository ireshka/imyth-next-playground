import { ReactNode, ReactElement } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  className?: string;
};

export type HeadingReturns = ReactElement;
