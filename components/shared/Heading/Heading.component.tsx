import cx from "classnames";
import { HeadingProps, HeadingReturns } from "./Heading.component.types";
import styles from "./Heading.module.css";

const defaultProps = {
  as: "h2",
};

export const Heading = (props: HeadingProps): HeadingReturns => {
  const { className, as, children } = { ...defaultProps, ...props };
  const CustomHeadingElement = as as keyof JSX.IntrinsicElements;
  const { default: defaultClass } = styles;
  const headingClasses = cx(defaultClass, className);
  return (
    <CustomHeadingElement className={headingClasses}>
      {children}
    </CustomHeadingElement>
  );
};
