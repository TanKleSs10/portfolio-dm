import Section from "@/components/shared/Section";
import { sections } from "@/lang/sections";
import { locale } from "@/types";
import { getLandingContent } from "@/lib/content/landingContent";
import { RichText } from "@/lib/content/types";

function renderRichText(segments: RichText) {
  return segments.map((segment, index) => {
    const key = `${segment.type}-${index}`;

    if (segment.type === "break") {
      return <br key={key} />;
    }

    if (segment.type === "highlight") {
      return (
        <span key={key} className="text-brand-folly">
          {segment.value}
        </span>
      );
    }

    if (segment.type === "bold") {
      return (
        <span key={key} className="font-bold">
          {segment.value}
        </span>
      );
    }

    return <span key={key}>{segment.value}</span>;
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: locale }>;
}) {
  const { locale } = await params;

  const content = await getLandingContent(locale);

  return (
    <>
      {sections.map((section, index) => {
        const contentSection = content.sections[index];
        const title = contentSection
          ? renderRichText(contentSection.title[locale])
          : section[locale].title;
        const description = contentSection
          ? renderRichText(contentSection.description[locale])
          : section[locale].description;

        return (
          <Section
            key={section.id}
            id={section.id}
            sectionName={contentSection?.name[locale] ?? section[locale].name}
            title={<>{title}</>}
            description={<>{description}</>}
          >
            {section.body(locale)}
          </Section>
        );
      })}
    </>
  );
}
