import { locale } from "@/types";

export default function Footer({ locale }: { locale: locale }) {
  const year = 2026;
  const localeLabel = locale.toUpperCase();
  return (
    <footer className="md:w-[calc(100%-340px)] md:ml-[340px] bg-night-800 flex items-center justify-center gap-2 text-center text-sm font-unbounded py-5 rounded text-platinum-200">
      <p>
        {locale === "es" ? "Desarrollado por" : "Developed by"}{" "}
        <span className="font-bold text-brand-folly">Diego Meza</span>{" "}
        <time>{year}</time>
      </p>
      <span className="text-xs text-platinum-300">|</span>
      <span className="text-xs text-platinum-300">{localeLabel}</span>
    </footer>
  );
}
