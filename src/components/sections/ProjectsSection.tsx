import Panel from "../interface/Panel";
import { Paper, Typography, Divider, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../interface/Card";

export default function ProjectSection() {
  return (
    <Panel background={{ color: "#FEFEFE" }}>
      <Container sx={{ p: 3, m: 3 }}>
        <Typography variant="h4" mb={1}>
          My Projects
        </Typography>
        <Divider />
        <Grid container spacing={2} mt={2}>
          <Grid xs={12} sm={6} md={4} xl={3}>
            <Card />
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3}>
            <Card />
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3}>
            <Card />
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </Panel>
  );
}