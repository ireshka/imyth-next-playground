import { Metadata } from "../../schema/metadata";

export type GetDataFromDocResult = {
  contentHTML: string;
  metadata: Metadata;
  id: string;
};
