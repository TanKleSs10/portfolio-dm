import CategoryForm from "@/components/admin/category/CategoryForm";

export default function createProject() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h3 className="font-unbounded text-3xl">Crear Nueva Categoría</h3>
      <div className="flex w-7/12 py-auto justify-center items-center">
        <CategoryForm />
      </div>
    </section>
  );
}
