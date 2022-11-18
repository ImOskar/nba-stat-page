import React from "react";
import { ScoresData } from "../../pages/homepage/homepage";
import logo from "../../util/getLogoSvg";

import "./scores-item.styles.css";

const ScoresItem = ({
  winner,
  homeTeam,
  homeAbbrev,
  homePts,
  awayTeam,
  awayAbbrev,
  awayPts,
}: ScoresData) => {
  const home = logo(homeAbbrev);
  const away = logo(awayAbbrev);

  return (
    <div className="scoresitem">
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
