import fs from "fs";

import { DOCS_PATH } from "../../constants/docs.constants";
import { GetDocsSlugsResult } from "./getDocsSlugs.types";

export const getDocsSlugs = (): GetDocsSlugsResult[] => {
  const fileNames = fs.readdirSync(DOCS_PATH);
  const allDocsData = fileNames.map((fileName) => {
    const routeName = fileName.replace(/\.md$/, "");
    return {
      params: {
        slug: routeName,
      },
    };
  });
  return allDocsData;
};
