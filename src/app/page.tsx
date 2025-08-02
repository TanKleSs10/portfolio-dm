import AboutMeSection from "@/components/aboutMe/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
