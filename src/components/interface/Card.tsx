import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import MuiCard from "@mui/material/Card";

type TProject = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function Card({ title, description, link, image }: TProject) {
  return (
    <MuiCard>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent sx={{ height: { sm: "150px" } }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {link && (
          <Button size="small" href={link} target="_blank">
            Visit
          </Button>
        )}
      </CardActions>
    </MuiCard>
  );
}
