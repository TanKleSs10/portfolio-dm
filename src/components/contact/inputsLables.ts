import { InputLabel } from "@/types";

export const inputLabels: InputLabel[] = [
  {
    id: "name",
    type: "input",
    nameField: { es: "Nombre", en: "Name" },
    registerName: "name",
    group: 1,
  },
  {
    id: "lastName",
    type: "input",
    nameField: { es: "Apellido", en: "Last Name" },
    registerName: "lastName",
    group: 1,
  },
  {
    id: "email",
    type: "input",
    nameField: { es: "Correo Electrónico", en: "Email" },
    registerName: "email",
    typeInput: "email",
  },
  {
    id: "message",
    type: "textarea",
    nameField: { es: "Mensaje", en: "Message" },
    registerName: "message",
  },
  {
    id: "submit",
    type: "submit",
    nameField: { es: "Enviar Mensaje", en: "Send Message" },
  },
];
