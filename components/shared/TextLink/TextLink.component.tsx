import { forwardRef } from "react";
import { Reference, TextLinkProps } from "./TextLink.component.types";
import styles from "./TextLink.module.css";

// https://github.com/vercel/next.js/issues/9784

const TextLink = forwardRef<Reference, TextLinkProps>(
  ({ address, href, onClick, children, lightMode, underline = false }, ref) => {
    const colorMode = lightMode ? "linkLight" : "linkDark";
    return (
      <a
        {...(address ? { href: address } : { href })}
        ref={ref}
        className={`${styles[colorMode]} ${underline ? styles.underline : ""}`}
        {...(onClick ? { onClick } : {})}
      >
        {children}
      </a>
    );
  }
);

TextLink.displayName = "TextLink";

export { TextLink };
