import React from "react";

import PlayerStatItem from "../player-stat-item/player-stat-item";
import TitleBar from "../title-bar/title-bar";

import "./player-stats.styles.scss";

const PlayerStats = ({ title, items }) => (
  <div className="player-stats-container">
    <TitleBar title={title.toUpperCase()} extraClass="player-bar" />
    <div className="player-stats">
      {items.slice(0, 10).map((item) => (
        <PlayerStatItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

export default PlayerStats;
