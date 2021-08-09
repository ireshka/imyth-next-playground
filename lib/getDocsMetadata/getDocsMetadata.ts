import fs from "fs";

import { DOCS_PATH } from "../../constants/docs.constants";
import { GetDocsMetadataResult } from "./getDocsMetada.types";
import { getDataFromDoc } from "../getDataFromDoc/getDataFromDoc";

export const getDocsMetadata = async (): Promise<GetDocsMetadataResult[]> => {
  const fileNames = fs.readdirSync(DOCS_PATH);
  const allDocsDataPromises = fileNames.map(async (fileName) => {
    const { id, metadata } = await getDataFromDoc(fileName);

    return {
      id,
      metadata,
    };
  });

  const allDocs = await Promise.all(allDocsDataPromises);
  return allDocs;
};
