"use client";

import { motion } from "motion/react";

interface DescriptionProps {
  children?: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <motion.p
      initial={{ scale: 0.9, translateY: 10, opacity: 0 }}
      whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
      className="font-ibmPlex text-base md:text-xl text-platinum-200"
    >
      {children}
    </motion.p>
  );
}
