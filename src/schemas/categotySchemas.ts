import z from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  nameEn: z.string().min(1, "El nombre en inglés es requerido"),
});
