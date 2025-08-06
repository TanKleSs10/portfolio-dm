import AboutMeBody from "@/components/aboutMe/AboutMeBody";
import ContactBody from "@/components/contact/ContactBody";
import ProjectsBody from "@/components/projects/ProjectsBody";
import SkillBody from "@/components/skills/skillsBody";

export const sections = [
  {
    id: "about-me",
    body: (locale: "es" | "en") => <AboutMeBody locale={locale} />,

    es: {
      name: "Sobre mí",
      title: (
        <>
          Soy <span className="text-brand-folly">Diego Meza</span>,
          desarrollador con cerca de 5 años de formación autodidacta.
        </>
      ),
      description:
        "Mi enfoque se centra en construir sistemas con una visión a largo plazo, priorizando la escalabilidad, la mantenibilidad y la claridad en el desarrollo.",
    },

    en: {
      name: "About Me",
      title: (
        <>
          I’m <span className="text-brand-folly">Diego Meza</span>, a developer
          with nearly 5 years of self-taught experience.
        </>
      ),
      description:
        "My focus is on building systems with a long-term vision, prioritizing scalability, maintainability, and clarity in development.",
    },
  },

  {
    id: "skills",
    body: (locale: "es" | "en") => <SkillBody locale={locale} />,

    es: {
      name: "Habilidades",
      title: (
        <>
          Mi enfoque va <span className="text-brand-folly">más allá</span> de
          dominar herramientas
        </>
      ),
      description:
        "Busco entender su propósito y aplicarlas con intención. Estas son las tecnologías y habilidades que utilizo para desarrollar sistemas.",
    },

    en: {
      name: "Skills",
      title: (
        <>
          My approach goes <span className="text-brand-folly">beyond</span>{" "}
          mastering tools
        </>
      ),
      description:
        "I aim to understand their purpose and apply them with intention. These are the technologies and skills I use to build systems.",
    },
  },

  {
    id: "projects",
    body: (locale: "es" | "en") => <ProjectsBody locale={locale} />,

    es: {
      name: "Proyectos",
      title: (
        <>
          Cada proyecto es un paso en{" "}
          <span className="text-brand-folly">mi evolución</span>
        </>
      ),
      description: (
        <>
          Aprender más y mejorar en cada paso siempre ha sido el motor detrás de
          lo que construyo.
        </>
      ),
    },

    en: {
      name: "Projects",
      title: (
        <>
          Every project is a step in{" "}
          <span className="text-brand-folly">my evolution</span>
        </>
      ),
      description: (
        <>
          Learning and improving with every step has always been the driving
          force behind everything I build.
        </>
      ),
    },
  },

  {
    id: "contact",
    body: (locale: "es" | "en") => <ContactBody locale={locale} />,

    es: {
      name: "Contacto",
      title: (
        <>
          ¿Trabajamos <span className="text-brand-folly">Juntos</span>?
        </>
      ),
      description: (
        <>
          Estoy abierto a explorar nuevas oportunidades y colaboraciones
          significativas.  Si compartes esa{" "}
          <span className="font-bold">ambición</span> por la innovación y el
          impacto, conversemos. Estoy seguro de que podemos crear algo{" "}
          <span className="font-bold">extraordinario</span> juntos.
        </>
      ),
    },

    en: {
      name: "Contact",
      title: (
        <>
          Shall we work <span className="text-brand-folly">Together</span>?
        </>
      ),
      description: (
        <>
          I’m open to exploring new opportunities and meaningful
          collaborations.  If you share the same{" "}
          <span className="font-bold">drive</span> for innovation and impact,
          let’s talk. I’m confident we can create something{" "}
          <span className="font-bold">extraordinary</span> together.
        </>
      ),
    },
  },
];
