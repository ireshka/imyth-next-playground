import Head from "next/head";
import { SITE_TITLE } from "../../../constants/siteInfo.constants";
import { SiteHeadProps, SiteHeadReturns } from "./SiteHead.component.types";

export const SiteHead = ({ title }: SiteHeadProps): SiteHeadReturns => {
  const pageTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const pageMetaDescription = title ? `${SITE_TITLE} - ${title}` : SITE_TITLE;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageMetaDescription} />
    </Head>
  );
};
