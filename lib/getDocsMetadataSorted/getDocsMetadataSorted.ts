import {
  GetDocsMetadataSortedProps,
  GetDocsMetadataSortedResult,
} from "./getDocsMetadataSorted.types";

import { getDocsMetadata } from "../getDocsMetadata/getDocsMetadata";
import { GetDocsMetadataResult } from "../getDocsMetadata/getDocsMetada.types";

import { sortStrings } from "../../utils";

const defaultSortOption: GetDocsMetadataSortedProps = {
  field: "date",
  order: "descend",
};

export const getDocsMetadataSorted = async (
  sortOption: GetDocsMetadataSortedProps = defaultSortOption,
): Promise<GetDocsMetadataSortedResult[]> => {
  const docs = await getDocsMetadata();

  const { field, order } = sortOption;

  const compareStrings = (a: GetDocsMetadataResult, b: GetDocsMetadataResult) => {
    const valueA = a.metadata[field];
    const valueB = b.metadata[field];

    return sortStrings(valueA, valueB, order);
  };

  return docs.sort(compareStrings);
};
