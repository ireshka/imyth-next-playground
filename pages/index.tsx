import { GetStaticProps } from "next";

import { ReactNode } from "react";
import { docs, GetDocsMetadataSortedResult } from "../lib/docs";
import { DocsList } from "../components/shared/DocsList/DocsList.component";
import { DocsListElement } from "../components/shared/DocsListElement/DocsListElement.component";
import { Heading } from "../components/shared/Heading/Heading.component";
import { Introduction } from "../components/pages/PageHome/Introduction/Introduction.component";
import { SiteHead } from "../components/Site/SiteHead/SiteHead.component";

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
      <SiteHead />
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
