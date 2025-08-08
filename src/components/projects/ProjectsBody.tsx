"use client";

import { motion } from "motion/react";
import { locale } from "@/types";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function ProjectsBody({ locale }: { locale: locale }) {
  return (
    <section className="grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-12 grid-rows-auto grid-flow-dense gap-4 p-4">
      {projects.map((project, index) => {
        const sizeClass = (() => {
          switch (project.size) {
            case "sm":
              return "@md:col-span-4 @md:row-span-2"; // 3 tarjetas sm caben por fila
            case "md":
              return "@md:col-span-8 @md:row-span-2"; // ocupa 2/3 del ancho
            case "lg":
              return "@md:col-span-12 @md:row-span-3"; // ocupa todo el ancho
            default:
              return "@md:col-span-4 @md:row-span-2";
          }
        })();
        return (
          <motion.div layout key={`${locale}-${index}`} className={sizeClass}>
            <ProjectCard
              title={project.title[locale]}
              description={project.description[locale]}
              image={{
                url: project.image.url,
                alt: project.image.alt[locale],
              }}
              projectLink={project.repoUrl}
              technologies={project.technologies}
              demoLink={project.demoUrl}
              size={project.size}
            />
          </motion.div>
        );
      })}
    </section>
  );
}
