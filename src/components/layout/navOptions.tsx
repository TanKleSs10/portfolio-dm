import { Brain, Folder, Mail, User, UserRoundSearch } from "lucide-react";

type TNavOption = {
  label: { en: string; es: string };
  href: string;
};

export const navOptions: TNavOption[] = [
  { label: { en: "About", es: "Acerca de" }, href: "#about-me" },
  { label: { en: "Skills", es: "Habilidades" }, href: "#skills" },
  { label: { en: "Projects", es: "Proyectos" }, href: "#projects" },
  { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
];

export const navOptionsMobile: {
  icon: React.ReactNode;
  href: string;
}[] = [
  { icon: <User />, href: "#about-me" },
  { icon: <Brain />, href: "#skills" },
  { icon: <Folder />, href: "#projects" },
  { icon: <Mail />, href: "#contact" },
];
export const langBtnText = ["es", "en"] as const;
