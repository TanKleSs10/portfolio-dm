import {
  Brain, // Opciones: Lightbulb, Puzzle, FlaskConical
  Leaf, // Opciones: Growth, Sparkles, TrendingUp
  MessageSquare, // Opciones: Chat, Mic
  Users, // Opciones: Handshake, Group, Network
  Sparkles, // Opciones: Target, Rocket, Lightbulb
  ShieldCheck, // Opciones: Scale, ClipboardCheck, Timer
  BarChart, // Opciones: Search, FlaskConical, Layers
  Eye, // Opciones: Focus, Microscope, ZoomIn
  HeartHandshake,
  LucideIcon, // Opciones: Smile, Users, Heart
} from "lucide-react";

export interface Technology {
  name: string;
  iconClass?: string;
  iconReact?: LucideIcon;
}

export const frontend: Technology[] = [
  { name: "JavaScript", iconClass: "devicon-javascript-plain" },
  { name: "HTML", iconClass: "devicon-html5-plain" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain" },
  { name: "React", iconClass: "devicon-react-original" },
  { name: "Next.js", iconClass: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
  { name: "CSS", iconClass: "devicon-css3-plain" },
  { name: "Sass", iconClass: "devicon-sass-original" },
  { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
  { name: "Astro", iconClass: "devicon-astro-plain" },
];

export const backend: Technology[] = [
  { name: "Node.js", iconClass: "devicon-nodejs-plain" },
  { name: "Express", iconClass: "devicon-express-original" },
  { name: "PHP", iconClass: "devicon-php-plain" },
  { name: "Laravel", iconClass: "devicon-laravel-original" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
  { name: "MySQL", iconClass: "devicon-mysql-original" },
  { name: "Prisma", iconClass: "devicon-prisma-original" },
  { name: "C", iconClass: "devicon-c-original" },
];

export const devops: Technology[] = [
  { name: "Docker", iconClass: "devicon-docker-plain" },
  { name: "Nginx", iconClass: "devicon-nginx-original" },
  { name: "Bash Scripting", iconClass: "devicon-bash-plain" },
  { name: "Ubuntu", iconClass: "devicon-ubuntu-plain" },
  { name: "Git", iconClass: "devicon-git-plain" },
  { name: "GitHub", iconClass: "devicon-github-original" },
];

export const softSkills: Technology[] = [
  { name: "Resolución de Problemas", iconReact: Brain },
  { name: "Aprendizaje Continuo", iconReact: Leaf },
  { name: "Comunicación Efectiva", iconReact: MessageSquare },
  { name: "Colaboración", iconReact: Users },
  { name: "Proactividad", iconReact: Sparkles },
  { name: "Disciplina", iconReact: ShieldCheck },
  { name: "Pensamiento Analítico", iconReact: BarChart },
  { name: "Orientación a la Calidad", iconReact: Eye },
  { name: "Empatía", iconReact: HeartHandshake },
];
