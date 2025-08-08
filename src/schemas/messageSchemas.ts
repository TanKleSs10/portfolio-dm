import z from "zod";

export const messageShema = z.object({
  name: z.string().min(1, "name"),
  lastName: z.string().min(1, "lastName"),
  email: z.email({ error: "email" }),
  message: z.string().min(1, "message"),
});

export type TMessage = z.infer<typeof messageShema>;
