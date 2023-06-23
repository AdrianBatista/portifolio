import { Box, Container, Typography, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Panel from "../interface/Panel";

export default function ContactSection() {
  return (
    <Panel
      background={{
        type: "image",
        url: "/images/dark-plaster-pattern.jpg",
        alpha: 0.7,
      }}
    >
      <Container>
        <Typography variant="h4" color="white" align="center" mb={3}>
          Contact
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Button
            size="large"
            variant="contained"
            startIcon={<EmailIcon fontSize="inherit" />}
            href="mailto:email@adrianbatista.com"
            target="_blank"
            sx={{
              backgroundColor: "#FEFEFE",
              "&:hover": { backgroundColor: "#CCC" },
              color: "#BF211E",
              width: "200px",
            }}
          >
            Email
          </Button>
          <Button
            size="large"
            variant="contained"
            startIcon={<GitHubIcon fontSize="inherit" />}
            href="https://github.com/AdrianBatista"
            target="_blank"
            sx={{
              backgroundColor: "#FEFEFE",
              "&:hover": { backgroundColor: "#CCC" },
              color: "#000",
              width: "200px",
            }}
          >
            GitHub
          </Button>
          <Button
            size="large"
            variant="contained"
            startIcon={<LinkedInIcon fontSize="inherit" />}
            href="https://www.linkedin.com/in/adrianfnb/"
            target="_blank"
            sx={{
              backgroundColor: "#FEFEFE",
              "&:hover": { backgroundColor: "#CCC" },
              color: "#0A66C2",
              width: "200px",
            }}
          >
            Linkedin
          </Button>
        </Box>
      </Container>
    </Panel>
  );
}
