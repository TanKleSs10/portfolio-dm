import { CasesSectionLocalized } from "@/content/types";

export const casesSection: CasesSectionLocalized = {
  id: "cases",
  name: { es: "Mini-casos", en: "Mini cases" },
  title: {
    es: "Como suelo ayudar",
    en: "How I usually help",
  },
  description: {
    es: "Problema, decision y el impacto esperado en cada caso.",
    en: "Problem, decision, and the expected impact in each case.",
  },
  cards: [
    {
      title: {
        es: "Landing con mensaje poco claro",
        en: "Landing with unclear messaging",
      },
      problem: {
        es: "Demasiada informacion y ningun mensaje principal.",
        en: "Too much information and no clear main message.",
      },
      decision: {
        es: "Simplificar la propuesta y enfocar el contenido en un objetivo concreto.",
        en: "Simplify the value proposition and focus the content on a single goal.",
      },
      impact: {
        es: "Comunicacion mas clara y contactos mejor alineados.",
        en: "Clearer communication and better-aligned leads.",
      },
    },
    {
      title: {
        es: "Eleccion tecnologica innecesariamente compleja",
        en: "Unnecessarily complex tech choice",
      },
      problem: {
        es: "Uso de herramientas que complicaban el proyecto sin aportar valor real.",
        en: "Tools that complicated the project without real value.",
      },
      decision: {
        es: "Ajustar la tecnologia a las necesidades reales del negocio.",
        en: "Align the technology with the real business needs.",
      },
      impact: {
        es: "Menor costo, menos friccion y mayor facilidad de mantenimiento.",
        en: "Lower cost, less friction, and easier maintenance.",
      },
    },
    {
      title: {
        es: "Proceso sin estructura definida",
        en: "Process without structure",
      },
      problem: {
        es: "Cambios constantes y tiempos poco claros.",
        en: "Constant changes and unclear timelines.",
      },
      decision: {
        es: "Establecer un proceso con etapas, entregables y tiempos desde el inicio.",
        en: "Set a process with stages, deliverables, and timelines from the start.",
      },
      impact: {
        es: "Trabajo mas ordenado y expectativas claras para todos.",
        en: "More organized work and clear expectations for everyone.",
      },
    },
  ],
};
