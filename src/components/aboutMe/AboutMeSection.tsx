import Modal from "../Modal";
import Section from "../Section";
import { modals } from "./modals";

export default function AboutMeSection() {
  return (
    <Section
      sectionName="Sobre mí"
      title={
        <>
          Soy <span className="text-brand-folly">Diego Meza</span>,
          desarrollador con cerca de 5 años de formación autodidacta.
        </>
      }
      description={
        <>
          {" "}
          Mi enfoque se centra en construir sistemas con una visión a largo
          plazo, priorizando la escalabilidad, la mantenibilidad y la claridad
          en el desarrollo
        </>
      }
    >
      <div className="grid grid-cols-6 grid-rows-7 w-full gap-2 min-h-80">
        {modals.map((modal) => (
          <div
            key={modal.title}
            className={`rounded-lg overflow-hidden ${modal.gridArea}`}
          >
            <Modal title={modal.title} url={modal.url}>
              {modal.content}
            </Modal>
          </div>
        ))}
      </div>
    </Section>
  );
}
