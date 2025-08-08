export type locale = "es" | "en";

type TMultiLangText = {
  es: string;
  en: string;
};

export interface IProject {
  title: TMultiLangText;
  description: TMultiLangText;
  image: { url: string; alt: TMultiLangText };
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  size: "sm" | "md" | "lg";
}
