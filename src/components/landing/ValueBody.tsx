import { ValueBlock } from "@/content/types";
import QualificationBlock from "@/components/landing/QualificationBlock";

interface ValueBodyProps {
  blocks: ValueBlock[];
  workWithLabel: string;
  workWith: string[];
  notForLabel: string;
  notFor: string[];
}

export default function ValueBody({
  blocks,
  workWithLabel,
  workWith,
  notForLabel,
  notFor,
}: ValueBodyProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 @sm:grid-cols-2">
        {blocks.map((block) => (
          <article
            key={block.title}
            className="rounded-lg bg-night-800/60 p-5 shadow-md"
          >
            <h4 className="font-unbounded text-lg text-platinum-100">
              {block.title}
            </h4>
            <p className="mt-2 text-sm text-platinum-200 font-ibmPlex">
              {block.text}
            </p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 @sm:grid-cols-2">
        <QualificationBlock title={workWithLabel} items={workWith} />
        <QualificationBlock title={notForLabel} items={notFor} />
      </div>
    </div>
  );
}
