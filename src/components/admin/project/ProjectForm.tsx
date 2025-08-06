"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  projectCreateSchema,
  ProjectCreateInput,
} from "@/schemas/projectSchemas"; // o projectUpdateSchema si es edición
import Input from "@/components/Input";

type ProjectFormProps = {
  onSubmit: (data: ProjectCreateInput) => void;
  defaultValues?: Partial<ProjectCreateInput>;
};

export default function ProjectForm({
  onSubmit,
  defaultValues,
}: ProjectFormProps) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectCreateSchema),
    mode: "onChange",
    defaultValues,
  });

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-6 mx-auto max-w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          as="input"
          nameField="Título (Español)"
          register={register}
          registerName="titleEs"
          watch={watch}
          error={errors.titleEs?.message}
        />
        <Input
          as="input"
          nameField="Título (Inglés)"
          register={register}
          registerName="titleEn"
          watch={watch}
          error={errors.titleEn?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          as="textarea"
          nameField="Descripción (Español)"
          register={register}
          registerName="descriptionEs"
          watch={watch}
          error={errors.descriptionEs?.message}
        />
        <Input
          as="textarea"
          nameField="Descripción (Inglés)"
          register={register}
          registerName="descriptionEn"
          watch={watch}
          error={errors.descriptionEn?.message}
        />
      </div>

      <Input
        as="input"
        type="url"
        nameField="URL de la imagen"
        register={register}
        registerName="imageUrl"
        watch={watch}
        error={errors.imageUrl?.message}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          as="input"
          type="url"
          nameField="URL del proyecto"
          register={register}
          registerName="projectUrl"
          watch={watch}
          error={errors.projectUrl?.message}
        />
        <Input
          as="input"
          type="url"
          nameField="Repositorio (GitHub u otro)"
          register={register}
          registerName="repoUrl"
          watch={watch}
          error={errors.repoUrl?.message}
        />
      </div>

      <Input
        as="input"
        type="number"
        nameField="Orden"
        register={register}
        registerName="order"
        watch={watch}
        error={errors.order?.message}
      />

      <div>
        <label className="text-sm font-semibold text-night-700">
          Tamaño de cuadrícula
        </label>
        <select
          {...register("gridSpan")}
          className="w-full p-2 rounded-md border border-night-200 bg-night-50 text-night-900"
        >
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>
        {errors.gridSpan && (
          <p className="text-red-600 text-sm">{errors.gridSpan.message}</p>
        )}
      </div>

      {/* Aquí puedes insertar un Select múltiple o Checkboxes para categorías y tecnologías */}
      {/* categories, technologies — lo manejamos después si ya tienes los datos */}

      <input
        type="submit"
        value="Guardar Proyecto"
        className="bg-platinum-300 py-3 text-night-800 font-bold text-lg rounded-lg"
      />
    </form>
  );
}
