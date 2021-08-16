import { PostHeaderProps, PostHeaderReturns } from "./PostHeader.component.types";
import { Heading } from "../../shared/Heading/Heading.component";
import { TagList } from "../../shared/TagList/TagList.component";
import { Date } from "../../shared/Date/Date.component";
import styles from "./PostHeader.module.css";

export const PostHeader = ({ metadata }: PostHeaderProps): PostHeaderReturns => {
  const { date, tags, title } = metadata;

  return (
    <>
      <div className={styles.titleWrapper}>
        <Heading className={styles.title}>{title}</Heading>
        <TagList tags={tags} />
      </div>

      <div>
        <Date dateString={date} className={styles.date} />
      </div>
    </>
  );
};
