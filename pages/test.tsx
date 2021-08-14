import { ReactElement } from "react";
import { ContentLayout } from "../components/ContentLayout/ContentLayout.component";
import { Heading } from "../components/shared/Heading/Heading.component";

const Header = () => <Heading>Article Title</Heading>;
const Content = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae alias
    illum earum ut ullam explicabo possimus vero, dignissimos soluta,
    consectetur, impedit quod debitis recusandae magni magnam? Itaque, inventore
    quod.
  </p>
);
const Test = (): ReactElement => (
  <ContentLayout header={<Header />} main={<Content />} />
);

export default Test;
