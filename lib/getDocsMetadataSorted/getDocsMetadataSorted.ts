import {
  GetDocsMetadataSortedProps,
  GetDocsMetadataSortedResult,
} from "./getDocsMetadataSorted.types";

import { getDocsMetadata } from "../getDocsMetadata/getDocsMetadata";
import { GetDocsMetadataResult } from "../getDocsMetadata/getDocsMetada.types";

const defaultSortOption: GetDocsMetadataSortedProps = {
  field: "date",
  order: "descend",
};

export const getDocsMetadataSorted = async (
  sortOption: GetDocsMetadataSortedProps = defaultSortOption
): Promise<GetDocsMetadataSortedResult[]> => {
  const docs = await getDocsMetadata();

  const { field, order } = sortOption;

  const compareStrings = (
    a: GetDocsMetadataResult,
    b: GetDocsMetadataResult
  ) => {
    if (order === "ascend") {
      if (a.metadata[field] < b.metadata[field]) {
        return -1;
      }
      if (a.metadata[field] > b.metadata[field]) {
        return 1;
      }
      return 0;
    }

    if (a.metadata[field] < b.metadata[field]) {
      return 1;
    }
    if (a.metadata[field] > b.metadata[field]) {
      return -1;
    }
    return 0;
  };

  return docs.sort(compareStrings);
};
