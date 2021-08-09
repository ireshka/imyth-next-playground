import { ReactNode } from "react";

import { PageLayout } from "../components/PageLayout/PageLayout.component";

export default function FirstPost(): ReactNode {
  return (
    <>
      <PageLayout title="First post">
        <p>Welcome in my first post</p>
      </PageLayout>
    </>
  );
}
