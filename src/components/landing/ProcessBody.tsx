import { ProcessStep } from "@/content/types";

interface ProcessBodyProps {
  steps: ProcessStep[];
  closing?: string;
}

export default function ProcessBody({ steps, closing }: ProcessBodyProps) {
  return (
    <div className="space-y-6">
      <ol className="grid gap-4 @sm:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.title}
            className="rounded-lg border border-night-700/40 bg-night-800/50 p-5"
          >
            <h4 className="font-unbounded text-base text-platinum-100">
              {step.title}
            </h4>
            <p className="mt-2 text-sm text-platinum-200 font-ibmPlex">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
      {closing ? (
        <p className="text-sm text-platinum-200 font-ibmPlex">{closing}</p>
      ) : null}
    </div>
  );
}
