import { SiteFooterProps, SiteFooterReturns } from "./SiteFooter.component.types";
import { TextLink } from "../../shared/TextLink/TextLink.component";
import styles from "./SiteFooter.module.css";

export const SiteFooter = ({
  authorName,
  authorGithubProfileLink,
}: SiteFooterProps): SiteFooterReturns => (
  <footer className={styles.wrapper}>
    <span>
      Created by <TextLink address={authorGithubProfileLink}>{authorName}</TextLink>
    </span>
  </footer>
);
