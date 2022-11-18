import React from "react";
import TeamItem from "../team-standing-item/team-standing-item";
import TitleBar from "../title-bar/title-bar";
import { FullStandings } from "../../pages/standings/standings";

import "./team-standing.styles.css";

const TeamStanding = ({ id, items }: FullStandings) => (
  <div className="conference">
    <TitleBar
      title={id.toUpperCase()}
      extraClass="standings-bar sticky-bar"
    ></TitleBar>
    <div className="table-wrapper">
      <table className="styled-table team-table">
        <thead>
          <tr>
            <th>Seed</th>
            <th>W - L</th>
            <th>W/L%</th>
            <th>PS/G</th>
            <th>PA/G</th>
            <th>GB</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TeamItem key={item.abbr} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TeamStanding;
