import Section from "../Section";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Section
      sectionName="Proyectos"
      title={
        <>
          Cada proyecto es un paso en{" "}
          <span className="text-brand-folly">mi evolución</span>
        </>
      }
      description={
        <>
          Aprender más y mejorar en cada paso siempre ha sido el motor detrás de
          lo que construyo.
        </>
      }
    >
      {/* La cuadrícula Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        <div className="md:col-span-6 md:row-span-4">
          <ProjectCard />
        </div>
        <div className="md:col-span-6 md:row-span-2">
          <ProjectCard />
        </div>
      </div>
    </Section>
  );
}
