import "./App.css";
import ResponsiveAppBar from "./components/interface/ResponsibleAppBar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import CoverSection from "./components/sections/CoverSection";
import ProjectSection from "./components/sections/ProjectsSection";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <CoverSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
