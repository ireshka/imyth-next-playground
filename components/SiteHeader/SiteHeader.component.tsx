import Image from "next/image";
import {
  SiteHeaderProps,
  SiteHeaderReturns,
} from "./SiteHeader.component.types";
import styles from "./SiteHeader.module.css";

export const SiteHeader = ({
  image,
  title,
}: SiteHeaderProps): SiteHeaderReturns => (
  <header className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Image
        priority
        src={image}
        className={styles.image}
        width={100}
        height={100}
        alt="Iris Flower"
      />
    </div>
    <h1 className={styles.title}>{title}</h1>
  </header>
);
