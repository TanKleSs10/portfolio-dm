import { OffersSectionLocalized } from "@/content/types";

export const offersSection: OffersSectionLocalized = {
  id: "offers",
  name: { es: "Oferta", en: "Offer" },
  title: {
    es: "Marco de trabajo",
    en: "Working framework",
  },
  description: {
    es: "Opciones claras para decidir con rapidez, sin letras pequenas.",
    en: "Clear options to decide quickly, without fine print.",
  },
  cards: [
    {
      title: {
        es: "Landing Esencial",
        en: "Essential Landing",
      },
      from: {
        es: "Desde: proyectos simples y bien definidos",
        en: "From: simple and well-defined projects",
      },
      timeline: {
        es: "Tiempo tipico: 7-10 dias",
        en: "Typical timeline: 7-10 days",
      },
      scope: {
        es: "Alcance: estructura clara, mensaje principal y llamada a la accion definida.",
        en: "Scope: clear structure, main message, and defined call to action.",
      },
    },
    {
      title: {
        es: "Landing orientada a conversion",
        en: "Conversion-focused landing",
      },
      from: {
        es: "Desde: proyectos que buscan generar contactos",
        en: "From: projects focused on lead generation",
      },
      timeline: {
        es: "Tiempo tipico: 10-14 dias",
        en: "Typical timeline: 10-14 days",
      },
      scope: {
        es: "Alcance: estrategia de contenido, secciones optimizadas y medicion basica.",
        en: "Scope: content strategy, optimized sections, and basic tracking.",
      },
    },
    {
      title: {
        es: "Soluciones a medida",
        en: "Custom solutions",
      },
      from: {
        es: "Desde: proyectos con necesidades especificas",
        en: "From: projects with specific needs",
      },
      timeline: {
        es: "Tiempo tipico: segun alcance",
        en: "Typical timeline: based on scope",
      },
      scope: {
        es: "Alcance: analisis, definicion de solucion y desarrollo alineado a objetivos reales.",
        en: "Scope: analysis, solution definition, and development aligned with real goals.",
      },
    },
  ],
};
