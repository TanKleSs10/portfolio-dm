import { ReactNode } from "react";

interface SectionProps {
  sectionName?: string;
  title?: ReactNode | string; // Ahora acepta JSX
  description?: ReactNode | string; // Ahora acepta JSX
  children?: ReactNode;
}

export default function Section({
  title,
  children,
  sectionName,
  description,
}: SectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="font-unbounded font-bold">{sectionName}</h3>
      <p className="text-3xl md:text-4xl font-unbounded tracking-wider text-platinum-100">
        {title}
      </p>
      <p className="font-ibmPlex text-base md:text-xl text-platinum-200">
        {description}
      </p>
      <div className="mt-5">{children}</div>
    </section>
  );
}
