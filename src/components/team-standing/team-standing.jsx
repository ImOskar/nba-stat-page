import React from "react";
import TeamItem from "../team-standing-item/team-standing-item";
import TitleBar from "../title-bar/title-bar";

import "./team-standing.styles.scss";

const TeamStanding = ({ title, items }) => (
  <div className="conference">
    <TitleBar
      title={title.toUpperCase()}
      details={true}
      extraClass="standings-bar"
    />
    <div className="teams">
      {items.map((item) => (
        <TeamItem key={item.abbr} {...item} />
      ))}
    </div>
  </div>
);

export default TeamStanding;
