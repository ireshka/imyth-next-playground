import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { TextLink } from "../components/TextLink/TextLink.component";
import { PageLayout } from "../components/PageLayout/PageLayout.component";
import { docs, GetDocsMetadataSortedResult } from "../lib/docs";
import { DocsList } from "../components/DocsList/DocsList.component";
import { DocsListElement } from "../components/DocsListElement/DocsListElement.component";
import { SITE_TITLE } from "../constants/siteInfo.constants";
import { Heading } from "../components/Heading/Heading.component";

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
      <PageLayout home>
        <p>
          It is a <code>next.js</code> playground about mythological creatures.
          If you want to know more, click and check{" "}
          <Link href="/about" passHref>
            <TextLink underline>About Page</TextLink>
          </Link>
          .
        </p>
        <section>
          <Heading>Posts List</Heading>
          <DocsList>
            {allDocs.map(({ id, metadata }) => (
              <DocsListElement key={id} metadata={metadata} id={id} />
            ))}
          </DocsList>
        </section>
      </PageLayout>
    </>
  );
}
