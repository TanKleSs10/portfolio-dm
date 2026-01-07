import { locale } from "@/types";

export type LocalizedText = Record<locale, string>;

export type RichTextSegment =
  | { type: "text"; value: string }
  | { type: "highlight"; value: string }
  | { type: "bold"; value: string }
  | { type: "break" };

export type RichText = RichTextSegment[];

export type SectionContent = {
  id: string;
  name: LocalizedText;
  title: Record<locale, RichText>;
  description: Record<locale, RichText>;
};

export type ProjectContent = {
  title: LocalizedText;
  description: LocalizedText;
  image: { url: string; alt: LocalizedText };
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  size: "sm" | "md" | "lg";
};
