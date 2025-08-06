import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Landing Page Modern",
    description: "Una landing responsiva y optimizada para SEO.",
    image: {
      url: "https://images.unsplash.com/photo-1678690832324-67961a27ca92",
      alt: "Landing moderna",
    },
    projectLink: "#",
    demoLink: "#",
    technologies: ["React", "Tailwind", "Framer Motion"],
    size: "sm",
  },
  {
    title: "Ecommerce Minimal",
    description: "Tienda online con pasarela de pagos integrada.",
    image: {
      url: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
      alt: "Ecommerce",
    },
    projectLink: "#",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    size: "lg",
  },
  {
    title: "Proyecto de Blog",
    description: "Blog personal con CMS headless.",
    image: {
      url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
      alt: "Blog",
    },
    projectLink: "#",
    technologies: ["Next.js", "Stripe", "MySQL"],
    size: "sm",
  },
  {
    title: "Dashboard empresarial",
    description: "Panel de control para gestión de datos.",
    image: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Dashboard",
    },
    projectLink: "#",
    technologies: ["React", "Tailwind", "Framer Motion"],
    size: "md",
  },
];

export default function ProjectsBody({ locale }: { locale: "es" | "en" }) {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-12 auto-rows-auto p-4">
      {projects.map((project, index) => {
        let sizeClass = "";

        switch (project.size) {
          case "sm":
            sizeClass = "col-span-4 row-span-4";
            break;
          case "md":
            sizeClass = "col-span-6 row-span-6";
            break;
          case "lg":
            sizeClass = "col-span-8 row-span-8";
            break;
          default:
            sizeClass = "";
        }

        return (
          <div key={index} className={sizeClass}>
            <ProjectCard {...project} />
          </div>
        );
      })}
    </section>
  );
}
