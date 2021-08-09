import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  PageLayoutProps,
  PageLayoutReturns,
} from "./PageLayout.component.types";
import { GetOneDocResult, SourceLink } from "../../lib/docs";
import styles from "./PageLayout.module.css";
import { TextLink } from "../TextLink/TextLink.component";
import { TagList } from "../TagList/TagList.component";
import { DocContent } from "../DocContent/DocContent.component";
import { isDefined } from "../../utils";
import { SourceLinks } from "../SourceLinks/SourceLinks.component";
import { Date } from "../Date/Date.component";
import { SITE_TITLE } from "../../constants/siteInfo.constants";

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
      <section className={styles.wrapper}>
        {title && (
          <header className={styles.header}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{title}</h2>
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
          <article>
            <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
            {source && <SourceLinks sourceLinks={source} />}
          </article>
        )}
        {!home && (
          <footer className={styles.footer}>
            <Link href="/" passHref>
              <TextLink>
                <FontAwesomeIcon
                  icon={faAngleDoubleLeft}
                  className={styles.footerIcon}
                />{" "}
                To Home
              </TextLink>
            </Link>
          </footer>
        )}
      </section>
    </>
  );
};
