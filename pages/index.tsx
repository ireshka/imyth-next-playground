import { GetStaticProps } from "next";

import { ReactNode } from "react";
import Link from "next/link";
import { TextLink } from "../components/TextLink/TextLink.component";
import { PageLayout } from "../components/PageLayout/PageLayout.component";
import { docs, GetDocsMetadataSortedResult } from "../lib/docs";
import { DocsList } from "../components/DocsList/DocsList.component";
import { DocsListElement } from "../components/DocsListElement/DocsListElement.component";

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
          <h2>Posts list</h2>
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
