import { ContentBodyProps, ContentBodyReturn } from "./ContentBody.component.types";
import styles from "./ContentBody.module.css";

export const ContentBody = ({ children }: ContentBodyProps): ContentBodyReturn => (
  <div className={styles.wrapper}>{children} </div>
);
