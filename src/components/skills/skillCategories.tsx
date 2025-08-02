"use client";

import { useState } from "react";
import Button from "./Button";
import TechnologiesCards from "./TechnologiesCards";
import { backend, devops, frontend, softSkills } from "./technologies";

type CategoryKey = "frontend" | "softSkills" | "devops" | "backend";

const categoryLabels: Record<CategoryKey, string> = {
  frontend: "Frontend",
  softSkills: "Habilidades blandas",
  devops: "Arquitectura & DevOps",
  backend: "Backend",
};

export default function SkillCategories() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("frontend");

  return (
    <div className="w-full space-y-5">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <Button
            active={selectedCategory === (key as CategoryKey)}
            key={key}
            onClick={() => setSelectedCategory(key as CategoryKey)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center py-5">
        {/* Contenido dinámico */}
        {selectedCategory === "frontend" && (
          <TechnologiesCards technologies={frontend} />
        )}
        {selectedCategory === "softSkills" && (
          <TechnologiesCards technologies={softSkills} />
        )}
        {selectedCategory === "devops" && (
          <TechnologiesCards technologies={devops} />
        )}
        {selectedCategory === "backend" && (
          <TechnologiesCards technologies={backend} />
        )}
      </div>
    </div>
  );
}
