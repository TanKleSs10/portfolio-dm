import Section from "@/components/shared/Section";
import ValueBody from "@/components/landing/ValueBody";
import ServicesBody from "@/components/landing/ServicesBody";
import OffersBody from "@/components/landing/OffersBody";
import CasesBody from "@/components/landing/CasesBody";
import ProcessBody from "@/components/landing/ProcessBody";
import FinalCtaBody from "@/components/landing/FinalCtaBody";
import { locale } from "@/types";
import { getLandingContent, sectionOrder } from "@/content";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: locale }>;
}) {
  const { locale } = await params;

  const content = getLandingContent(locale);
  const sectionsById = {
    value: content.sections.value,
    services: content.sections.services,
    offers: content.sections.offers,
    cases: content.sections.cases,
    process: content.sections.process,
    contact: content.sections.finalCta,
  };

  return (
    <>
      {sectionOrder.map((sectionId) => {
        const section = sectionsById[sectionId];
        if (!section) {
          return null;
        }

        if (sectionId === "value") {
          return (
            <Section
              key={section.id}
              id={section.id}
              sectionName={section.name}
              title={section.title}
              description={section.description}
            >
              <ValueBody
                blocks={section.blocks}
                workWithLabel={section.qualification.workWithLabel}
                workWith={section.qualification.workWith}
                notForLabel={section.qualification.notForLabel}
                notFor={section.qualification.notFor}
              />
            </Section>
          );
        }

        if (sectionId === "services") {
          return (
            <Section
              key={section.id}
              id={section.id}
              sectionName={section.name}
              title={section.title}
              description={section.subtitle}
            >
              <ServicesBody items={section.items} note={section.note} />
            </Section>
          );
        }

        if (sectionId === "offers") {
          return (
            <Section
              key={section.id}
              id={section.id}
              sectionName={section.name}
              title={section.title}
              description={section.description}
            >
              <OffersBody cards={section.cards} />
            </Section>
          );
        }

        if (sectionId === "cases") {
          return (
            <Section
              key={section.id}
              id={section.id}
              sectionName={section.name}
              title={section.title}
              description={section.description}
            >
              <CasesBody cards={section.cards} />
            </Section>
          );
        }

        if (sectionId === "process") {
          return (
            <Section
              key={section.id}
              id={section.id}
              sectionName={section.name}
              title={section.title}
              description={section.approach}
            >
              <ProcessBody steps={section.steps} closing={section.closing} />
            </Section>
          );
        }

        return (
          <Section
            key={section.id}
            id={section.id}
            sectionName={section.name}
            title={section.title}
            description={section.description}
          >
            <FinalCtaBody
              locale={locale}
              primaryCta={section.primaryCta}
              secondaryCta={section.secondaryCta}
              scheduleEmbedUrl={section.scheduleEmbedUrl}
              formContent={content.contactForm}
            />
          </Section>
        );
      })}
    </>
  );
}
