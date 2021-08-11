import { SiteFooter } from "../../components/Site/SiteFooter/SiteFooter.component";

import {
  AUTHOR_NAME,
  AUTHOR_GITHUB_PROFILE,
} from "../../constants/siteInfo.constants";

import { SiteFooterContainerReturns } from "./SiteFooter.container.types";

export const SiteFooterContainer = (): SiteFooterContainerReturns => (
  <SiteFooter
    authorName={AUTHOR_NAME}
    authorGithubProfileLink={AUTHOR_GITHUB_PROFILE}
  />
);
