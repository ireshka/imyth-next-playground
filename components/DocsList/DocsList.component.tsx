import styles from "./DocsList.module.css";
import { DocsListProps, DocsListReturns } from "./DocsList.component.types";

export const DocsList = ({ children }: DocsListProps): DocsListReturns => (
  <ul className={styles.wrapper}>{children}</ul>
);
