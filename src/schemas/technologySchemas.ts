import z from "zod";

export const createTechnologySchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
});
