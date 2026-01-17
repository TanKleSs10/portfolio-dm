"use server";

import { sendMail } from "@/lib/adapters/nodemailer.adapter";
import {
  sendClientEmail,
  sendOwnerEmail,
} from "@/lib/templates/emailTemplates";
import { messageShema } from "@/schemas/messageSchemas";
import { locale } from "@/types";
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimitByEmail = new Map<string, { count: number; windowStart: number }>();

function rateLimitExceeded(email: string) {
  const now = Date.now();
  const current = rateLimitByEmail.get(email);
  if (!current || now - current.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitByEmail.set(email, { count: 1, windowStart: now });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  rateLimitByEmail.set(email, {
    count: current.count + 1,
    windowStart: current.windowStart,
  });
  return false;
}

export async function sendToEmailContact(data: unknown, lang: locale) {
  const res = messageShema.safeParse(data);

  if (!res.success) {
    return { errors: res.error.issues };
  }

  const { name, lastName, email, message } = res.data;
  if (rateLimitExceeded(email)) {
    return {
      errors:
        lang === "es"
          ? "Has alcanzado el limite de mensajes por hora. Intenta mas tarde."
          : "You have reached the hourly message limit. Try again later.",
    };
  }

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
