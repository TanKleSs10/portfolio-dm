"use server";

import { sendMail } from "@/lib/adapters/nodemiler.adapter";
import {
  sendClientEmail,
  sendOwnerEmail,
} from "@/lib/templates/emailTemplates";
import { messageShema } from "@/schemas/messageSchemas";
import { locale } from "@/types";

export async function sendToEmailContact(data: unknown, lang: locale) {
  const res = messageShema.safeParse(data);

  if (!res.success) {
    return { errors: res.error.issues };
  }

  const { name, lastName, email, message } = res.data;

  try {
    // Enviar correo al cliente que dejó el mensaje
    await sendMail({
      to: email,
      subject:
        lang === "es"
          ? "Gracias por tu mensaje - Diego Meza, desarrollador de software"
          : "Thank you for your message - Diego Meza, software developer",
      htmlBody: sendClientEmail(`${name} ${lastName}`, lang),
    });

    // Enviar correo a ti (propietario del portafolio)
    await sendMail({
      to: process.env.MAIL_USER!,
      subject:
        lang === "es"
          ? "Nuevo mensaje desde tu portafolio"
          : "New message from your portfolio",
      htmlBody: sendOwnerEmail(`${name} ${lastName}`, email, message, lang),
    });

    return { success: true };
  } catch (error) {
    console.error("Error al enviar correos:", error);
    return {
      errors:
        "Hubo un problema al enviar los correos. Intenta de nuevo más tarde.",
    };
  }
}
