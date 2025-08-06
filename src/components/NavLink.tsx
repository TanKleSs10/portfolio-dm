import clsx from "clsx";

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  active: boolean;
}

export default function NavLink({ children, href, active }: NavLinkProps) {
  return (
    <li className="cursor-pointer">
      <a
        href={href}
        className={clsx(
          "relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-current after:transition-all after:duration-300",
          {
            "after:w-full": active, // mantener el underline si está activo
            "after:w-0 hover:after:w-full": !active, // animar en hover si no está activo
          },
        )}
      >
        {children}
      </a>
    </li>
  );
}
