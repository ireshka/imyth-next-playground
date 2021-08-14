import Link from "next/link";
import { IntroductionReturns } from "./Introduction.component.types";
import { TextLink } from "../../../shared/TextLink/TextLink.component";
import { Heading } from "../../../shared/Heading/Heading.component";
import styles from "./Introduction.module.css";
import { ContentLayout } from "../../../ContentLayout/ContentLayout.component";

const Header = () => <Heading>Typescript & myths</Heading>;

const Main = () => (
  <p className={styles.introduction}>
    It is a <code>next.js</code> playground about mythological creatures. If you
    want to know more, click and check{" "}
    <Link href="/about" passHref>
      <TextLink underline>About Page</TextLink>
    </Link>
    .
  </p>
);

export const Introduction = (): IntroductionReturns => (
  <ContentLayout header={<Header />} main={<Main />} noReturnHome />
);
