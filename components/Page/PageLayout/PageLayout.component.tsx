import Head from "next/head";

import {
  PageLayoutProps,
  PageLayoutReturns,
} from "./PageLayout.component.types";
import { GetOneDocResult, SourceLink } from "../../../lib/docs";
import { TagList } from "../../shared/TagList/TagList.component";
import { DocContent } from "../../shared/DocContent/DocContent.component";
import { isDefined } from "../../../utils";
import { SourceLinks } from "../../shared/SourceLinks/SourceLinks.component";
import { Date } from "../../shared/Date/Date.component";
import { SITE_TITLE } from "../../../constants/siteInfo.constants";
import { ReturnLink } from "../../shared/ReturnLink/ReturnLink.component";
import { Heading } from "../../shared/Heading/Heading.component";
import styles from "./PageLayout.module.css";

const generateSourceData = (
  postData: GetOneDocResult | undefined
): null | SourceLink[] => {
  if (isDefined(postData)) {
    const {
      metadata: { source },
    } = postData;
    if (isDefined(source)) {
      return source;
    }
    return null;
  }
  return null;
};

export const PageLayout = ({
  children,
  home = false,
  title,
  postData,
}: PageLayoutProps): PageLayoutReturns => {
  const data = postData ? postData.metadata.date : null;
  const tags = postData ? postData.metadata.tags : null;
  const contentHTML = postData ? postData.contentHTML : null;
  const source = generateSourceData(postData);
  const pageTitle = title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`Ireshka notes - ${title}`} />
      </Head>
      <article className={styles.wrapper}>
        {title && (
          <header className={styles.header}>
            <div className={styles.titleWrapper}>
              <Heading className={styles.title}>{title}</Heading>
              {tags && <TagList tags={tags} />}
            </div>
            {data && (
              <span className={styles.date}>
                <Date dateString={data} />
              </span>
            )}
          </header>
        )}
        {(home || !postData) && children && <DocContent>{children}</DocContent>}
        {contentHTML && (
          <DocContent>
            <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
            {source && <SourceLinks sourceLinks={source} />}
          </DocContent>
        )}
        {!home && (
          <footer className={styles.footer}>
            <ReturnLink href="/" text="To Home" />
          </footer>
        )}
      </article>
    </>
  );
};
