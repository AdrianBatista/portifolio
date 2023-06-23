import Panel from "../interface/Panel";
import { Typography, Divider, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../interface/Card";

type TProject = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: TProject[] = [
  {
    title: "IEEE Ilha Solteira",
    description:
      "This website was developed to a IEEE student branch in 2016. This was my first experience in this area. This site also has a panel where some users can create new posts and register new courses.",
    image: "/images/isaieee.png",
    link: "https://isaieee.com",
  },
  {
    title: "Adrian's Portfolio",
    description:
      "This is the current website that I made to shows my last projects. This site uses the React Framework and MUI library.",
    image: "/images/portfolio.png",
    link: "https://adrianbatista.com",
  },
  {
    title: "Professional Expeience",
    description:
      "Since 2021 I work at Hitachi Energy Brasil company. There I do a Full-Stack Software Development, so in this time I've made many programs that I can not show here.",
    image: "/images/hitachi.png",
    link: "https://adrianbatista.com",
  },
];

export default function ProjectSection() {
  return (
    <Panel background={{ color: "#FEFEFE" }}>
      <Container sx={{ marginBlock: 3 }}>
        <Typography variant="h4" mb={1}>
          My Projects
        </Typography>
        <Divider />
        <Grid container spacing={2} mt={1}>
          {projects.map((project) => (
            <Grid xs={12} sm={6} md={4}>
              <Card {...project} />
            </Grid>
          ))}
        </Grid>
        {/* <Typography
          mt={1}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Button
            href="/projects"
            variant="contained"
            sx={{
              background: "#FEFEFE",
              color: "#1976D4",
              width: "100%",
              display: { xs: "block", md: "none" },
            }}
          >
            See more &#10132;
          </Button>
          <Button
            href="/projects"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            See more &#10132;
          </Button>
        </Typography> */}
      </Container>
    </Panel>
  );
}
