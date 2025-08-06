export default function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-on-surface-light hover:text-brand-folly transition-colors text-sm"
    >
      {children}
    </a>
  );
}
