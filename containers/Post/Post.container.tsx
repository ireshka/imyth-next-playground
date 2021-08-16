import { PostContainerProps, PostContainerReturns } from "./Post.container.types";

import { SiteHead } from "../../components/Site/SiteHead/SiteHead.component";

import { ContentLayout } from "../../components/ContentLayout/ContentLayout.component";
import { PostHeader } from "../../components/post/PostHeader/PostHeader.component";
import { SourceLinks } from "../../components/shared/SourceLinks/SourceLinks.component";
import { ContentBody } from "../../components/ContentBody/ContentBody.component";

export const PostContainer = ({ postData }: PostContainerProps): PostContainerReturns => {
  const { contentHTML, metadata } = postData;
  const { source, title } = metadata;
  const postHeader = <PostHeader metadata={metadata} />;
  const postFooter = source ? <SourceLinks sourceLinks={source} /> : source;
  const PostMain = (
    <ContentBody>
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </ContentBody>
  );

  return (
    <>
      <SiteHead title={title} />
      <ContentLayout header={postHeader} main={PostMain} footer={postFooter} />
    </>
  );
};
