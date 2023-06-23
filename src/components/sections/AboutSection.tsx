import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Panel from "../interface/Panel";

export default function AboutSection() {
  return (
    <Panel background={{ color: "#FEFEFE" }}>
      <Container>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mb: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", md: "33%" } }}
            image="/images/adrian.png"
            alt="About Adrian Batista"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                About Me
              </Typography>
              <Divider />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                mt={1}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm Adrian Felipe Nogueira
                Batista, an electrical engineer who found his true passion in
                the field of development. With two years of experience, I have
                dedicated myself to full-stack development, with a focus on
                React and Laravel technologies. I currently work at Hitachi
                Energy as a Full Stack Software Development Analyst.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;My work is driven by an unwavering
                pursuit of quality. I believe that delivering an exceptional
                product is essential to achieve success. Through my experience,
                I have developed skills and competencies that enable me to
                create efficient and functional solutions.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;My professional values and principles
                are fundamental in guiding my daily work. I believe in
                transparency, honesty, and mutual respect, both with my team
                members and clients. My approach is based on clear communication
                and understanding the needs of each project.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;My professional goals are ambitious. I
                constantly strive to expand my client base by providing quality
                services and exceeding expectations. Each project is an
                opportunity to grow and enhance my skills, always aiming for the
                client's success.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Although I do not possess specific
                specializations or certifications, my achievements speak for
                themselves. Among them, I highlight the development of a website
                for a college group and the creation of several applications in
                my current job. These experiences have solidified my technical
                expertise and my ability to work in a team.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;My true enthusiasm lies in front-end
                projects, where I can breathe life into innovative and
                captivating designs. Creating responsive and intuitive
                interfaces is one of my strengths, providing a pleasant user
                experience.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Challenges are opportunities for me.
                Embracing the unknown allows me to step out of my comfort zone
                and constantly learn. I see obstacles as chances for growth and
                improvement, seeking creative and effective solutions.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;I am excited to start new partnerships
                and collaborate on challenging projects. If you are looking for
                a quality-driven full-stack developer, committed to client
                success, and always seeking growth, feel free to contact me.
                Together, we can create something amazing.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </Panel>
  );
}
