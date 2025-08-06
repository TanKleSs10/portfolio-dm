"use client";

import Input from "@/components/Input";
import { createCategorySchema } from "@/schemas/categotySchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CategoryForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategorySchema),
    mode: "onChange",
  });
  const handleFormSubmit = handleSubmit((data) => {
    console.log("Form submitted with data:", data);
  });

  return (
    <form
      className="w-full space-y-7"
      onSubmit={handleFormSubmit}
      method="POST"
    >
      <Input
        as="input"
        nameField="Nombre"
        register={register}
        registerName="name"
        watch={watch}
        error={errors.name?.message}
      />
      <Input
        as="input"
        nameField="Nombre en inglés"
        register={register}
        registerName="nameEn"
        watch={watch}
        error={errors.nameEn?.message}
      />
      <input
        type="submit"
        value="Crear"
        className="bg-platinum-300 w-full text-night-900 font-bold text-lg py-2 rounded-md cursor-pointer"
      />
    </form>
  );
}
