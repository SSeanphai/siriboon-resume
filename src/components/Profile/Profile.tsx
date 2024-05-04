import { Typography } from "@mui/material";
import React, { FC } from "react";

import "./Profile.css";

const Profile: FC = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Siriboon Panpiriya</Typography>
        <Typography className="title">Fresh Graduate</Typography>
      </div>

      <figure className="profile_image">
        <img
          className="image"
          src="https://media.discordapp.net/attachments/813807614462263336/1104086455099326514/A4F76F81-9D9F-43F6-A768-16E39D6329FF.jpg?ex=6635bd63&is=66346be3&hm=9354635e17bd6f074523b70766114b74e2120c759f3aa929bda22082bd510ac9&=&format=webp&width=550&height=550"
          alt=""
        />
      </figure>

      <div className="profile_information">
        timeline
        <br />
        <button>cv download</button>
      </div>
    </div>
  );
};

export default Profile;
