import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import { ReactNode } from "react";

interface SocialLink {
  link: string;
  text: string;
  icon: ReactNode;
}

interface SocialLinks {
  facebook: SocialLink;
  instagram: SocialLink;
  [github: string]: SocialLink;
}

interface ResumeData {
  name: string;
  title: string;
  birthday: string;
  email: string;
  location: string;
  phone: string;
  socials: SocialLinks;
}

const ResumeData: ResumeData = {
  name: "Siriboon Panpiriya",
  title: "Fresh Graduate",
  birthday: "07 March 2002",
  email: "siriboon.pan@gmail.com",
  location: "Bangkok",
  phone: "094-946-4515",
  socials: {
    facebook: {
      link: "https://www.facebook.com/profile.php?id=100005533304570",
      text: "siriboon panpiriya",
      icon: <FacebookIcon />,
    },
    instagram: {
      link: "https://www.instagram.com/seanphai/",
      text: "seanphai",
      icon: <InstagramIcon />,
    },
    github: {
      link: "https://github.com/SSeanphai",
      text: "SSeanphai",
      icon: <GitHubIcon />,
    },
  },
};

export default ResumeData;
