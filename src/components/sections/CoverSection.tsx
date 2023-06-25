import { Box, Typography } from "@mui/material";
import Panel from "../interface/Panel";

export default function CoverSection() {
  return (
    <Panel canvas={true} background={{ type: "image", url: "/images/pc.jpg" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h3" sx={{ color: "#DDD" }}>
          HI! I'M <span style={{ color: "rgb(207, 255, 4)" }}>ADRIAN</span>
        </Typography>
        <Typography variant="h5" sx={{ color: "#DDD" }}>
          I TRANSFORM IDEAS INTO
        </Typography>
        <Typography variant="h5" sx={{ color: "rgb(207, 255, 4)" }}>
          POWERFULL SOLUTIONS
        </Typography>
      </Box>
    </Panel>
  );
}
