import { ReactElement } from "react";
import { ArticleContainer } from "../containers/Article/Article.container";

const Custom404 = (): Custom404Return => (
  <ArticleContainer title="Page not found">
    <p>
      Sorry but one of the mythological beasts must have eaten this page. Now go back to a safe
      place and check this page later if you know what you are doing.
    </p>
  </ArticleContainer>
);

type Custom404Return = ReactElement;

export default Custom404;
