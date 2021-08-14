import {
  ArticleContainerProps,
  ArticleContainerReturns,
} from "./Article.container.types";

import { SiteHead } from "../../components/Site/SiteHead/SiteHead.component";
import { Heading } from "../../components/shared/Heading/Heading.component";

import { ContentLayout } from "../../components/ContentLayout/ContentLayout.component";
import { ContentBody } from "../../components/ContentBody/ContentBody.component";

export const ArticleContainer = ({
  children,
  title,
}: ArticleContainerProps): ArticleContainerReturns => {
  const ArticleHeader = <Heading>{title}</Heading>;
  const ArticleMain = <ContentBody>{children}</ContentBody>;

  return (
    <>
      <SiteHead title={title} />
      <ContentLayout header={ArticleHeader} main={ArticleMain} />
    </>
  );
};
