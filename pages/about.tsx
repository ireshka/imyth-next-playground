import { ReactElement } from "react";
import { ArticleContainer } from "../containers/Article/Article.container";

const About = (): AboutReturn => (
  <ArticleContainer title="About project">
    <p>About page will be here.</p>
  </ArticleContainer>
);

type AboutReturn = ReactElement;

export default About;
