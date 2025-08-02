import Section from "../Section";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Section
      sectionName="Contacto"
      title={
        <>
          ¿Trabajamos <span className="text-brand-folly">Juntos</span>?
        </>
      }
      description={
        <>
          Estoy abierto a explorar nuevas oportunidades y colaboraciones
          significativas  Si compartes esa{" "}
          <span className="font-bold">ambición</span> por la innovación y el
          impacto, conversemos. Estoy seguro de que podemos crear algo{" "}
          <span className="font-bold">extraordinario</span> juntos
        </>
      }
    >
      <div>
        <ContactForm />
      </div>
    </Section>
  );
}
