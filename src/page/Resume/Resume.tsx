import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import "./Resume.css";
import {
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

function Resume() {
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

      {/* Education */}
      <div className="education">
        <div>
          <p className="tagHeaderRemain">Education</p>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 2,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  2014 - 2019
                </Typography>
                <Typography>Rayongwittayakom School</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <SchoolIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  2020 - 2024
                </Typography>
                <Typography>
                  King Mongkut's Institute of Technology Ladkrabang
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Skill */}
      <Grid container className="skill">
        <Grid item xs={12}>
          <p className="tagHeaderRemain">Skill</p>
        </Grid>
        <Grid container spacing={1} padding={2} marginTop={-3}>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Programing
                </Typography>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  paddingTop={1}
                >
                  <Chip label="HTML" variant="outlined" />
                  <Chip label="CSS" variant="outlined" />
                  <Chip label="Javascript" variant="outlined" />
                  <Chip label="Typescript" variant="outlined" />
                  <Chip label="Python" variant="outlined" />
                  <Chip label="Java" variant="outlined" />
                  <Chip label="NextJs" variant="outlined" />
                  <Chip label="ReactJs" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Network
                </Typography>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  paddingTop={1}
                >
                  <Chip label="Networking" variant="outlined" />
                  <Chip label="Cloud" variant="outlined" />
                  <Chip label="Routing & Switching" variant="outlined" />
                  <Chip label="VMWare" variant="outlined" />
                  <Chip label="Load Balancer" variant="outlined" />
                  <Chip label="TCP/IP" variant="outlined" />
                  <Chip label="VPN" variant="outlined" />
                  <Chip label="Network infrastructure" variant="outlined" />
                  <Chip label="Firewall" variant="outlined" />
                  <Chip label="WireShark" variant="outlined" />
                  <Chip label="GNS3" variant="outlined" />
                  <Chip label="Packet tracer" variant="outlined" />
                  <Chip label="Grafana" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Add on
                </Typography>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  paddingTop={1}
                >
                  <Chip label="Cypress" variant="outlined" />
                  <Chip label="Selenium" variant="outlined" />
                  <Chip label="Robot Framework" variant="outlined" />
                  <Chip label="Postman" variant="outlined" />
                  <Chip label="SQL" variant="outlined" />
                  <Chip label="Git/Github" variant="outlined" />
                  <Chip label="Testing" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
