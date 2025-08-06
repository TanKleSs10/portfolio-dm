"use client";

import { useForm } from "react-hook-form";
import Input from "../Input";
import { messageShema } from "@/schemas/messageSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactBody({ locale }: { locale: "es" | "en" }) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageShema),
    mode: "onChange",
  });

  const handleFormSubmit = handleSubmit((e) => {
    alert(`Nombre: ${e.name}`);
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
          error={errors.name?.message}
        />
        <Input
          as="input"
          nameField={locale === "es" ? "Apellido" : "Last Name"}
          watch={watch}
          register={register}
          registerName="lastName"
          error={errors.lastName?.message}
        />
      </div>
      <Input
        as="input"
        nameField={locale === "es" ? "Correo Electrónico" : "Email"}
        watch={watch}
        register={register}
        registerName="email"
        type="email"
        error={errors.email?.message}
      />
      <Input
        as="textarea"
        nameField={locale === "es" ? "Mensaje" : "Message"}
        watch={watch}
        register={register}
        registerName="message"
        error={errors.message?.message}
      />

      <input
        type="submit"
        value={locale === "es" ? "Enviar Mensaje" : "Send Message"}
        className="bg-platinum-100 hover:bg-white py-3 text-night-800 font-bold text-lg rounded-lg transition-colors duration-200"
      />
    </form>
  );
}
