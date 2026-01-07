import AboutMeBody from "@/components/aboutMe/AboutMeBody";
import ContactBody from "@/components/contact/ContactBody";
import ProjectsBody from "@/components/projects/ProjectsBody";
import SkillBody from "@/components/skills/skillsBody";
import { sectionsContent } from "@/content/sections";
import { RichText } from "@/content/types";
import { locale } from "@/types";

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

const bodyBySectionId: Record<string, (locale: locale) => React.ReactElement> =
  {
  "about-me": (lang) => <AboutMeBody locale={lang} />,
  skills: (lang) => <SkillBody locale={lang} />,
  projects: (lang) => <ProjectsBody locale={lang} />,
  contact: (lang) => <ContactBody locale={lang} />,
  };

export const sections = sectionsContent.map((section) => {
  const body = bodyBySectionId[section.id];

  if (!body) {
    throw new Error(`Missing body component for section: ${section.id}`);
  }

  return {
    id: section.id,
    body,
    es: {
      name: section.name.es,
      title: <>{renderRichText(section.title.es)}</>,
      description: <>{renderRichText(section.description.es)}</>,
    },
    en: {
      name: section.name.en,
      title: <>{renderRichText(section.title.en)}</>,
      description: <>{renderRichText(section.description.en)}</>,
    },
  };
});
