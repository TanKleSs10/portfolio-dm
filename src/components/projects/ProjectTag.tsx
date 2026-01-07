export default function ProjectTag({ tech }: { tech: string }) {
  return (
    <li className="px-2 py-1 bg-night-700 text-platinum-200 text-xs rounded">
      {tech}
    </li>
  );
}
