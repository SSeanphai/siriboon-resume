import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";

import "./ProjectCard.css";

interface ProjectCardProps {
  img: string;
  name: string;
  description: string;
  link: string;
  type: string;
}

export default function ProjectCard({
  img,
  name,
  description,
  link,
  type,
}: ProjectCardProps) {
  return (
    <Card className="card" sx={{ maxWidth: 260 }}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography className="description" variant="body2">
            {description}
          </Typography>

          <Chip color="success" label={type} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
