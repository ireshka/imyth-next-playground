import Link from "next/link";
import {
  DocsListElementProps,
  DocsListElementReturns,
} from "./DocsListElement.component.types";
import { TagList } from "../TagList/TagList.component";
import styles from "./DocsListElement.module.css";
import { Date } from "../Date/Date.component";
import { Heading } from "../Heading/Heading.component";

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
            <Heading as="h3" className={styles.heading}>
              {metadata.title}
            </Heading>
          </a>
        </Link>
        <small>
          <Date dateString={metadata.date} className={styles.dateWrapper} />
        </small>
      </div>
      <TagList tags={metadata.tags} />
    </li>
  );
};
