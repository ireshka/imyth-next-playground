import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { docs, GetDocsMetadataSortedResult } from "../lib/docs";
import { DocsList } from "../components/shared/DocsList/DocsList.component";
import { DocsListElement } from "../components/shared/DocsListElement/DocsListElement.component";
import { SITE_TITLE } from "../constants/siteInfo.constants";
import { Heading } from "../components/shared/Heading/Heading.component";
import { Introduction } from "../components/HomePage/Introduction/Introduction.component";

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
      <Introduction />
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
