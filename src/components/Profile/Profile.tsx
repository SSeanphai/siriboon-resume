import { Typography } from "@mui/material";
import { FC } from "react";
import BasicTimeline, { BasicTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { TimelineItem, TimelineContent } from "@mui/lab";

import "./Profile.css";
import ResumeData from "../../utils/ResumeData";

interface CustomTimelineItemProps {
  title: string;
  text: string;
  link?: string;
}

const CustomTimelineItem: FC<CustomTimelineItemProps> = ({
  title,
  text,
  link,
}) => {
  return (
    <TimelineItem>
      <BasicTimelineSeparator></BasicTimelineSeparator>
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timeline_item_text">
            <span>{title}: </span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timeline_item_text">
            <span>{title}: </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile: FC = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{ResumeData.name}</Typography>
        <Typography className="title">{ResumeData.title}</Typography>
      </div>

      <div className="profile_image">
        <img
          className="image"
          src="https://i.ibb.co/NywbjK6/A4-F76-F81-9-D9-F-43-F6-A768-16-E39-D6329-FF.jpg"
          alt=""
        />
      </div>

      <div className="profile_information">
        <BasicTimeline title="" icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={ResumeData.name} />
          <CustomTimelineItem title="Title" text={ResumeData.title} />
          <CustomTimelineItem title="Email" text={ResumeData.email} />
          {Object.keys(ResumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={ResumeData.socials[key].text}
              link={ResumeData.socials[key].link}
            />
          ))}
        </BasicTimeline>
      </div>
    </div>
  );
};

export default Profile;
