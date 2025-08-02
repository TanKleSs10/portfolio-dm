import { LucideIcon } from "lucide-react";
import SkillCard from "./SkillCard";
import { Technology } from "./technologies";

interface TechnologiesCardsProps {
  technologies: Technology[];
}

export default function TechnologiesCards({
  technologies,
}: TechnologiesCardsProps) {
  return (
    <>
      {technologies.map((technology) => (
        <SkillCard
          key={technology.name}
          name={technology.name}
          iconReact={technology.iconReact as LucideIcon}
          iconClass={technology.iconClass}
        />
      ))}
    </>
  );
}
