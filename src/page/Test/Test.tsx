import { Grid, Typography } from "@mui/material";

function Test() {
  return (
    <div className="Resume">
      {/* about me */}
      <Grid container className="aboutMe">
        <Grid item xs={12}>
          <p className="tagHeader">About me</p>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutMeText">
            As a student pursuing a degree in Information Technology, I am eager
            to gain practical experience and learn from real-world projects
            within a professional team environment. I am seeking opportunities
            that will allow me to apply my academic knowledge, enhance my
            skills, and contribute effectively to meaningful projects in the
            field of Information Technology.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Test;
