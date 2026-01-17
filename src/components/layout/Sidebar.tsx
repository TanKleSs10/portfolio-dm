import { LinkedinIcon, Mail, MessageCircle } from "lucide-react";
import SocialLink from "../shared/SocialLink";
import { locale } from "@/types";
import { getLandingContent } from "@/content";

export default function Sidebar({ locale }: { locale: locale }) {
  const { hero } = getLandingContent(locale);
  const secondaryLinks = hero.secondaryLinks.filter((link) => link.href);
  return (
    <aside
      className="bg-night-800 p-5 flex flex-col gap-5 rounded-lg md:w-[320px]
  md:fixed md:top-1/2 md:-translate-y-1/2  shadow-2xl z-50 @container"
    >
      <figure className="flex flex-col">
        <h1 className="text-5xl mb-5 font-unbounded font-bold text-brand-indianRed">
          Diego
        </h1>
        <picture className="hidden w-[140px] h-[140px] bg-platinum-100"></picture>
        <h1 className="text-5xl text-end font-unbounded font-bold text-brand-indianRed">
          Meza
        </h1>
      </figure>
      <h2 className="text-base xs:text-lg font-unbounded font-bold @sm:text-center">
        {hero.headline}
      </h2>
      <p className="inline-block xs:text-base max-w-[260px] font-ibmPlex text-platinum-200 @sm:text-center @sm:mx-auto">
        {hero.subheadline}
      </p>
      <p className="text-base xs:text-lg font-unbounded font-bold @sm:text-center">
        {hero.location}
      </p>
      <div className="flex gap-5 mx-auto w-fit">
        {secondaryLinks.map((link) => {
          const isLinkedIn = link.href.includes("linkedin");
          const Icon = isLinkedIn ? LinkedinIcon : Mail;
          return (
            <SocialLink key={link.href} href={link.href}>
              <Icon className="w-6 h-6" />
            </SocialLink>
          );
        })}
      </div>
      <a
        href={hero.primaryCta.href}
        className="w-full group min-h-10 relative flex bg-platinum-300 py-2 font-unbounded font-bold text-night-800 rounded cursor-pointer hover:bg-brand-folly transition-colors duration-300"
      >
        <span className="absolute top-0 translate-y-1/3 left-1/2 -translate-x-1/2 group-hover:translate-x-0 group-hover:left-0 mx-2 transition-all duration-300">
          {hero.primaryCta.label}
        </span>
        <MessageCircle
          strokeWidth={2.5}
          className="absolute top-0 translate-y-1/3 right-1/2 -translate-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300"
        />
      </a>
    </aside>
  );
}
