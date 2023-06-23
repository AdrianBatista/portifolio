import Panel from "../interface/Panel";
import { Typography, Divider, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../interface/Card";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

type TProject = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const GET_PROJECTS = gql`
  query {
    allProjects {
      id
      title
      description
      image
      link
    }
  }
`;

export default function ProjectSection() {
  const [projects, setProjects] = useState<TProject[]>();
  const { loading, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    if (loading === false) {
      const databaseProjects: TProject[] = data.allProjects;
      setProjects(databaseProjects);
    }
  }, [loading]);

  return (
    <Panel background={{ color: "#FEFEFE" }}>
      <Container sx={{ marginBlock: 3 }}>
        <Typography variant="h4" mb={1}>
          My Projects
        </Typography>
        <Divider />
        {projects && (
          <Grid container spacing={2} mt={1}>
            {projects!.map((project, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card {...project} />
              </Grid>
            ))}
          </Grid>
        )}

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
