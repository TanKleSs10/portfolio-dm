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
  return (
    <>
      {sectionOrder.map((sectionId) => {
        switch (sectionId) {
          case "value": {
            const section = content.sections.value;
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
          case "services": {
            const section = content.sections.services;
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
          case "offers": {
            const section = content.sections.offers;
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
          case "cases": {
            const section = content.sections.cases;
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
          case "process": {
            const section = content.sections.process;
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
          case "contact": {
            const section = content.sections.finalCta;
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
          }
          default:
            return null;
        }
      })}
    </>
  );
}
