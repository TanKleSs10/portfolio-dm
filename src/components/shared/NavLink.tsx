import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
  href: string; // debe ser "#value", "#services", etc.
  children: React.ReactNode;
  active: boolean;
}

export default function NavLink({ children, href, active }: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const fullHref = `${pathname}${href}`;
    router.push(fullHref);
  };

  return (
    <li className="cursor-pointer">
      <Link
        href={href} // Solo usamos el hash aquí para el href del enlace
        onClick={handleClick}
        className={clsx(
          "relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-current after:transition-all after:duration-300",
          {
            "after:w-full": active,
            "after:w-0 hover:after:w-full": !active,
          },
        )}
      >
        {children}
      </Link>
    </li>
  );
}
