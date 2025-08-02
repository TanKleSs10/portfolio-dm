"use client";

import { useForm } from "react-hook-form";
import Input from "../Input";
import { messageShema } from "@/schemas/messageSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
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
      <div className="grid w-full grid-cols-1  md:grid-cols-2 gap-5">
        <Input
          as="input"
          nameField="Nombre"
          watch={watch}
          register={register}
          registerName="name"
          error={errors.name?.message}
        />
        <Input
          as="input"
          nameField="Apellido"
          watch={watch}
          register={register}
          registerName="lastName"
          error={errors.lastName?.message}
        />
      </div>
      <Input
        as="input"
        nameField="Correo Electrónico"
        watch={watch}
        register={register}
        registerName="email"
        type="email"
        error={errors.email?.message}
      />
      <Input
        as="textarea"
        nameField="Mensaje"
        watch={watch}
        register={register}
        registerName="message"
        error={errors.message?.message}
      />

      <input
        type="submit"
        value="Enviar Mensaje"
        className="bg-platinum-300 py-3 text-night-800 font-bold text-lg rounded-lg"
      />
    </form>
  );
}
