import ResponsiveAppBar from "./components/interface/ResponsibleAppBar";
import "./App.css";
import { Typography } from "@mui/material";
import Panel from "./components/interface/Panel";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Panel>
        <Typography variant="h3" sx={{ color: "#DDD" }}>
          Adrian Batista
        </Typography>
      </Panel>
      <Panel>
        <Typography variant="h3" sx={{ color: "#DDD" }}>
          Adrian Batista
        </Typography>
      </Panel>
    </>
  );
}
