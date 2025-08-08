"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { navOptionsMobile } from "./navOptions";

export default function NavMobile() {
  return (
    <nav className="fixed inset-x-0 bottom-5 z-50 mx-auto w-11/12 max-w-md md:hidden rounded-2xl shadow-lg backdrop-blur-md bg-night-700/10 border border-night-800/20">
      <ul className="flex items-center justify-evenly px-3 py-2">
        {navOptionsMobile.map((option) => (
          <motion.li
            key={option.href}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-12 h-12 rounded-2xl border border-night-700/45 bg-gradient-to-tl from-night-800/30 to-night-700/30 shadow-lg backdrop-blur-md"
          >
            <Link
              href={option.href}
              className="flex items-center justify-center w-full h-full"
              aria-label={option.href.slice(1)}
            >
              {option.icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
