interface QualificationBlockProps {
  title: string;
  items: string[];
}

export default function QualificationBlock({
  title,
  items,
}: QualificationBlockProps) {
  return (
    <div className="rounded-lg border border-night-700/40 bg-night-800/50 p-5">
      <h4 className="font-unbounded text-base text-platinum-100">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-platinum-200 font-ibmPlex">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-folly" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
