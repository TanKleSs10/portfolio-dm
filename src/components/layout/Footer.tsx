import { locale } from "@/types";

export default function Footer({ locale }: { locale: locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="md:w-[calc(100%-340px)] md:ml-[340px] bg-night-800 flex justify-center items-center text-sm font-unbounded py-5 rounded text-platinum-200 gap-2">
      <p>
        © {locale === "es" ? "Desarrollado por" : "Developed by"}{" "}
        <span className="font-bold text-brand-folly"> Diego Meza</span>,{" "}
        <time>{year}</time>
      </p>
    </footer>
  );
}
