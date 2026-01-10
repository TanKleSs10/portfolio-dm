import { strapiFetch } from "./strapiClient";
import { locale } from "@/types";
import {
  LandingContent,
  LocalizedText,
  RichText,
  SectionContent,
} from "@/lib/content/types";
import {
  StrapiLandingPageAttributes,
  StrapiLandingPagesResponse,
  StrapiRichText,
} from "./strapiTypes";
import { landingPagesResponseSchema } from "./strapiSchemas";

type LandingEntriesByLocale = Partial<Record<locale, StrapiLandingPageAttributes>>;
const SUPPORTED_LOCALES: locale[] = ["es", "en"];

function mapRichText(blocks?: StrapiRichText): RichText {
  if (!blocks?.length) return [];
  return blocks.flatMap((block, index) => {
    const text = block.children.map((child) => child.text).join("");
    const segments: RichText = text ? [{ type: "text", value: text }] : [];
    if (index < blocks.length - 1) {
      segments.push({ type: "break" });
    }
    return segments;
  });
}

function pickEntry(
  entriesByLocale: LandingEntriesByLocale,
  lang: locale,
) {
  return (
    entriesByLocale[lang] ??
    entriesByLocale.es ??
    entriesByLocale.en ??
    Object.values(entriesByLocale)[0]
  );
}

function localizedText(
  entriesByLocale: LandingEntriesByLocale,
  getter: (attrs: StrapiLandingPageAttributes) => string,
): LocalizedText {
  return SUPPORTED_LOCALES.reduce((acc, lang) => {
    const entry = pickEntry(entriesByLocale, lang);
    if (entry) acc[lang] = getter(entry);
    return acc;
  }, {} as LocalizedText);
}

function localizedRichText(
  entriesByLocale: LandingEntriesByLocale,
  getter: (attrs: StrapiLandingPageAttributes) => StrapiRichText | undefined,
): Record<locale, RichText> {
  return SUPPORTED_LOCALES.reduce((acc, lang) => {
    const entry = pickEntry(entriesByLocale, lang);
    if (entry) acc[lang] = mapRichText(getter(entry));
    return acc;
  }, {} as Record<locale, RichText>);
}

function normalizeSectionId(label: string) {
  const normalized = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  return normalized || "section";
}

function mapSectionsToContent(
  entriesByLocale: LandingEntriesByLocale,
): SectionContent[] {
  const baseEntry = pickEntry(entriesByLocale, "es");
  const baseSections = baseEntry?.section ?? [];

  return baseSections.map((section, index) => ({
    id: normalizeSectionId(section.label),
    name: localizedText(entriesByLocale, (entry) => {
      const value = entry.section?.[index]?.label;
      return value ?? section.label;
    }),
    title: localizedRichText(entriesByLocale, (entry) => {
      return entry.section?.[index]?.title;
    }),
    description: localizedRichText(entriesByLocale, (entry) => {
      return entry.section?.[index]?.description;
    }),
  }));
}

function mapLandingResponseToContent(
  response: StrapiLandingPagesResponse,
): LandingContent {
  if (!response.data.length) {
    throw new Error("Strapi landing pages response is empty");
  }

  const entriesByLocale = response.data.reduce<LandingEntriesByLocale>(
    (acc, entry) => {
      const entryLocale = entry.attributes.locale as locale;
      if (SUPPORTED_LOCALES.includes(entryLocale)) {
        acc[entryLocale] = entry.attributes;
      }
      return acc;
    },
    {},
  );

  const hero = {
    headline: localizedText(entriesByLocale, (entry) => entry.hero.headline),
    description: localizedRichText(
      entriesByLocale,
      (entry) => entry.hero.description,
    ),
    location: localizedText(entriesByLocale, (entry) => entry.hero.location),
  };

  const sections = mapSectionsToContent(entriesByLocale);

  return { hero, sections };
}

function buildLandingQuery() {
  const params = new URLSearchParams();
  params.set("populate", "*");
  params.set("locale", "all");
  return `?${params.toString()}`;
}

export async function fetchLandingContent(): Promise<LandingContent> {
  const response = await strapiFetch<StrapiLandingPagesResponse>(
    "/api/landing-pages",
    {
      query: buildLandingQuery(),
    },
  );

  const parsed = landingPagesResponseSchema.safeParse(response);
  if (!parsed.success) {
    throw new Error("Invalid Strapi landing pages response");
  }

  return mapLandingResponseToContent(parsed.data);
}

export function mapLandingPagesResponse(
  response: StrapiLandingPagesResponse,
): LandingContent {
  return mapLandingResponseToContent(response);
}
