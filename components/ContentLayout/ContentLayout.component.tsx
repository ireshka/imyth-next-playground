import { ReturnLink } from "../shared/ReturnLink/ReturnLink.component";
import { ContentLayoutProps, ContentLayoutReturns } from "./ContentLayout.component.types";
import styles from "./ContentLayout.module.css";

export const ContentLayout = ({
  header,
  main,
  footer,
  noReturnHome = false,
}: ContentLayoutProps): ContentLayoutReturns => (
  <>
    <article className={styles.wrapper}>
      <header className={styles.header}>{header}</header>
      <main>{main}</main>
      {footer && <footer>{footer}</footer>}
    </article>
    {!noReturnHome && (
      <div className={styles.returnWrapper}>
        <ReturnLink href="/" text="To Home" />
      </div>
    )}
  </>
);
