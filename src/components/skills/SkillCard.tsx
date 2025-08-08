import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  iconClass?: string;
  iconReact?: LucideIcon;
}

export default function SkillCard({
  name,
  iconClass,
  iconReact: Icon,
}: SkillCardProps) {
  return (
    <figure className="group hover:bg-brand-indianRed active:bg-brand-indianRed relative w-38 h-38 text-center flex flex-col gap-6 justify-center px-2 items-center rounded-lg transition-all duration-300">
      {iconClass ? (
        <i
          className={`${iconClass} text-6xl text-brand-indianRed group-hover:text-night-900 group-hover:translate-y-5 group-active:text-night-900 group-active:translate-y-5 transition-all duration-300`}
        ></i>
      ) : Icon ? (
        <Icon className="w-12 h-12 text-brand-indianRed group-hover:text-night-900 group-hover:translate-y-5 group-active:text-night-900 group-active:translate-y-5 transition-all duration-300" />
      ) : null}
      <span className="font-unbounded text-night-900 tracking-wider">
        {name}
      </span>
    </figure>
  );
}
