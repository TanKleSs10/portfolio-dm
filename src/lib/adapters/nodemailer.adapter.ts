"use server";

import nodemailer from "nodemailer";

export interface Attachment {
  filename: string;
  path: string;
}

type SendMailOptions = {
  to: string;
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
};

export async function sendMail(options: SendMailOptions): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  try {
    await transporter.sendMail({
      to: options.to,
      subject: options.subject,
      html: options.htmlBody,
      attachments: options.attachments ?? [],
    });

    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
