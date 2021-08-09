import {
  SourceLinksProps,
  SourceLinksResult,
} from "./SourceLinks.component.types";
import styles from "./SourceLinks.module.css";
import { TextLink } from "../TextLink/TextLink.component";

export const SourceLinks = ({
  sourceLinks,
}: SourceLinksProps): SourceLinksResult => {
  const links = sourceLinks.map((element) => (
    <TextLink key={element.description} address={element.link} underline>
      {element.description}
    </TextLink>
  ));
  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}>Source:</span> {links}
    </div>
  );
};
