import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import projectInfo from "../../utils/ProjectInfo";
import "./ProjectPage.css";

export default function MultiActionAreaCard() {
  let { id } = useParams();
  const project = projectInfo[Number(id)];

  return (
    <div className="project">
      <Grid container>
        <Grid item xs={12}>
          {project ? (
            <p className="tagHeader">{project.name}</p>
          ) : (
            <p className="tagHeader">Project not found</p>
          )}
        </Grid>
      </Grid>

      <div className="info">
        <img
          className="image"
          src={project && project.mainImage}
          alt="Main"
        ></img>
        <div className="description">
          <Typography>{project && project.description}</Typography>
        </div>
        <div>
          {project &&
            project.projectImg.map((img, index) => (
              <img
                key={index}
                className="image"
                src={img}
                alt={`Image ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
