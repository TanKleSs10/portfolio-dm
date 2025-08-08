"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navOptions } from "./navOptions";
import NavLink from "../shared/NavLink";
import Link from "next/link";
import { motion } from "motion/react";
import { locale } from "@/types";

export default function Header({ locale }: { locale: locale }) {
  const [showHeader, setShowHeader] = useState(true);
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
        setShowHeader(false); // scroll down => hide
      } else {
        setShowHeader(true); // scroll up => show
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useActiveSection(["about-me", "skills", "projects", "contact"]);

  return (
    <motion.header
      animate={{
        y: showHeader ? 0 : -100,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="md:fixed top-0 w-full z-20 
        flex justify-end md:flex flex-wrap gap-4 @container md:justify-between md:max-w-[calc(100%-360px)] 
        rounded-b-lg mb-5 md:py-5 md:px-4 md:ml-[340px] 
       md:bg-night-700/40 md:backdrop-blur-md 
        md:backdrop-saturate-150 md:shadow-md"
    >
      <nav className="hidden md:block">
        <ul className="flex gap-5 font-unbounded text-xs @sm:text-sm @lg:text-lg">
          {navOptions.map((option) => (
            <NavLink
              key={option.href}
              href={option.href}
              active={activeSection === option.href}
            >
              {option.label[locale]}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Link
        href={locale === "es" ? "/en" : "/es"}
        className="inline-block w-fit font-unbounded cursor-pointer text-xs @md:text-base"
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
    </motion.header>
  );
}
