import { ReactNode } from "react";
import { GetOneDocResult } from "../../lib/docs";

export type PageLayoutProps = {
  children?: ReactNode;
  home?: boolean;
  title?: string;
  postData?: GetOneDocResult;
};

export type PageLayoutReturns = null | JSX.Element;
