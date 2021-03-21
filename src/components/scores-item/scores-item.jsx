import React from "react";
import logo from "../../util/getLogoSvg";

import "./scores-item-styles.scss";

const ScoresItem = ({
  winner,
  homeTeam,
  homeAbbrev,
  homePts,
  awayTeam,
  awayAbbrev,
  awayPts,
}) => {
  const home = logo(homeAbbrev);
  const away = logo(awayAbbrev);
  return (
    <div className="scores-item">
      <div className={winner === homeTeam ? "scores winner" : "scores"}>
        <span className="team">
          <div
            className="lg logo"
            style={{ backgroundImage: `url(${home})` }}
          />
          {homeAbbrev}
        </span>
        <span className="points">{homePts}</span>
      </div>
      <div className={winner === awayTeam ? "scores winner" : "scores"}>
        <span className="team">
          <div
            className="lg logo"
            style={{ backgroundImage: `url(${away})` }}
          />
          {awayAbbrev}
        </span>
        <span className="points">{awayPts}</span>
      </div>
    </div>
  );
};

export default ScoresItem;
