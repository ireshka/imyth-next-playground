import { SiteHeader } from "../../components/Site/SiteHeader/SiteHeader.component";

import { SITE_LOGO, SITE_TITLE } from "../../constants/siteInfo.constants";

import { SiteHeaderContainerReturns } from "./SiteHeader.container.types";

export const SiteHeaderContainer = (): SiteHeaderContainerReturns => (
  <SiteHeader image={SITE_LOGO} title={SITE_TITLE} />
);
