"use client";

import Image from "next/image";
import { SquareArrowOutUpRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tag from "./Tag";
import ProjectLink from "./ProjectLink";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: { url: string; alt: string };
  projectLink: string;
  demoLink?: string;
  technologies: string[];
  size?: "sm" | "md" | "lg"; // Tamaño opcional para el grid bento
}

export default function ProjectCard({
  title,
  description,
  image,
  projectLink,
  technologies,
  demoLink,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card normal */}
      <motion.article
        layout
        layoutId="project-card"
        className={`w-full h-full group bg-night-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.01] flex flex-col cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-on-surface-light text-xl font-unbounded font-bold">
            {title}
          </h2>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-light-variant hover:text-brand-folly transition-colors duration-200"
            aria-label={`Ir al proyecto ${title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <SquareArrowOutUpRight className="w-6 h-6" />
          </a>
        </div>
        <picture className="relative w-full aspect-video md:aspect-square lg:aspect-video flex-grow">
          <motion.div layoutId="project-image">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </motion.div>
        </picture>
      </motion.article>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-night-800 rounded-xl shadow-xl overflow-hidden w-[90vw] min-h-[280px] max-w-3xl cursor-default grid"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Imagen */}
                <motion.div className="relative w-full md:w-1/2 h-full aspect-video">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-center"
                  />
                </motion.div>

                {/* Contenido */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-evenly">
                  <h2 className="text-2xl font-unbounded font-bold text-on-surface-light">
                    {title}
                  </h2>
                  <p className="text-on-surface-light-variant text-sm">
                    {description}
                  </p>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Tag key={tech} tech={tech} />
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <ProjectLink href={projectLink}>
                      <Github className="w-4 h-4" />
                      GitHub
                    </ProjectLink>
                    {demoLink && (
                      <ProjectLink href={demoLink}>
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </ProjectLink>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
