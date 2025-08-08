import { locale } from "@/types";

export const sendClientEmail = (name: string, lang: locale) => {
  const es = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Gracias por tu mensaje</title>
  </head>
  <body style="margin:0; font-family:Arial, sans-serif; background-color:#121212; color:#eaeaea; padding:2rem;">
    <div style="max-width:600px; margin:0 auto; background-color:#1e1e1e; padding:2rem; border-radius:8px;">
      <h1 style="color:#ff4d5a;">¡Gracias por tu mensaje!</h1>
      <p>Hola <strong>${name}</strong>,</p>
      <p>Queremos agradecerte por tomarte el tiempo de contactarnos. Hemos recibido tu mensaje y lo revisaremos lo antes posible.</p>
      <p>Muy pronto nos pondremos en contacto contigo.</p>
      <hr style="border:none; border-top:1px solid #2a2a2a; margin:2rem 0;" />
      <p style="color:#e0e0e0;">Saludos cordiales,<br>Diego Meza<br>Desarrollador Web | Quantum MD</p>
    </div>
  </body>
</html>`;

  const en = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Thanks for your message</title>
  </head>
  <body style="margin:0; font-family:Arial, sans-serif; background-color:#121212; color:#eaeaea; padding:2rem;">
    <div style="max-width:600px; margin:0 auto; background-color:#1e1e1e; padding:2rem; border-radius:8px;">
      <h1 style="color:#ff4d5a;">Thanks for your message!</h1>
      <p>Hello <strong>${name}</strong>,</p>
      <p>We appreciate you taking the time to contact us. We’ve received your message and will review it as soon as possible.</p>
      <p>We’ll be in touch with you very soon.</p>
      <hr style="border:none; border-top:1px solid #2a2a2a; margin:2rem 0;" />
      <p style="color:#e0e0e0;">Best regards,<br>Diego Meza<br>Web Developer | Quantum MD</p>
    </div>
  </body>
</html>`;

  return lang === "es" ? es : en;
};

export const sendOwnerEmail = (
  name: string,
  email: string,
  message: string,
  lang: locale,
) => {
  const es = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Nuevo mensaje del portafolio</title>
  </head>
  <body style="margin:0; font-family:Arial, sans-serif; background-color:#121212; color:#eaeaea; padding:2rem;">
    <div style="max-width:600px; margin:0 auto; background-color:#1e1e1e; padding:2rem; border-radius:8px;">
      <h1 style="color:#ff4d5a;">Nuevo mensaje del portafolio</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
      <hr style="border:none; border-top:1px solid #2a2a2a; margin:2rem 0;" />
      <p style="color:#e0e0e0;">Este mensaje fue enviado desde tu portafolio | Quantum MD</p>
    </div>
  </body>
</html>`;

  const en = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New message from portfolio</title>
  </head>
  <body style="margin:0; font-family:Arial, sans-serif; background-color:#121212; color:#eaeaea; padding:2rem;">
    <div style="max-width:600px; margin:0 auto; background-color:#1e1e1e; padding:2rem; border-radius:8px;">
      <h1 style="color:#ff4d5a;">New message from portfolio</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr style="border:none; border-top:1px solid #2a2a2a; margin:2rem 0;" />
      <p style="color:#e0e0e0;">This message was sent from your portfolio | Quantum MD</p>
    </div>
  </body>
</html>`;

  return lang === "es" ? es : en;
};
