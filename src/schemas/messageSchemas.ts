import z from "zod";

export const messageShema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  lastName: z.string().min(1, "El apellido es requerido"),
  email: z.email({ error: "Coloca un Correo electrónico válido" }),
  message: z.string().min(1, "El mensaje es requerido"),
});

export type MessageSchema = z.infer<typeof messageShema>;
