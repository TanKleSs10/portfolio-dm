import { SectionContent } from "@/lib/content/types";

export const sectionsContent: SectionContent[] = [
  {
    id: "about-me",
    name: { es: "Sobre mí", en: "About Me" },
    title: {
      es: [
        { type: "text", value: "Soy " },
        { type: "highlight", value: "Diego Meza" },
        {
          type: "text",
          value: ", desarrollador con cerca de 5 años de formación autodidacta.",
        },
      ],
      en: [
        { type: "text", value: "I’m " },
        { type: "highlight", value: "Diego Meza" },
        {
          type: "text",
          value: ", a developer with nearly 5 years of self-taught experience.",
        },
      ],
    },
    description: {
      es: [
        {
          type: "text",
          value:
            "Mi enfoque se centra en construir sistemas con una visión a largo plazo, priorizando la escalabilidad, la mantenibilidad y la claridad en el desarrollo.",
        },
      ],
      en: [
        {
          type: "text",
          value:
            "My focus is on building systems with a long-term vision, prioritizing scalability, maintainability, and clarity in development.",
        },
      ],
    },
  },
  {
    id: "skills",
    name: { es: "Habilidades", en: "Skills" },
    title: {
      es: [
        { type: "text", value: "Mi enfoque va " },
        { type: "highlight", value: "más allá" },
        { type: "text", value: " de dominar herramientas" },
      ],
      en: [
        { type: "text", value: "My approach goes " },
        { type: "highlight", value: "beyond" },
        { type: "text", value: " mastering tools" },
      ],
    },
    description: {
      es: [
        {
          type: "text",
          value:
            "Busco entender su propósito y aplicarlas con intención. Estas son las tecnologías y habilidades que utilizo para desarrollar sistemas.",
        },
      ],
      en: [
        {
          type: "text",
          value:
            "I aim to understand their purpose and apply them with intention. These are the technologies and skills I use to build systems.",
        },
      ],
    },
  },
  {
    id: "projects",
    name: { es: "Proyectos", en: "Projects" },
    title: {
      es: [
        { type: "text", value: "Cada proyecto es un paso en " },
        { type: "highlight", value: "mi evolución" },
      ],
      en: [
        { type: "text", value: "Every project is a step in " },
        { type: "highlight", value: "my evolution" },
      ],
    },
    description: {
      es: [
        {
          type: "text",
          value:
            "Aprender más y mejorar en cada paso siempre ha sido el motor detrás de lo que construyo.",
        },
      ],
      en: [
        {
          type: "text",
          value:
            "Learning and improving with every step has always been the driving force behind everything I build.",
        },
      ],
    },
  },
  {
    id: "contact",
    name: { es: "Contacto", en: "Contact" },
    title: {
      es: [
        { type: "text", value: "¿Trabajamos " },
        { type: "highlight", value: "Juntos" },
        { type: "text", value: "?" },
      ],
      en: [
        { type: "text", value: "Shall we work " },
        { type: "highlight", value: "Together" },
        { type: "text", value: "?" },
      ],
    },
    description: {
      es: [
        {
          type: "text",
          value:
            "Estoy abierto a explorar nuevas oportunidades y colaboraciones significativas.",
        },
        { type: "break" },
        { type: "break" },
        { type: "text", value: "Si compartes esa " },
        { type: "bold", value: "ambición" },
        {
          type: "text",
          value:
            " por la innovación y el impacto, conversemos. Estoy seguro de que podemos crear algo ",
        },
        { type: "bold", value: "extraordinario" },
        { type: "text", value: " juntos." },
      ],
      en: [
        {
          type: "text",
          value:
            "I’m open to exploring new opportunities and meaningful collaborations.",
        },
        { type: "break" },
        { type: "break" },
        { type: "text", value: "If you share the same " },
        { type: "bold", value: "drive" },
        {
          type: "text",
          value:
            " for innovation and impact, let’s talk. I’m confident we can create something ",
        },
        { type: "bold", value: "extraordinary" },
        { type: "text", value: " together." },
      ],
    },
  },
];
