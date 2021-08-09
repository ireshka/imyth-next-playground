import { getDocsMetadataSorted } from "./getDocsMetadataSorted/getDocsMetadataSorted";
import { getDocsSlugs } from "./getDocsSlugs/getDocsSlugs";
import { getOneDoc } from "./getOneDoc/getOneDoc";

export const docs = {
  getDocsMetadataSorted,
  getDocsSlugs,
  getOneDoc,
};

export * from "./getDocsMetadataSorted/getDocsMetadataSorted.types";
export * from "./getDocsSlugs/getDocsSlugs.types";
export type { Metadata, SourceLink } from "../schema/metadata";
export type { GetDataFromDocResult as GetOneDocResult } from "./getDataFromDoc/getDataFromDoc.types";
