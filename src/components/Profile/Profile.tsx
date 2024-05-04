import { Typography } from "@mui/material";
import React, { FC } from "react";
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
            <span>{title}:</span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timeline_item_text">
            <span>{title}:</span>
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

      <figure className="profile_image">
        <img
          className="image"
          src="https://media.discordapp.net/attachments/813807614462263336/1104086455099326514/A4F76F81-9D9F-43F6-A768-16E39D6329FF.jpg?ex=6635bd63&is=66346be3&hm=9354635e17bd6f074523b70766114b74e2120c759f3aa929bda22082bd510ac9&=&format=webp&width=550&height=550"
          alt=""
        />
      </figure>

      <div className="profile_information">
        <BasicTimeline title={<title />} icon={<PersonOutlineOutlinedIcon />}>
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
        <br />
        <button>cv download</button>
      </div>
    </div>
  );
};

export default Profile;
