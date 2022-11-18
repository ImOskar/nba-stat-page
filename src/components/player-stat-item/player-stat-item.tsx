import React from "react";
import { PlayerStatistics } from "../../pages/player-stats-page/player-stats-page";
import "./player-stat-item.styles.css";

const PlayerStatItem = ({ name, stat, rank }: PlayerStatistics) => (
  <tr>
    <td>
      <span>{rank ? rank : "-"}</span>
    </td>
    <td>{name}</td>
    <td>{stat}</td>
  </tr>
);

export default PlayerStatItem;
