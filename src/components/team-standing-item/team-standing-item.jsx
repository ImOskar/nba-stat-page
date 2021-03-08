import React from "react";
import logo from "../../getLogoSvg";
import "./team-standing-item.styles.scss";

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
}) => (
  <div className="standing-item">
    <div className="team-detail">
      <span className="rank text">{seed}.</span>
      <div
        className="image"
        style={{ backgroundImage: `url(${logo(abbr)})` }}
      />
      <span className="name text">{name}</span>
    </div>
    <div className="wins-losses">
      <span className="wins text">
        {wins} - {losses}
      </span>
      <span className="winlose text">{winLossPct}</span>
      <span className="psg text">{ppg}</span>
      <span className="pag text">{oPpg}</span>
      <span className="games-behind text">{gb}</span>
    </div>
  </div>
);
export default TeamItem;
