import {
  DocContentProps,
  DocContentReturn,
} from "./DocContent.component.types";
import styles from "./DocContent.module.css";

export const DocContent = ({ children }: DocContentProps): DocContentReturn => (
  <main className={styles.wrapper}>{children} </main>
);
