import { ReactElement } from "react";
import { PageLayout } from "../components/Page/PageLayout/PageLayout.component";

const Custom404 = (): Custom404Return => (
  <PageLayout title="Page not found">
    Sorry but one of the mythological beasts must have eaten this page. Now go
    back to a safe place and check this page later if you know what you are
    doing.
  </PageLayout>
);

type Custom404Return = ReactElement;

export default Custom404;
