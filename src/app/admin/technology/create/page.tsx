import TechnologyForm from "@/components/admin/technology/TechnologyForm";

export default function createTechnology() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h3 className="font-unbounded text-3xl">Crear Nueva tecnología</h3>
      <div className="flex w-7/12 py-auto justify-center items-center">
        <TechnologyForm />
      </div>
    </section>
  );
}
