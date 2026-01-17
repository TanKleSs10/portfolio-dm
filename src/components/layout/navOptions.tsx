import { Sparkles, Briefcase, ListChecks, Mail } from "lucide-react";

type TNavOption = {
  label: { en: string; es: string };
  href: string;
};

export const navOptions: TNavOption[] = [
  { label: { en: "Value", es: "Valor" }, href: "#value" },
  { label: { en: "Services", es: "Servicios" }, href: "#services" },
  { label: { en: "Process", es: "Proceso" }, href: "#process" },
  { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
];

export const navOptionsMobile: {
  icon: React.ReactNode;
  href: string;
}[] = [
  { icon: <Sparkles />, href: "#value" },
  { icon: <Briefcase />, href: "#services" },
  { icon: <ListChecks />, href: "#process" },
  { icon: <Mail />, href: "#contact" },
];
export const langBtnText = ["es", "en"] as const;
