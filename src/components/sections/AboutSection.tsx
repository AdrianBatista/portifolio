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
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", md: "33%" } }}
            image="/images/pc.jpg"
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

        {/* <Paper sx={{ p: 2 }}>
          <Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;Olá, eu sou Adrian Felipe Nogueira Batista,
            um engenheiro elétrico que encontrou sua verdadeira paixão na área
            de desenvolvimento. Com dois anos de experiência, tenho me dedicado
            ao desenvolvimento full-stack, com ênfase nas tecnologias React e
            Laravel. Trabalho atualmente na empresa Hitachi Energy como Analista
            de Desenvolvimento de Software Pleno.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Meu trabalho é impulsionado pela busca
            incansável da qualidade. Acredito que entregar um produto
            excepcional é essencial para alcançar o sucesso. Através da minha
            experiência, tenho desenvolvido habilidades e competências que me
            permitem criar soluções eficientes e funcionais.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Meus valores e princípios profissionais são
            fundamentais para guiar meu trabalho diário. Acredito na
            transparência, na honestidade e no respeito mútuo, tanto com meus
            colegas de equipe quanto com os clientes. Minha abordagem se baseia
            na comunicação clara e na compreensão das necessidades de cada
            projeto.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Meus objetivos profissionais são ambiciosos.
            Busco constantemente expandir minha base de clientes, fornecendo
            serviços de qualidade e excedendo as expectativas. Cada projeto é
            uma oportunidade para crescer e aprimorar minhas habilidades, sempre
            visando o sucesso do cliente.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Embora não possua especializações ou
            certificações específicas, minhas conquistas falam por si. Entre
            elas, destaco o desenvolvimento de um site para um grupo da
            faculdade e a criação de diversas aplicações no meu trabalho atual.
            Essas experiências consolidaram minha expertise técnica e minha
            capacidade de trabalhar em equipe.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Meu verdadeiro entusiasmo está em projetos
            front-end, onde posso dar vida a designs inovadores e cativantes. A
            criação de interfaces responsivas e intuitivas é um dos meus pontos
            fortes, proporcionando uma experiência agradável aos usuários.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Desafios são oportunidades para mim. Abraçar
            o desconhecido me permite sair da minha zona de conforto e aprender
            constantemente. Encaro os obstáculos como chances de crescimento e
            aprimoramento, buscando soluções criativas e eficazes.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Estou animado para iniciar novas parcerias e
            colaborar em projetos desafiadores. Se você busca um desenvolvedor
            full-stack apaixonado por qualidade, comprometido com o sucesso do
            cliente e sempre em busca de crescimento, entre em contato comigo.
            Juntos, podemos criar algo incrível.
          </Typography>
        </Paper> */}
      </Container>
    </Panel>
  );
}
