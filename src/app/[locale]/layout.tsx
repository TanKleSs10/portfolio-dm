import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locale } from "@/types";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import NavMobile from "@/components/layout/NavMobile";
import ToastNotification from "@/components/shared/ToastNotification";
import { seoContent } from "@/content/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return seoContent[locale];
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
