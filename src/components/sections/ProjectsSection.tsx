import Panel from "../interface/Panel";
import { Typography, Divider, Container, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../interface/Card";

export default function ProjectSection() {
  return (
    <Panel background={{ color: "#FEFEFE" }}>
      <Container sx={{ marginBlock: 3 }}>
        <Typography variant="h4" mb={1}>
          My Projects
        </Typography>
        <Divider />
        <Grid container spacing={2} mt={1}>
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
        <Typography
          mt={1}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Button href="/projects">See more &#10132;</Button>
        </Typography>
      </Container>
    </Panel>
  );
}
