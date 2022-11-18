import React from "react";
import { Standings } from "../../pages/standings/standings";
import logo from "../../util/getLogoSvg";
import "./team-standing-item.styles.css";

const TeamItem = ({
  name,
  seed,
  wins,
  losses,
  winLossPct,
  gb,
  ppg,
  oPpg,
  abbr,
}: Standings) => (
  <tr>
    <td className="team-row">
      <span>{seed}</span>
      <div
        className="image"
        style={{ backgroundImage: `url(${logo(abbr)})` }}
      />
      <span className="abbreviation">{abbr}</span>
      <span>{name}</span>
    </td>
    <td>
      {wins} - {losses}
    </td>
    <td>{winLossPct}</td>
    <td>{ppg}</td>
    <td>{oPpg}</td>
    <td>{gb}</td>
  </tr>
);
export default TeamItem;
