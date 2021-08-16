import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { metadataSchema } from "../../schema/metadata";
import { GetDataFromDocResult } from "./getDataFromDoc.types";
import { DOCS_PATH } from "../../constants/docs.constants";

const getErrorText = (error: Error | z.ZodError, fullPath: string): string => {
  const customText =
    error instanceof z.ZodError
      ? "Docs Metadata validation error!"
      : "Error in getting data from doc";

  const errorText = `
    ${customText}

    Filepath:
    ${fullPath}
  
    Error details:
    ${JSON.stringify(error, null, 2)}
  `;

  return errorText;
};

export const getDataFromDoc = async (fileName: string): Promise<GetDataFromDocResult> => {
  const fullPath = path.join(DOCS_PATH, fileName);
  try {
    const id = fileName.replace(/\.md$/, "");

    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContent);

    const metadata = metadataSchema.parse(data);
    const processedContent = await remark().use(html).process(content);
    const contentHTML = processedContent.toString();

    return {
      id,
      contentHTML,
      metadata,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(getErrorText(error, fullPath));
    } else {
      throw new Error(getErrorText(error, fullPath));
    }
  }
};
