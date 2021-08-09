import {
  DocContentProps,
  DocContentReturn,
} from "./DocContent.component.types";
import styles from "./DocContent.module.css";

export const DocContent = ({ children }: DocContentProps): DocContentReturn => (
  <div className={styles.wrapper}>{children}</div>
);
