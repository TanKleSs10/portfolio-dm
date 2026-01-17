import { OfferCard } from "@/content/types";

interface OffersBodyProps {
  cards: OfferCard[];
}

export default function OffersBody({ cards }: OffersBodyProps) {
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
          <div className="mt-3 space-y-2 text-sm text-platinum-200 font-ibmPlex">
            <p>{card.from}</p>
            <p>{card.timeline}</p>
            <p>{card.scope}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
