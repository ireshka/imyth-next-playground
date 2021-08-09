import Link from "next/link";
import {
  DocsListElementProps,
  DocsListElementReturns,
} from "./DocsListElement.component.types";
import { TagList } from "../TagList/TagList.component";
import styles from "./DocsListElement.module.css";
import { Date } from "../Date/Date.component";

export const DocsListElement = ({
  metadata,
  id,
}: DocsListElementProps): DocsListElementReturns => {
  const link = `/posts/${encodeURIComponent(id)}`;
  return (
    <li className={styles.wrapper}>
      <div className={styles.header}>
        <Link href={link}>
          <a className={styles.link}>
            <h3 className={styles.title}>{metadata.title}</h3>
          </a>
        </Link>
        <small className={styles.dateWrapper}>
          <Date dateString={metadata.date} />
        </small>
      </div>
      <TagList tags={metadata.tags} />
    </li>
  );
};
