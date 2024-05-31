import { Grid } from "@mui/material";

import "./Portfolio.css";

export default function MultiActionAreaCard() {
  return (
    <div className="portfolio">
      <Grid container className="aboutMe">
        <Grid item xs={12}>
          <p className="tagHeader">My project</p>
        </Grid>
      </Grid>
      {/* <ProjectCard /> */}
    </div>
  );
}
