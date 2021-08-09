import { ReactElement, ReactNode, MouseEventHandler } from "react";

export type TextLinkProps = {
  address?: string;
  lightMode?: false;
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  underline?: boolean;
};

export type TextLinkReturns = ReactElement | null;

export type Reference = HTMLAnchorElement;
