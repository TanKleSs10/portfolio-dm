import { ContactFormContentLocalized } from "@/content/types";

export const contactFormContent: ContactFormContentLocalized = {
  fields: {
    name: { es: "Nombre", en: "Name" },
    lastName: { es: "Apellido", en: "Last Name" },
    email: { es: "Correo Electronico", en: "Email" },
    message: { es: "Mensaje", en: "Message" },
  },
  submit: {
    idle: { es: "Enviar Mensaje", en: "Send Message" },
    loading: { es: "Enviando...", en: "Sending..." },
  },
};
