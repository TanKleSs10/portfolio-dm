import { CaseCard } from "@/content/types";

interface CasesBodyProps {
  cards: CaseCard[];
}

export default function CasesBody({ cards }: CasesBodyProps) {
  return (
    <div className="grid gap-4 @md:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-lg border border-night-700/40 bg-night-800/50 p-5"
        >
          <h4 className="font-unbounded text-base text-platinum-100">
            {card.title}
          </h4>
          <div className="mt-3 space-y-3 text-sm text-platinum-200 font-ibmPlex">
            <p>
              <span className="font-bold">Problema:</span> {card.problem}
            </p>
            <p>
              <span className="font-bold">Decision:</span> {card.decision}
            </p>
            <p>
              <span className="font-bold">Impacto:</span> {card.impact}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
