import { backend, devops, frontend, softSkills } from "./technologies";

export const techLabel = [
  {
    id: 1,
    name: {
      en: "frontend",
      es: "Frontend",
    },
    technologies: frontend,
  },
  {
    id: 2,
    name: {
      en: "Soft skills",
      es: "Habilidades blandas",
    },
    technologies: softSkills,
  },
  {
    id: 3,
    name: {
      en: "DevOps & Architecture",
      es: "Arquitectura & DevOps",
    },
    technologies: devops,
  },
  {
    id: 4,
    name: {
      en: "Backend",
      es: "Backend",
    },
    technologies: backend,
  },
];
