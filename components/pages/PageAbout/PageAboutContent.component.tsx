import { ArticleContainer } from "../../../containers/Article/Article.container";
import { PageAboutContentReturns } from "./PageAboutContent.types";

export const PageAboutContent = (): PageAboutContentReturns => (
  <ArticleContainer title="About project">
    <p>About page will be here.</p>
  </ArticleContainer>
);
