import { SiteLayoutProps, SiteLayoutReturns } from "./SiteLayout.component.types";
import styles from "./SiteLayout.module.css";

export const SiteLayout = ({ children, footer, header }: SiteLayoutProps): SiteLayoutReturns => (
  <div className={styles.wrapper}>
    {header}
    <main className={styles.main}>{children}</main>
    {footer}
  </div>
);
