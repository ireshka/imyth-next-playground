import { TagListResult, TagListProps } from "./TagList.component.types";
import styles from "./TagList.module.css";

export const TagList = ({ tags }: TagListProps): TagListResult => (
  <div className={styles.tagWrapper}>
    {tags.map((tag) => (
      <span className={styles.tag} key={tag}>
        {tag}
      </span>
    ))}
  </div>
);
