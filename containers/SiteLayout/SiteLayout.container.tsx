import { SiteLayout } from "../../components/SiteLayout/SiteLayout.component";
import { SiteHeaderContainer } from "../SiteHeader/SiteHeader.container";
import { SiteFooterContainer } from "../SiteFooter/SiteFooter.container";
import {
  SiteLayoutContainerProps,
  SiteLayoutContainerReturns,
} from "./SiteLayout.container.types";

export const SiteLayoutContainer = ({
  children,
}: SiteLayoutContainerProps): SiteLayoutContainerReturns => (
  <SiteLayout header={<SiteHeaderContainer />} footer={<SiteFooterContainer />}>
    {children}
  </SiteLayout>
);
