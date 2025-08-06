import { z } from "zod";

export const projectCreateSchema = z.object({
  titleEs: z
    .string()
    .min(1, { message: "El título en español es obligatorio" }),
  titleEn: z.string().min(1, { message: "El título en inglés es obligatorio" }),
  descriptionEs: z
    .string()
    .min(1, { message: "La descripción en español es obligatoria" }),
  descriptionEn: z
    .string()
    .min(1, { message: "La descripción en inglés es obligatoria" }),
  imageUrl: z.url({ message: "URL de imagen inválida" }),
  projectUrl: z.url().optional().or(z.literal("")),
  repoUrl: z.url().optional().or(z.literal("")),
  gridSpan: z.enum(["small", "medium", "large"]).default("medium"),
  order: z.coerce.number().int().min(0).default(0),
  categories: z.array(z.uuid()).optional(),
  technologies: z.array(z.uuid()).optional(),
});

export const projectUpdateSchema = z.object({
  id: z.uuid(),
  titleEs: z.string().min(1).optional(),
  titleEn: z.string().min(1).optional(),
  descriptionEs: z.string().min(1).optional(),
  descriptionEn: z.string().min(1).optional(),
  imageUrl: z.url().optional(),
  projectUrl: z.url().optional().or(z.literal("")),
  repoUrl: z.string().optional().or(z.literal("")),
  gridSpan: z.enum(["small", "medium", "large"]).optional(),
  order: z.coerce.number().int().min(0).optional(),
  categories: z.array(z.uuid()).optional(),
  technologies: z.array(z.uuid()).optional(),
});

export type ProjectCreateInput = z.infer<typeof projectCreateSchema>;
export type ProjectUpdateInput = z.infer<typeof projectUpdateSchema>;
