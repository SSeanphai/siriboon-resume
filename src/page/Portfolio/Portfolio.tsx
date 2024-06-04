import { Grid, Grow } from "@mui/material";

import "./Portfolio.css";
import ProjectCard from "../../components/Card/ProjectCard";
import projectData from "../../utils/ProjectData";

export default function MultiActionAreaCard() {
  return (
    <div className="portfolio">
      <Grid>
        <Grid item xs={12}>
          <p className="tagHeader">My project</p>
        </Grid>
      </Grid>
      <Grid
        className="projectList"
        container
        spacing={2}
        justifyContent="center"
        paddingBottom={3}
      >
        {projectData.map((project) => (
          <Grid item key={project.id}>
            <ProjectCard
              img={project.img}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
