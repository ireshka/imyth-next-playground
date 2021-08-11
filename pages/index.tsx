import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { TextLink } from "../components/shared/TextLink/TextLink.component";
import { docs, GetDocsMetadataSortedResult } from "../lib/docs";
import { DocsList } from "../components/shared/DocsList/DocsList.component";
import { DocsListElement } from "../components/shared/DocsListElement/DocsListElement.component";
import { SITE_TITLE } from "../constants/siteInfo.constants";
import { Heading } from "../components/shared/Heading/Heading.component";
import styles from "../styles/pages/Home.module.css";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allDocs = await docs.getDocsMetadataSorted({
    field: "date",
    order: "descend",
  });
  return {
    props: {
      allDocs,
    },
  };
};

type Props = {
  allDocs: GetDocsMetadataSortedResult[];
};

export default function Home({ allDocs }: Props): ReactNode {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={styles.introduction}>
        It is a <code>next.js</code> playground about mythological creatures. If
        you want to know more, click and check{" "}
        <Link href="/about" passHref>
          <TextLink underline>About Page</TextLink>
        </Link>
        .
      </section>
      <section>
        <Heading>Posts List</Heading>
        <DocsList>
          {allDocs.map(({ id, metadata }) => (
            <DocsListElement key={id} metadata={metadata} id={id} />
          ))}
        </DocsList>
      </section>
    </>
  );
}
