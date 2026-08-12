import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import OpenSourceSection from "./components/OpenSourceSection";
import AwardsSection from "./components/AwardsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ResearchSection />
      <OpenSourceSection />
      <AwardsSection />
      <EducationSection />
      <Footer />
    </div>
  );
}
