import { ReactNode } from "react";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { PostContainer } from "../../containers/Post/Post.container";

import { docs, GetOneDocResult } from "../../lib/docs";

export default function Post({
  docsData,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  return (
    <>
      <PostContainer postData={docsData} />
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

export const getStaticProps: GetStaticProps<Result, Params> = async ({ params }) => {
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
