"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";

export default function Header({ locale }: { locale: "es" | "en" }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeSection = useActiveSection([
    "about-me",
    "skills",
    "projects",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false); // ocultar si scrolleas hacia abajo
      } else {
        setVisible(true); // mostrar si subes
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "md:fixed top-0 w-full z-20 transition-transform duration-300",
        "flex justify-end md:justify-between md:max-w-[calc(100%-360px)] rounded-b-lg mb-5 md:py-5 md:px-4 md:ml-[340px] w-full",
        "md:bg-night-700/40 md:backdrop-blur-md md:backdrop-saturate-150 md:shadow-md",
        {
          "md:-translate-y-full": !visible,
          "md:translate-y-0": visible,
        },
      )}
    >
      <nav className="hidden md:block">
        <ul className="flex gap-5 font-unbounded text-lg">
          <NavLink href="#about-me" active={activeSection === "#about-me"}>
            {locale === "es" ? "Sobre mí" : "About me"}
          </NavLink>
          <NavLink href="#skills" active={activeSection === "#skills"}>
            {locale === "es" ? "Habilidades" : "Skills"}
          </NavLink>
          <NavLink href="#projects" active={activeSection === "#projects"}>
            {locale === "es" ? "Proyectos" : "Projects"}
          </NavLink>
          <NavLink href="#contact" active={activeSection === "#contact"}>
            {locale === "es" ? "Contacto" : "Contact"}
          </NavLink>
        </ul>
      </nav>
      <Link
        href={locale === "es" ? "/en" : "/es"}
        className="inline-block w-fit font-unbounded cursor-pointer text-sm"
      >
        <span
          className={`${locale == "en" ? "text-brand-folly font-bold" : ""}`}
        >
          En
        </span>{" "}
        |{" "}
        <span
          className={`${locale == "es" ? "text-brand-folly font-bold" : ""}`}
        >
          Es
        </span>
      </Link>
    </header>
  );
}
