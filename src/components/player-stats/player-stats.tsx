import React from "react";
import PlayerStatItem from "../player-stat-item/player-stat-item";
import TitleBar from "../title-bar/title-bar";
import { FullPlayerStat } from "../../pages/player-stats-page/player-stats-page";
import "./player-stats.styles.css";

function PlayerStats({ id, items }: FullPlayerStat) {
  return (
    <div className="player-stats-container">
      <TitleBar title={id.toUpperCase()} extraClass="sticky-bar" />
      <table className="styled-table player-table">
        <tbody>
          {items.slice(0, 10).map((item) => (
            <PlayerStatItem key={item.name} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PlayerStats;
