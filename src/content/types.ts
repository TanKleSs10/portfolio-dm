import { locale } from "@/types";

export type Localized<T> = Record<locale, T>;

export interface HeroContentLocalized {
  headline: Localized<string>;
  subheadline: Localized<string>;
  primaryCta: {
    label: Localized<string>;
    href: string;
  };
  secondaryLinks: Array<{
    label: Localized<string>;
    href: string;
  }>;
  location: Localized<string>;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryLinks: Array<{
    label: string;
    href: string;
  }>;
  location: string;
}

export interface SectionBaseLocalized {
  id: string;
  name: Localized<string>;
  title: Localized<string>;
  description?: Localized<string>;
}

export interface SectionBase {
  id: string;
  name: string;
  title: string;
  description?: string;
}

export interface ValueBlockLocalized {
  title: Localized<string>;
  text: Localized<string>;
}

export interface ValueSectionLocalized extends SectionBaseLocalized {
  blocks: ValueBlockLocalized[];
  qualification: {
    workWithLabel: Localized<string>;
    workWith: Localized<string[]>;
    notForLabel: Localized<string>;
    notFor: Localized<string[]>;
  };
}

export interface ValueBlock {
  title: string;
  text: string;
}

export interface ValueSection extends SectionBase {
  blocks: ValueBlock[];
  qualification: {
    workWithLabel: string;
    workWith: string[];
    notForLabel: string;
    notFor: string[];
  };
}

export interface CaseCardLocalized {
  title: Localized<string>;
  problem: Localized<string>;
  decision: Localized<string>;
  impact: Localized<string>;
}

export interface CasesSectionLocalized extends SectionBaseLocalized {
  cards: CaseCardLocalized[];
}

export interface CaseCard {
  title: string;
  problem: string;
  decision: string;
  impact: string;
}

export interface CasesSection extends SectionBase {
  cards: CaseCard[];
}

export interface OfferCardLocalized {
  title: Localized<string>;
  from: Localized<string>;
  timeline: Localized<string>;
  scope: Localized<string>;
}

export interface OffersSectionLocalized extends SectionBaseLocalized {
  cards: OfferCardLocalized[];
}

export interface OfferCard {
  title: string;
  from: string;
  timeline: string;
  scope: string;
}

export interface OffersSection extends SectionBase {
  cards: OfferCard[];
}

export interface ServiceItemLocalized {
  title: Localized<string>;
  text: Localized<string>;
}

export interface ServicesSectionLocalized extends SectionBaseLocalized {
  subtitle?: Localized<string>;
  items: ServiceItemLocalized[];
  note?: Localized<string>;
}

export interface ServiceItem {
  title: string;
  text: string;
}

export interface ServicesSection extends SectionBase {
  subtitle?: string;
  items: ServiceItem[];
  note?: string;
}

export interface ProcessStepLocalized {
  title: Localized<string>;
  text: Localized<string>;
}

export interface ProcessSectionLocalized extends SectionBaseLocalized {
  approach?: Localized<string>;
  steps: ProcessStepLocalized[];
  closing?: Localized<string>;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ProcessSection extends SectionBase {
  approach?: string;
  steps: ProcessStep[];
  closing?: string;
}

export interface CtaLocalized {
  label: Localized<string>;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface FinalCtaSectionLocalized extends SectionBaseLocalized {
  primaryCta: CtaLocalized;
  secondaryCta?: CtaLocalized;
  scheduleEmbedUrl?: string;
}

export interface FinalCtaSection extends SectionBase {
  primaryCta: Cta;
  secondaryCta?: Cta;
  scheduleEmbedUrl?: string;
}

export interface FooterContentLocalized {
  name: string;
  email?: string;
  linkedin?: string;
  location?: Localized<string>;
}

export interface FooterContent {
  name: string;
  email?: string;
  linkedin?: string;
  location?: string;
}

export interface ContactFormContentLocalized {
  fields: {
    name: Localized<string>;
    lastName: Localized<string>;
    email: Localized<string>;
    message: Localized<string>;
  };
  submit: {
    idle: Localized<string>;
    loading: Localized<string>;
  };
}

export interface ContactFormContent {
  fields: {
    name: string;
    lastName: string;
    email: string;
    message: string;
  };
  submit: {
    idle: string;
    loading: string;
  };
}

export interface LandingContentLocalized {
  hero: HeroContentLocalized;
  sections: {
    value: ValueSectionLocalized;
    services: ServicesSectionLocalized;
    cases: CasesSectionLocalized;
    offers: OffersSectionLocalized;
    process: ProcessSectionLocalized;
    finalCta: FinalCtaSectionLocalized;
  };
  footer: FooterContentLocalized;
  contactForm: ContactFormContentLocalized;
}

export interface LandingContent {
  hero: HeroContent;
  sections: {
    value: ValueSection;
    services: ServicesSection;
    cases: CasesSection;
    offers: OffersSection;
    process: ProcessSection;
    finalCta: FinalCtaSection;
  };
  footer: FooterContent;
  contactForm: ContactFormContent;
}
