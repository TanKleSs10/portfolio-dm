"use client";

import { motion } from "motion/react";

interface TitleSectionProps {
  children?: React.ReactNode;
}

export default function TitleSection({ children }: TitleSectionProps) {
  return (
    <motion.h3
      initial={{ opacity: 0, translateX: -20 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
      className="text-3xl md:text-4xl font-unbounded tracking-wider text-platinum-100"
    >
      {children}
    </motion.h3>
  );
}
