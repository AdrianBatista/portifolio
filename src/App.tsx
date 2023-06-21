import ResponsiveAppBar from "./components/interface/ResponsibleAppBar";
import "./App.css";
import { Paper, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Paper
        elevation={0}
        sx={{
          backgroundImage: "url('/images/pc.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <Typography variant="h3" sx={{ color: "#DDD" }}>
            Adrian Batista
          </Typography>
        </Paper>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          backgroundImage: "url('/images/pc.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <Typography variant="h3" sx={{ color: "#DDD" }}>
            Adrian Batista
          </Typography>
        </Paper>
      </Paper>
    </>
  );
}
