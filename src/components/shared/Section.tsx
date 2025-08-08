import { ReactNode } from "react";
import TitleSection from "./TitleSection";
import Description from "./Description";

interface SectionProps {
  id: string;
  sectionName?: string;
  title?: ReactNode | string; // Ahora acepta JSX
  description?: ReactNode | string; // Ahora acepta JSX
  children?: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  sectionName,
  description,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`flex flex-col gap-5 ${className} scroll-mt-8`}>
      <h3 className="font-unbounded font-bold">{sectionName}</h3>
      <TitleSection>{title}</TitleSection>
      <Description>{description}</Description>
      <div className="mt-5">{children}</div>
    </section>
  );
}
