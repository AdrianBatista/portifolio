import { Typography } from "@mui/material";
import Panel from "../interface/Panel";

export default function CoverSection() {
  return (
    <Panel canvas={true} background={{ type: "image", url: "/images/pc.jpg" }}>
      <Typography variant="h3" sx={{ color: "#DDD" }}>
        Adrian Batista
      </Typography>
    </Panel>
  );
}
