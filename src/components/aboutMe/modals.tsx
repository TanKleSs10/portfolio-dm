interface IModal {
  title: { es: string; en: string };
  gridArea: string;
  url: string;
  content: { es: string | React.ReactNode; en: string | React.ReactNode };
}

export const modals: IModal[] = [
  {
    title: {
      es: "Experiencia laboral (no tech)",
      en: "Work Experience (Non-Tech)",
    },
    url: "https://images.unsplash.com/photo-1653566031587-74f7d86a2e71",
    gridArea: "col-span-4 row-span-4",
    content: {
      es: (
        <>
          <p>
            Antes de especializarme en desarrollo web, trabajé más de 6 años en
            atención a clientes, ventas, cobranza y análisis de datos en
            empresas como BBVA, HSBC, Santander, Palacio de Hierro e Izzi.
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
            <li>Trabajo bajo presión.</li>
          </ul>
          <p>
            Hoy aplico todo eso construyendo software, contribuyendo y
            colaborando.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Before specializing in web development, I spent over 6 years in
            customer service, sales, collections, and data analysis at companies
            like BBVA, HSBC, Santander, Palacio de Hierro, and Izzi.
          </p>
          <p>
            During that time, I gained hands-on experience with tools such as
            Salesforce, Shopify, Magento, Siebel (Oracle), and advanced Excel
            spreadsheets.
          </p>
          <p>This journey helped me develop key skills such as:</p>
          <ul className="list-disc pl-5">
            <li>Effective and professional communication.</li>
            <li>Problem-solving and decision-making.</li>
            <li>Time management and data analysis.</li>
            <li>Working under pressure.</li>
          </ul>
          <p>
            Today, I leverage all of that experience to build software,
            contribute, and collaborate effectively.
          </p>
        </>
      ),
    },
  },
  {
    title: {
      es: "Educación",
      en: "Education",
    },
    url: "https://images.unsplash.com/photo-1616017640739-44ce2bfd9b4e",
    gridArea: "col-span-2 row-span-2",
    content: {
      es: (
        <>
          <p>
            Mi formación en programación e informática es un reflejo de una
            curiosidad inmedible y una pasión profunda. Inicié mi camino
            explorando las tecnologías web con el deseo de dar forma y
            visibilidad a mis ideas.
          </p>
          <p>
            Desde el principio, me enfoqué en comprender a fondo los
            fundamentos.
          </p>
          <p>
            Aunque gran parte de mi aprendizaje ha sido autodidacta, mi
            educación universitaria en la Licenciatura en Ciencias de la
            Informática (IPN UPICSA) complementó y fortaleció mis bases
            teóricas, expandiendo mi curiosidad a diversos temas de la
            informática y metodologías ágiles.
          </p>
          <p>
            El camino del aprendizaje es interminable, y en ese camino continuo
            y constante, mi compromiso es con la excelencia. Estoy preparado
            para aplicar mis conocimientos y habilidades para ayudarte a
            construir soluciones sólidas y con propósito en mi área de
            experiencia.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            My background in programming and computer science reflects an
            unmeasurable curiosity and a deep passion for technology. I began my
            journey exploring web technologies with the desire to bring my ideas
            to life and give them visibility.
          </p>
          <p>
            From the very beginning, I focused on fully understanding the
            fundamentals.
          </p>
          <p>
            Although much of my learning has been self-taught, my academic
            training in Computer Science at IPN UPICSA strengthened my
            theoretical foundation, expanding my curiosity into diverse fields
            of computing and agile methodologies.
          </p>
          <p>
            Learning is an endless journey, and through this continuous process,
            I stay committed to excellence. I am ready to apply my knowledge and
            skills to help build meaningful and robust solutions within my area
            of expertise.
          </p>
        </>
      ),
    },
  },
  {
    title: { es: "Filosofía", en: "Philosophy" },
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    gridArea: "col-span-2 row-span-2",
    content: {
      es: (
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
              target="_blank"
              rel="noopener noreferrer"
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
            progreso, tanto en la tecnología como en la sociedad, surge cuando
            la ambición positiva se une al esfuerzo de cada persona y a la
            capacidad de adaptarnos y evolucionar.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            My philosophy is driven by a core belief:{" "}
            <q className="italic">Great results require great ambitions</q> —{" "}
            <a
              className="text-brand-folly"
              href="https://www.worldhistory.org/heraclitus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heraclitus
            </a>
            . This thought pushes me to never settle for the ordinary.
          </p>
          <p>
            For me, ambition translates into a strong commitment to{" "}
            <span className="font-bold">discipline</span>,{" "}
            <span className="font-bold">continuous learning</span>, and{" "}
            <span className="font-bold">genuine collaboration</span>. I believe
            progress—both in technology and society—emerges when positive
            ambition combines with effort, adaptability, and the ability to
            evolve.
          </p>
        </>
      ),
    },
  },
  {
    title: { es: "Intereses personales", en: "Personal Interests" },
    url: "https://images.unsplash.com/photo-1495175448924-1d9a30c90a42",
    gridArea: "col-span-6 row-span-2",
    content: {
      es: (
        <>
          <p>
            Mi vida vibra con pasiones que alimentan mi creatividad y
            curiosidad. La <span className="font-bold">música</span>, el{" "}
            <span className="font-bold">Hip Hop</span>, y aprender a tocar
            guitarra o ser DJ, me conectan con el ritmo y la originalidad. Me
            sumerjo en la <span className="font-bold">fotografía</span> para
            capturar perspectivas y en la{" "}
            <span className="font-bold">lectura</span> para expandir mi mente.
          </p>
          <p>
            La <span className="font-bold">programación</span> es una de mis
            grandes pasiones, más allá de ser mi profesión. Complemento mi
            energía con los <span className="font-bold">videojuegos</span>, el{" "}
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
      en: (
        <>
          <p>
            My life resonates with passions that fuel my creativity and
            curiosity. <span className="font-bold">Music</span>,{" "}
            <span className="font-bold">Hip Hop</span>, and learning to play the
            guitar or become a DJ connect me with rhythm and originality. I dive
            into <span className="font-bold">photography</span> to capture
            unique perspectives and into{" "}
            <span className="font-bold">reading</span> to expand my mind.
          </p>
          <p>
            <span className="font-bold">Programming</span> is one of my greatest
            passions—beyond just being my profession. I balance my energy with{" "}
            <span className="font-bold">video games</span>,{" "}
            <span className="font-bold">exercise</span>, and the dynamism of{" "}
            <span className="font-bold">social life</span>.
          </p>
          <p>
            Above all, I deeply value{" "}
            <span className="font-bold">
              learning from the experiences and perspectives of others
            </span>
            .
          </p>
        </>
      ),
    },
  },
];
