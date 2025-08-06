"use client";

import Input from "@/components/Input";
import { createTechnologySchema } from "@/schemas/technologySchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TechnologyForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createTechnologySchema) });
  const handleFormSubmit = handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
  });
  return (
    <form
      method="POST"
      className="w-full space-y-7"
      onSubmit={handleFormSubmit}
    >
      <Input
        as="input"
        nameField="Nombre"
        register={register}
        watch={watch}
        registerName="name"
        error={errors.name?.message}
      />

      <input
        type="submit"
        value="Crear"
        className="bg-platinum-300 w-full text-night-900 font-bold text-lg py-2 rounded-md cursor-pointer"
      />
    </form>
  );
}
