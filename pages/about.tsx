import { ReactElement } from "react";
import { PageLayout } from "../components/PageLayout/PageLayout.component";

const About = (): AboutReturn => (
  <PageLayout title="About project">About page will be here.</PageLayout>
);

type AboutReturn = ReactElement;

export default About;
