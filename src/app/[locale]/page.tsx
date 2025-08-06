import Section from "@/components/Section";
import { sections } from "@/lang/sections";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          sectionName={section[locale as "es" | "en"].name}
          title={section[locale as "es" | "en"].title}
          description={section[locale as "es" | "en"].description}
        >
          {section.body(locale as "es" | "en")}
        </Section>
      ))}
    </>
  );
}
