import Section from "@/components/shared/Section";
import { sections } from "@/lang/sections";
import { locale } from "@/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          sectionName={section[locale].name}
          title={section[locale].title}
          description={section[locale].description}
        >
          {section.body(locale)}
        </Section>
      ))}
    </>
  );
}
