import { getDataFromDoc } from "../getDataFromDoc/getDataFromDoc";
import { GetDataFromDocResult } from "../getDataFromDoc/getDataFromDoc.types";

export const getOneDoc = async (
  fileName: string
): Promise<GetDataFromDocResult> => {
  const data = await getDataFromDoc(fileName);
  return data;
};
