import "../styles/globals.css";
import { ReactElement } from "react";
import type { AppProps } from "next/app";
import { SiteLayoutContainer } from "../containers/SiteLayout/SiteLayout.container";

function MyApp({ Component: Page, pageProps }: AppProps): ReactElement {
  return (
    <SiteLayoutContainer>
      <Page {...pageProps} />
    </SiteLayoutContainer>
  );
}
export default MyApp;
