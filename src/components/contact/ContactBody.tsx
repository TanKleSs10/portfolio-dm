"use client";

import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import { messageShema, TMessage } from "@/schemas/messageSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { locale } from "@/types";
import { translateError } from "@/utils";
import { sendToEmailContact } from "@/actions/sendToEmailContac.action";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ContactBody({ locale }: { locale: locale }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMessage>({
    resolver: zodResolver(messageShema),
    mode: "onChange",
  });

  const handleFormSubmit = handleSubmit(async (e) => {
    setIsLoading(true);
    const data = {
      name: e.name,
      lastName: e.lastName,
      email: e.email,
      message: e.message,
    };

    const res = messageShema.safeParse(data);

    if (!res.success) {
      res.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      setIsLoading(false);
      return;
    }

    const response = await sendToEmailContact(res.data, locale);

    if (response?.errors) {
      if (typeof response.errors === "string") {
        // error general
        toast.error(response.errors);
      } else {
        // errores de campos
        for (const [field, message] of Object.entries(response.errors)) {
          toast.error(`Error en ${field}: ${message}`);
        }
      }
      setIsLoading(false);
      return;
    }

    toast.success(
      `${locale === "es" ? "¡Mensaje enviado correctamente!" : "Message sent successfully!"} `,
    );
    setIsLoading(false);
    reset();
  });

  return (
    <form className="flex flex-col gap-7 mx-auto" onSubmit={handleFormSubmit}>
      <div className="grid w-full grid-cols-1  md:grid-cols-2 gap-7">
        <Input
          as="input"
          nameField={locale === "es" ? "Nombre" : "Name"}
          watch={watch}
          register={register}
          registerName="name"
          error={translateError(locale, errors.name?.message as string)}
        />
        <Input
          as="input"
          nameField={locale === "es" ? "Apellido" : "Last Name"}
          watch={watch}
          register={register}
          registerName="lastName"
          error={translateError(locale, errors.lastName?.message as string)}
        />
      </div>
      <Input
        as="input"
        nameField={locale === "es" ? "Correo Electrónico" : "Email"}
        watch={watch}
        register={register}
        registerName="email"
        type="email"
        error={translateError(locale, errors.email?.message as string)}
      />
      <Input
        as="textarea"
        nameField={locale === "es" ? "Mensaje" : "Message"}
        watch={watch}
        register={register}
        registerName="message"
        error={translateError(locale, errors.message?.message as string)}
      />

      <input
        type="submit"
        disabled={isLoading}
        value={
          isLoading
            ? locale === "es"
              ? "Enviando..."
              : "Sending..."
            : locale === "es"
              ? "Enviar Mensaje"
              : "Send Message"
        }
        className="bg-platinum-100 hover:bg-white/70 hover:backdrop-blur-sm hover:shadow-md py-3 text-night-800 font-bold text-lg rounded-lg transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    </form>
  );
}
