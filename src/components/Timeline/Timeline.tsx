import React, { FC, ReactNode } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {
  TimelineItemProps,
  timelineItemClasses,
} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import "./Timeline.css";

interface BasicTimelineProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const BasicTimeline: FC<BasicTimelineProps> = ({ title, children, icon }) => {
  return (
    <Timeline
      className="timeline"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {/* header */}
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* remain */}
    </Timeline>
  );
};

export const BasicTimelineSeparator: FC = () => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot variant="outlined" className="timeline_dot" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default BasicTimeline;
