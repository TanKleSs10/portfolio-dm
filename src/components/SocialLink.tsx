export default function SocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="border-2 p-2 border-brand-folly text-brand-folly rounded-2xl hover:-translate-y-1 hover:scale-105 transition-transform durantion-300"
      target="_blank"
    >
      {children}
    </a>
  );
}
