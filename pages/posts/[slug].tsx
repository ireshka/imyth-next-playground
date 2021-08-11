import { ReactNode } from "react";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { PageLayout } from "../../components/Page/PageLayout/PageLayout.component";

import { docs, GetOneDocResult } from "../../lib/docs";

export default function Post({
  docsData,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  const {
    metadata: { title },
  } = docsData;
  return (
    <>
      <PageLayout title={title} postData={docsData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = docs.getDocsSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Result, Params> = async ({
  params,
}) => {
  const fileName = `${params?.slug}.md`;
  const docsData = await docs.getOneDoc(fileName);
  return {
    props: {
      docsData,
    },
  };
};

type Result = {
  docsData: GetOneDocResult;
};

type Params = {
  slug: string;
};
