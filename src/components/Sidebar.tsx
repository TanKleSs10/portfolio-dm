import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import SocialLink from "./SocialLink";

export default function Sidebar() {
  return (
    <aside
      className="bg-night-800 p-5 flex flex-col gap-5 rounded-lg max-w-[400px]
  md:fixed md:top-1/2 md:-translate-y-1/2 shadow-neutral-800 shadow"
    >
      <figure className="flex flex-col items-center">
        <h1 className="text-6xl font-unbounded font-bold text-brand-indianRed">
          Diego
        </h1>
        <picture className="inline-block w-[180px] h-[180px] bg-platinum-100"></picture>
        <h1 className="text-6xl font-unbounded font-bold text-brand-indianRed">
          Meza
        </h1>
      </figure>
      <h2 className="text-base xs:text-lg font-unbounded font-bold">
        Desarrollador de software
      </h2>
      <p className="inline-block xs:text-base max-w-[260px] font-ibmPlex text-platinum-200">
        Apasionado por crear experiencias funcionales, seguras y con propósito.
      </p>
      <p className="text-base xs:text-lg font-unbounded font-bold">
        Ciudad de México, México
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
      <button className="w-full bg-platinum-300 py-2 font-unbounded font-bold text-night-800 rounded cursor-pointer">
        Ver CV
      </button>
    </aside>
  );
}
