import { ServiceItem } from "@/content/types";

interface ServicesBodyProps {
  items: ServiceItem[];
  note?: string;
}

export default function ServicesBody({ items, note }: ServicesBodyProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 @sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-night-700/40 bg-night-800/50 p-5"
          >
            <h4 className="font-unbounded text-base text-platinum-100">
              {item.title}
            </h4>
            <p className="mt-2 text-sm text-platinum-200 font-ibmPlex">
              {item.text}
            </p>
          </article>
        ))}
      </div>
      {note ? (
        <p className="text-sm text-platinum-200 font-ibmPlex">{note}</p>
      ) : null}
    </div>
  );
}
