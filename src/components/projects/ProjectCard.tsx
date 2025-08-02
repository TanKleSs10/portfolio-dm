import Image from "next/image"; // Asumiendo Next.js Image
import { Ellipsis, SquareArrowOutUpRight } from "lucide-react";

// Si vas a pasar los datos como props, podrías tener una interfaz
// interface ProjectCardProps {
//   title: string;
//   imageUrl: string;
//   altText: string;
//   projectLink: string;
//   // Puedes añadir más props si las tarjetas tienen variaciones (ej. tipo de proyecto, tecnologías)
// }

export default function ProjectCard() {
  // Eliminamos props por ahora, ya que mencionaste datos genéricos
  // Datos genéricos (los reemplazarás con props después)
  const title = "Nombre del Proyecto";
  const imageUrl =
    "https://images.unsplash.com/photo-1530435460869-d13625c69bbf";
  const altText = "Captura de pantalla del proyecto de tienda de café";
  const projectLink = "#"; // Reemplazar con el enlace real del proyecto

  return (
    <article className="flex flex-col bg-night-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] group">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-on-surface-light text-xl font-unbounded font-bold">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <button
            className="text-on-surface-light-variant hover:text-brand-folly transition-colors duration-200"
            aria-label="Más detalles del proyecto"
          >
            <Ellipsis className="w-6 h-6" />
          </button>
          <a
            href={projectLink}
            target="_blank" // Abre en nueva pestaña
            rel="noopener noreferrer" // Seguridad
            className="text-on-surface-light-variant hover:text-brand-folly transition-colors duration-200"
            aria-label={`Ir al proyecto ${title}`}
          >
            <SquareArrowOutUpRight className="w-6 h-6" />
          </a>
        </div>
      </div>

      <picture className="relative w-full aspect-video md:aspect-square lg:aspect-video flex-grow">
        <Image
          src={imageUrl}
          alt={altText}
          fill // Hace que la imagen ocupe todo el espacio del padre
          className="object-cover transition-transform" // Efecto hover en la imagen
        />
      </picture>
    </article>
  );
}
