import { locale } from "@/types";
import {
  LandingContent,
  LandingContentLocalized,
  Localized,
  HeroContent,
  HeroContentLocalized,
  ValueSection,
  ValueSectionLocalized,
  ServicesSection,
  ServicesSectionLocalized,
  CasesSection,
  CasesSectionLocalized,
  OffersSection,
  OffersSectionLocalized,
  ProcessSection,
  ProcessSectionLocalized,
  FinalCtaSection,
  FinalCtaSectionLocalized,
  FooterContent,
  FooterContentLocalized,
  ContactFormContent,
  ContactFormContentLocalized,
} from "@/content/types";
import { heroContent } from "@/content/sections/hero";
import { valueSection } from "@/content/sections/value";
import { servicesSection } from "@/content/sections/services";
import { offersSection } from "@/content/sections/offers";
import { casesSection } from "@/content/sections/cases";
import { processSection } from "@/content/sections/process";
import { finalCtaSection } from "@/content/sections/finalCta";
import { footerContent } from "@/content/footer";
import { contactFormContent } from "@/content/contactForm";
import { sectionOrder } from "@/content/sections/sectionOrder";

const landingContent: LandingContentLocalized = {
  hero: heroContent,
  sections: {
    value: valueSection,
    services: servicesSection,
    cases: casesSection,
    offers: offersSection,
    process: processSection,
    finalCta: finalCtaSection,
  },
  footer: footerContent,
  contactForm: contactFormContent,
};

function localize<T>(value: Localized<T>, lang: locale): T {
  return value[lang];
}

function localizeHero(content: HeroContentLocalized, lang: locale): HeroContent {
  return {
    headline: localize(content.headline, lang),
    subheadline: localize(content.subheadline, lang),
    primaryCta: {
      label: localize(content.primaryCta.label, lang),
      href: content.primaryCta.href,
    },
    secondaryLinks: content.secondaryLinks.map((link) => ({
      label: localize(link.label, lang),
      href: link.href,
    })),
    location: localize(content.location, lang),
  };
}

function localizeValue(content: ValueSectionLocalized, lang: locale): ValueSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    blocks: content.blocks.map((block) => ({
      title: localize(block.title, lang),
      text: localize(block.text, lang),
    })),
    qualification: {
      workWithLabel: localize(content.qualification.workWithLabel, lang),
      workWith: localize(content.qualification.workWith, lang),
      notForLabel: localize(content.qualification.notForLabel, lang),
      notFor: localize(content.qualification.notFor, lang),
    },
  };
}

function localizeServices(
  content: ServicesSectionLocalized,
  lang: locale,
): ServicesSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    subtitle: content.subtitle ? localize(content.subtitle, lang) : undefined,
    items: content.items.map((item) => ({
      title: localize(item.title, lang),
      text: localize(item.text, lang),
    })),
    note: content.note ? localize(content.note, lang) : undefined,
  };
}

function localizeCases(
  content: CasesSectionLocalized,
  lang: locale,
): CasesSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    cards: content.cards.map((card) => ({
      title: localize(card.title, lang),
      problem: localize(card.problem, lang),
      decision: localize(card.decision, lang),
      impact: localize(card.impact, lang),
    })),
  };
}

function localizeOffers(
  content: OffersSectionLocalized,
  lang: locale,
): OffersSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    cards: content.cards.map((card) => ({
      title: localize(card.title, lang),
      from: localize(card.from, lang),
      timeline: localize(card.timeline, lang),
      scope: localize(card.scope, lang),
    })),
  };
}

function localizeProcess(
  content: ProcessSectionLocalized,
  lang: locale,
): ProcessSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    approach: content.approach ? localize(content.approach, lang) : undefined,
    steps: content.steps.map((step) => ({
      title: localize(step.title, lang),
      text: localize(step.text, lang),
    })),
    closing: content.closing ? localize(content.closing, lang) : undefined,
  };
}

function localizeFinalCta(
  content: FinalCtaSectionLocalized,
  lang: locale,
): FinalCtaSection {
  return {
    id: content.id,
    name: localize(content.name, lang),
    title: localize(content.title, lang),
    description: content.description ? localize(content.description, lang) : undefined,
    scheduleEmbedUrl: content.scheduleEmbedUrl,
    primaryCta: {
      label: localize(content.primaryCta.label, lang),
      href: content.primaryCta.href,
    },
    secondaryCta: content.secondaryCta
      ? {
          label: localize(content.secondaryCta.label, lang),
          href: content.secondaryCta.href,
        }
      : undefined,
  };
}

function localizeFooter(
  content: FooterContentLocalized,
  lang: locale,
): FooterContent {
  return {
    name: content.name,
    email: content.email,
    linkedin: content.linkedin,
    location: content.location ? localize(content.location, lang) : undefined,
  };
}

function localizeContactForm(
  content: ContactFormContentLocalized,
  lang: locale,
): ContactFormContent {
  return {
    fields: {
      name: localize(content.fields.name, lang),
      lastName: localize(content.fields.lastName, lang),
      email: localize(content.fields.email, lang),
      message: localize(content.fields.message, lang),
    },
    submit: {
      idle: localize(content.submit.idle, lang),
      loading: localize(content.submit.loading, lang),
    },
  };
}

export function getLandingContent(lang: locale): LandingContent {
  return {
    hero: localizeHero(landingContent.hero, lang),
    sections: {
      value: localizeValue(landingContent.sections.value, lang),
      services: localizeServices(landingContent.sections.services, lang),
      cases: localizeCases(landingContent.sections.cases, lang),
      offers: localizeOffers(landingContent.sections.offers, lang),
      process: localizeProcess(landingContent.sections.process, lang),
      finalCta: localizeFinalCta(landingContent.sections.finalCta, lang),
    },
    footer: localizeFooter(landingContent.footer, lang),
    contactForm: localizeContactForm(landingContent.contactForm, lang),
  };
}

export { sectionOrder };
