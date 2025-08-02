interface IModal {
  title: string;
  gridArea: string;
  url: string;
  content: string | React.ReactNode;
}

export const modals: IModal[] = [
  {
    title: "Experiencia laboral (no tech)",
    url: "https://images.unsplash.com/photo-1653566031587-74f7d86a2e71",
    gridArea: "col-span-4 row-span-4",
    content: (
      <>
        <p>
          Antes de especializarme en desarrollo web, trabajé más de 6 años en
          atención a clientes, ventas, cobranza y análisis de datos en empresas
          como BBVA, HSBC, Santander, Palacio de Hierro e Izzi.
        </p>
        <p>
          Durante ese tiempo, adquirí experiencia con herramientas como
          Salesforce, Shopify, Magento, Siebel (Oracle) y hojas de cálculo
          avanzadas en Excel.
        </p>
        <p>Gracias a ese camino desarrollé habilidades clave como:</p>
        <ul className="list-disc pl-5">
          <li>Comunicación efectiva y profesional.</li>
          <li>Resolución de problemas y toma de decisiones.</li>
          <li>Gestión del tiempo y análisis de datos.</li>
          <li>Trabajo bajo presión.</li> {/* Se añadió punto al final */}
        </ul>
        <p>
          Hoy aplico todo eso construyendo software, contribuyendo y
          colaborando. {/* Se añadió coma y se hizo más fluida */}
        </p>
      </>
    ),
  },
  {
    title: "Educación",
    url: "https://images.unsplash.com/photo-1616017640739-44ce2bfd9b4e",
    gridArea: "col-span-2 row-span-2",
    content: (
      <>
        <p>
          Mi formación en programación e informática es un reflejo de una
          curiosidad inmedible y una pasión profunda. Inicié mi camino
          explorando las tecnologías web con el deseo de dar forma y visibilidad
          a mis ideas.
        </p>

        <p>
          Desde el principio, me enfoqué en comprender a fondo los fundamentos.
        </p>

        <p>
          Aunque gran parte de mi aprendizaje ha sido autodidacta, mi educación
          universitaria en la Licenciatura en Ciencias de la Informática (IPN
          UPICSA) complementó y fortaleció mis bases teóricas, expandiendo mi
          curiosidad a diversos temas de la informática y metodologías ágiles.
        </p>

        <p>
          El camino del aprendizaje es interminable, y en ese camino continuo y
          constante, mi compromiso es con la excelencia. Estoy preparado para
          aplicar mis conocimientos y habilidades para ayudarte a construir
          soluciones sólidas y con propósito en mi área de experiencia.
        </p>
      </>
    ),
  },
  {
    title: "Filosofía",
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    gridArea: "col-span-2 row-span-2",
    content: (
      <>
        <p>
          Mi filosofía se rige por una convicción central:{" "}
          <q className="italic">
            Los grandes resultados requieren grandes ambiciones
          </q>{" "}
          —{" "}
          <a
            className="text-brand-folly"
            href="https://www.worldhistory.org/trans/es/1-10000/heraclito-de-efeso/"
            target="_blank" // Agregado para abrir en nueva pestaña
            rel="noopener noreferrer" // Agregado por seguridad
          >
            Heráclito
          </a>
          . Esta frase me impulsa a no conformarme con lo ordinario.
        </p>

        <p>
          Para mí, la ambición se traduce en un firme compromiso con la{" "}
          <span className="font-bold">disciplina</span>, el{" "}
          <span className="font-bold">aprendizaje constante</span> y la{" "}
          <span className="font-bold">colaboración genuina</span>. Creo que el
          progreso, tanto en la tecnología como en la sociedad, surge cuando la
          ambición positiva se une al esfuerzo de cada persona y a la capacidad
          de adaptarnos y evolucionar.
        </p>
      </>
    ),
  },
  {
    title: "Intereses personales",
    url: "https://images.unsplash.com/photo-1495175448924-1d9a30c90a42",
    gridArea: "col-span-6 row-span-2",
    content: (
      <>
        <p>
          Mi vida vibra con pasiones que alimentan mi creatividad y curiosidad.
          La <span className="font-bold">música</span>, el{" "}
          <span className="font-bold">Hip Hop</span>, y aprender a tocar
          guitarra o ser DJ, me conectan con el ritmo y la originalidad. Me
          sumerjo en la <span className="font-bold">fotografía</span> para
          capturar perspectivas y en la{" "}
          <span className="font-bold">lectura</span> para expandir mi mente.
        </p>

        <p>
          La <span className="font-bold">programación</span> es una de mis
          grandes pasiones, más allá de ser mi profesión. Complemento mi energía
          con los <span className="font-bold">videojuegos</span>, el{" "}
          <span className="font-bold">ejercicio</span> y el dinamismo de la{" "}
          <span className="font-bold">vida social</span>.
        </p>

        <p>
          Por encima de todo, valoro profundamente el{" "}
          <span className="font-bold">
            aprender de las experiencias y perspectivas de otras personas
          </span>
          .
        </p>
      </>
    ),
  },
];
