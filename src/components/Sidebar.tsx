import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  Download,
} from "lucide-react";
import SocialLink from "./SocialLink";

export default function Sidebar({ location }: { location: "es" | "en" }) {
  return (
    <aside
      className="bg-night-800 p-5 flex flex-col gap-5 rounded-lg md:w-[320px]
  md:fixed md:top-1/2 md:-translate-y-1/2  shadow-2xl z-50"
    >
      <figure className="flex flex-col items-center">
        <h1 className="text-5xl font-unbounded font-bold text-brand-indianRed">
          Diego
        </h1>
        <picture className="inline-block w-[140px] h-[140px] bg-platinum-100"></picture>
        <h1 className="text-5xl font-unbounded font-bold text-brand-indianRed">
          Meza
        </h1>
      </figure>
      <h2 className="text-base xs:text-lg font-unbounded font-bold">
        {location === "es" ? "Desarrollador de Software" : "Software Developer"}
      </h2>
      <p className="inline-block xs:text-base max-w-[260px] font-ibmPlex text-platinum-200">
        {location === "es"
          ? "Apasionado por crear experiencias funcionales, seguras y con propósito."
          : "Passionate about creating functional, secure, and purposeful experiences."}
      </p>
      <p className="text-base xs:text-lg font-unbounded font-bold">
        {location === "es" ? "Ciudad de México, México" : "Mexico City, Mexico"}
      </p>
      <div className="flex gap-5 mx-auto w-fit">
        <SocialLink href="https://github.com/TanKleSs10">
          <GithubIcon className="w-6 h-6" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/diego-meza-365489212/">
          <LinkedinIcon className="w-6 h-6" />
        </SocialLink>

        <SocialLink href="https://www.instagram.com/the_tankless/">
          <InstagramIcon className="w-6 h-6" />
        </SocialLink>
      </div>
      <button className="w-full group min-h-10 relative flex bg-platinum-300 py-2 font-unbounded font-bold text-night-800 rounded cursor-pointer hover:bg-brand-folly transition-colors duration-300">
        <span className="absolute top-0 translate-y-1/3 left-1/2 -translate-x-1/2 group-hover:translate-x-0 group-hover:left-0 mx-2 transition-all duration-300">
          {location === "es" ? "Ver CV" : "View CV"}
        </span>
        <Download
          strokeWidth={3}
          className="absolute top-0 translate-y-1/3 right-1/2 -translate-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300"
        />
      </button>
    </aside>
  );
}
