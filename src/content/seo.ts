import type { Metadata } from "next";
import { locale } from "@/types";

export const seoContent: Record<locale, Metadata> = {
  es: {
    title: "Soluciones tecnologicas claras - Diego Meza",
    description:
      "Soluciones tecnologicas claras para ayudar a negocios a organizar y lanzar sus sistemas digitales con eficiencia.",
    keywords: [
      "freelance",
      "desarrollador web",
      "consultoria digital",
      "landing page",
      "automatizacion",
      "e-commerce",
    ],
    alternates: {
      canonical: "https://tusitio.com/es",
      languages: {
        en: "https://tusitio.com/en",
      },
    },
  },
  en: {
    title: "Clear technology solutions - Diego Meza",
    description:
      "Clear technology solutions to help businesses organize and launch their digital systems efficiently.",
    keywords: [
      "freelance",
      "web developer",
      "digital consulting",
      "landing page",
      "automation",
      "e-commerce",
    ],
    alternates: {
      canonical: "https://tusitio.com/en",
      languages: {
        es: "https://tusitio.com/es",
      },
    },
  },
};
