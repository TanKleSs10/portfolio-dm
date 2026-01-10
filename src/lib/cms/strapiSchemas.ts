import { z } from "zod";

const richTextNodeSchema = z.object({
  type: z.literal("text"),
  text: z.string(),
});

const richTextBlockSchema = z.object({
  type: z.literal("paragraph"),
  children: z.array(richTextNodeSchema),
});

const richTextSchema = z.array(richTextBlockSchema);

const heroSchema = z.object({
  headline: z.string(),
  description: richTextSchema,
  location: z.string(),
});

const sectionSchema = z.object({
  label: z.string(),
  title: richTextSchema,
  description: richTextSchema,
});

const landingPageAttributesSchema = z.object({
  locale: z.string(),
  hero: heroSchema,
  section: z.array(sectionSchema),
});

const landingPageEntitySchema = z.object({
  id: z.number(),
  attributes: landingPageAttributesSchema,
});

export const landingPagesResponseSchema = z.object({
  data: z.array(landingPageEntitySchema),
  meta: z
    .object({
      pagination: z
        .object({
          page: z.number(),
          pageSize: z.number(),
          pageCount: z.number(),
          total: z.number(),
        })
        .optional(),
    })
    .optional(),
});
