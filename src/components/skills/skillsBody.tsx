"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";
import TechnologiesCards from "./TechnologiesCards";
import { techLabel } from "./technologiesLabels";
import { locale } from "@/types";

export default function SkillBody({ locale }: { locale: locale }) {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="w-full space-y-5">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {techLabel.map((tech) => (
          <Button
            active={selectedCategory === tech.id}
            key={tech.id}
            onClick={() => setSelectedCategory(tech.id)}
          >
            {tech.name[locale]}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center py-5 relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-wrap justify-center items-center"
          >
            <TechnologiesCards
              technologies={techLabel[selectedCategory - 1].technologies}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
