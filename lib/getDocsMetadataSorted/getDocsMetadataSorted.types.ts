import { Metadata } from "../../schema/metadata";

export type GetDocsMetadataSortedResult = {
  id: string;
  metadata: Metadata;
};

export type GetDocsMetadataSortedProps = {
  field: "title" | "date";
  order: "ascend" | "descend";
};
