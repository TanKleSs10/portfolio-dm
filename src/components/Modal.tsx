"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ModalProps {
  title: string;
  url: string;
  children: React.ReactNode;
}

export default function Modal({ title, url, children }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false); // controla render
  const [isVisible, setIsVisible] = useState(false); // controla animación

  const openModal = () => {
    setIsMounted(true);
    setTimeout(() => setIsVisible(true), 10); // deja que monte antes de animar
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), 300); // espera animación de salida
  };

  return (
    <>
      <button
        onClick={openModal}
        className="group w-full h-full relative font-unbounded font-bold text-sm md:text-xl p-2 bg-night-900/80 hover:bg-night-900/10 transition-all duration-300"
      >
        <Image
          src={url}
          fill
          className="absolute -z-10 object-cover group-hover:scale-110 transition-all duration-300"
          alt={title}
        />
        <span className="group-hover:opacity-0 transition-all duration-300">
          {title}
        </span>
      </button>

      {isMounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-night-800/80 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <dialog
            open
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-5/6 md:max-w-8/12 bg-night-900 text-platinum-100 font-ibmPlex rounded-xl shadow-lg p-6 mx-auto transform transition-all duration-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <header className="mb-4 flex justify-end">
              <button
                className="bg-red-500/30 p-2 rounded-lg text-red-500"
                onClick={closeModal}
              >
                <X />
              </button>
            </header>
            <h1 className="text-2xl font-unbounded mb-4">{title}</h1>

            {/* Contenido con scroll si es muy largo */}
            <main className="space-y-2 overflow-y-auto max-h-[60vh] pr-2">
              {children}
            </main>
          </dialog>
        </div>
      )}
    </>
  );
}
