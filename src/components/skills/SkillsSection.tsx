import Section from "../Section";
import SkillCategories from "./skillCategories";

export default function SkillsSection() {
  return (
    <Section
      sectionName="Habilidades"
      title={
        <>
          Mi enfoque va <span className="text-brand-folly">más allá</span> de
          dominar herramientas
        </>
      }
      description={
        <>
          Busco entender su propósito y aplicarlas con intención. Estas son las
          tecnologías y habilidades que utilizo para desarrollar sistemas.
        </>
      }
    >
      <SkillCategories />
    </Section>
  );
}
