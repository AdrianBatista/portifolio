import ResponsiveAppBar from "./components/interface/ResponsibleAppBar";
import "./App.css";
import { Typography } from "@mui/material";
import Panel from "./components/interface/Panel";
import ProjectSection from "./components/sections/ProjectsSection";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Panel
        canvas={true}
        background={{ type: "image", url: "/images/pc.jpg" }}
      >
        <Typography variant="h3" sx={{ color: "#DDD" }}>
          Adrian Batista
        </Typography>
      </Panel>
      <ProjectSection />
    </>
  );
}
