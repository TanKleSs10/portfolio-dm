import { IProject } from "@/types";

export const projects: IProject[] = [
  {
    title: { es: "Cafetería", en: "Coffee Shop" },
    description: {
      es: "Landing page minimalista para una cafetería ficticia, desarrollada con Astro y Tailwind CSS, optimizada para carga rápida y diseño adaptable.",
      en: "Minimalist landing page for a fictional coffee shop, built with Astro and Tailwind CSS, optimized for fast loading and responsive design.",
    },
    image: {
      url: "https://res.cloudinary.com/dioxum2yk/image/upload/v1754612348/coffeeshop_iaxo3l.png",
      alt: {
        es: "Vista previa del sitio web para una cafetería",
        en: "Preview of the coffee shop website",
      },
    },
    repoUrl: "https://github.com/TanKleSs10/Coffee-Shop-QuantumMD",
    demoUrl: "https://coffee-shop-quantum-md.netlify.app/",
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    size: "sm",
  },
  {
    title: { es: "Tablero de redes sociales", en: "Social Media Dashboard" },
    description: {
      es: "Dashboard interactivo para visualizar métricas clave de redes sociales, con enfoque en diseño intuitivo y visualización clara de datos.",
      en: "Interactive dashboard to visualize key social media metrics, focusing on intuitive design and clear data visualization.",
    },
    image: {
      url: "https://res.cloudinary.com/dioxum2yk/image/upload/v1754613481/dashboadrSM_vxkirg.png",
      alt: {
        es: "Interfaz de panel de redes sociales",
        en: "Social media dashboard interface",
      },
    },
    repoUrl: "https://github.com/TanKleSs10/Dashboard-Social-Media",
    demoUrl: "https://dashboard-socialmedia.netlify.app/",
    technologies: ["HTML", "Tailwind CSS", "TypeScript", "ReactJS"],
    size: "sm",
  },
  {
    title: { es: "Video Flash", en: "Video Flash" },
    description: {
      es: "Catálogo digital para una productora musical, mostrando pistas exclusivas con diseño moderno y navegación optimizada.",
      en: "Digital catalog for a music production company, showcasing exclusive tracks with a modern design and optimized navigation.",
    },
    image: {
      url: "https://res.cloudinary.com/dioxum2yk/image/upload/v1754613480/videoFlash_ysf4ml.png",
      alt: {
        es: "Vista previa del portafolio musical",
        en: "Preview of the music portfolio",
      },
    },
    repoUrl: "https://github.com/TanKleSs10/Video_Flash",
    demoUrl: "https://video-flash.netlify.app/",
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "Vite"],
    size: "sm",
  },
  {
    title: { es: "UpTask Frontend", en: "UpTask Frontend" },
    description: {
      es: "Aplicación completa para gestión de proyectos y tareas, con autenticación, panel intuitivo y flujo dinámico entre equipos.",
      en: "Full application for project and task management, featuring authentication, an intuitive dashboard, and dynamic team workflows.",
    },
    image: {
      url: "https://res.cloudinary.com/dioxum2yk/image/upload/v1754613480/upTask_dgxwyl.png",
      alt: {
        es: "Interfaz de gestión de proyectos en UpTask",
        en: "Project management interface in UpTask",
      },
    },
    repoUrl: "https://github.com/TanKleSs10/UpTask",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Tanstack Query",
    ],
    size: "md",
  },
  {
    title: { es: "Sistema POS", en: "POS System" },
    description: {
      es: "Simulador de punto de venta en C, con registro de productos, control de operaciones y manejo de archivos para persistencia.",
      en: "Point of sale simulator in C, featuring product registration, transaction control, and file-based data persistence.",
    },
    image: {
      url: "https://res.cloudinary.com/dioxum2yk/image/upload/v1754613480/adminCore_l7wpmo.png",
      alt: {
        es: "Simulación de sistema de punto de venta",
        en: "POS system simulation",
      },
    },
    repoUrl: "https://github.com/TanKleSs10/PuntoDeVenta_C",
    technologies: ["C Language", "File System"],
    size: "sm",
  },
];
