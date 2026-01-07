import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locale } from "@/types";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import NavMobile from "@/components/layout/NavMobile";
import ToastNotification from "@/components/shared/ToastNotification";

const metadataByLocale: Record<locale, Metadata> = {
  es: {
    title: "Portafolio - Diego Meza",
    description:
      "Desarrollador web Full Stack enfocado en crear experiencias accesibles, eficientes y visualmente impactantes.",
    keywords: [
      "portafolio",
      "desarrollador web",
      "diseño web",
      "freelancer",
      "front-end",
      "back-end",
      "astro",
      "react",
    ],
    alternates: {
      canonical: "https://tusitio.com/es",
      languages: {
        en: "https://tusitio.com/en",
      },
    },
  },
  en: {
    title: "Diego Meza Portfolio",
    description:
      "Full Stack web developer focused on building accessible, efficient, and visually impactful experiences.",
    keywords: [
      "portfolio",
      "web developer",
      "web design",
      "freelancer",
      "front-end",
      "back-end",
      "astro",
      "react",
    ],
    alternates: {
      canonical: "https://tusitio.com/en",
      languages: {
        es: "https://tusitio.com/es",
      },
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metadataByLocale[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: locale }>;
}>) {
  const { locale } = await params;

  if (locale !== "es" && locale !== "en") {
    notFound();
  }

  return (
    <>
      <Header locale={locale} />
      <Sidebar locale={locale} />
      <NavMobile />
      <main className="my-5 @container md:w-[calc(100%-340px)] md:ml-[340px] w-full md:mt-26 md:mx-5 space-y-10">
        {children}
      </main>
      <Footer locale={locale} />
      <ToastNotification />
    </>
  );
}
