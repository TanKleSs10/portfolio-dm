import { fetchLandingContent } from "@/lib/cms/strapiAdapter";
import { locale } from "@/types";
import { LandingContent } from "./types";
import { sectionsContent } from "@/content/sections";

type LandingContentByLocale = Record<locale, LandingContent>;

function localFallbackContent(): LandingContentByLocale {
  const baseByLocale = sectionsContent.reduce<LandingContentByLocale>(
    (acc, section) => {
      (Object.keys(section.name) as locale[]).forEach((lang) => {
        if (!acc[lang]) {
          acc[lang] = {
            hero: {
              headline: { es: "", en: "" },
              description: { es: [], en: [] },
              location: { es: "", en: "" },
            },
          sections: [],
        };
      }
        acc[lang].sections.push({
          id: section.id,
          name: section.name,
          title: {
            es: section.title.es,
            en: section.title.en,
          },
          description: {
            es: section.description.es,
            en: section.description.en,
          },
        });
      });

      return acc;
    },
    {} as LandingContentByLocale,
  );

  return baseByLocale;
}

function emptyHero(): LandingContent["hero"] {
  return {
    headline: { es: "", en: "" },
    description: { es: [], en: [] },
    location: { es: "", en: "" },
  };
}

export async function getLandingContent(
  lang: locale,
): Promise<LandingContent> {
  try {
    const cmsContent = await fetchLandingContent();
    return {
      hero: cmsContent.hero ?? emptyHero(),
      sections: cmsContent.sections,
    };
  } catch (error) {
    const fallback = localFallbackContent();
    return {
      hero: fallback[lang]?.hero ?? emptyHero(),
      sections: fallback[lang]?.sections ?? [],
    };
  }
}
