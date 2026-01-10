export type StrapiEntity<T> = {
  id: number;
  attributes: T;
};

export type StrapiRichTextBlock = {
  type: "paragraph";
  children: { type: "text"; text: string }[];
};

export type StrapiRichText = StrapiRichTextBlock[];

export type StrapiHeroAttributes = {
  headline: string;
  description: StrapiRichText;
  location: string;
};

export type StrapiSectionItem = {
  label: string;
  title: StrapiRichText;
  description: StrapiRichText;
};

export type StrapiLandingPageAttributes = {
  locale: string;
  hero: StrapiHeroAttributes;
  section: StrapiSectionItem[];
  localizations?: { data: StrapiEntity<StrapiLandingPageAttributes>[] };
};

export type StrapiLandingPagesResponse = {
  data: StrapiEntity<StrapiLandingPageAttributes>[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
