import Image from "next/image";
import Link from "next/link";
import { SiteHeaderProps, SiteHeaderReturns } from "./SiteHeader.component.types";
import { Heading } from "../../shared/Heading/Heading.component";
import styles from "./SiteHeader.module.css";

export const SiteHeader = ({ image, title }: SiteHeaderProps): SiteHeaderReturns => (
  <header className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Link href="/">
        <a>
          <Image
            priority
            src={image}
            className={styles.image}
            width={100}
            height={100}
            alt="Iris Flower"
          />
        </a>
      </Link>
    </div>
    <Heading as="h1" className={styles.title}>
      {title}
    </Heading>
  </header>
);
