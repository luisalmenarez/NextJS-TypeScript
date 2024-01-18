import HeroSection from "./sections/hero-section";
import LearningSection from "./sections/learning-section";
import OtherSection from "./sections/other-section";
import ProjectSection from "./sections/project-section";
import SectionTechnologies from "./sections/section-technologies";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <LearningSection />
      <SectionTechnologies />
      <OtherSection />
    </>
  );
}
