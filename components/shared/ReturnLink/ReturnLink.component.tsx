import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { TextLink } from "../TextLink/TextLink.component";
import { ReturnLinkProps, ReturnLinkReturns } from "./ReturnLink.component.types";
import styles from "./ReturnLink.module.css";

export const ReturnLink = ({ text, href }: ReturnLinkProps): ReturnLinkReturns => (
  <span className={styles.wrapper}>
    <Link href={href} passHref>
      <TextLink>
        <FontAwesomeIcon icon={faAngleDoubleLeft} className={styles.icon} /> {text}
      </TextLink>
    </Link>
  </span>
);
