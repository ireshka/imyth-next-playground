import { TagListResult, TagListProps } from "./TagList.component.types";
import styles from "./TagList.module.css";
import { sortStrings } from "../../../utils";

export const TagList = ({ tags }: TagListProps): TagListResult => {
  const sortedTags = [...tags].sort(sortStrings);

  return (
    <div className={styles.tagWrapper}>
      {sortedTags.map((tag) => (
        <span className={styles.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};
