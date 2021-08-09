import { ReactNode, ReactElement } from "react";

export type SiteLayoutProps = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

export type SiteLayoutReturns = JSX.Element | null;
