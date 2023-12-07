import HeroSection from "./Sections/HeroSection";
import LearningSection from "./Sections/LearningSection";
import OtherSection from "./Sections/OtherSection";
import ProjectSection from "./Sections/ProjectSection";
import SectionTechnologies from "./Sections/SectionTechnologies";

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
