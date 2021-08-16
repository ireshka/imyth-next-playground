import { z } from "zod";
import validator from "validator";
import { DATE_FORMAT } from "../constants/docs.constants";

const sourceLinkSchema = z.object({
  link: z.string().refine((value) => validator.isURL(value, { require_valid_protocol: true }), {
    message: "Not valid URL",
  }),
  description: z.string().min(3),
});

export type SourceLink = z.infer<typeof sourceLinkSchema>;

export const metadataSchema = z.object({
  title: z.string().min(1),
  date: z
    .string()
    .refine((value) => validator.isDate(value, { format: DATE_FORMAT, strictMode: true }), {
      message: "Not valid date",
    }),
  tags: z.array(z.string().min(3)),
  source: z.array(sourceLinkSchema).nullable(),
});

export type Metadata = z.infer<typeof metadataSchema>;
