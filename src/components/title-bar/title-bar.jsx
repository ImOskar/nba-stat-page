import React from "react";
import "./title-bar.styles.scss";

const TitleBar = ({ title, details, extraClass }) => (
  <div className={"title-bar " + extraClass}>
    <h1 className="title">{title.toUpperCase()}</h1>
    {details && (
      <div className="bar-details">
        <h1>
          <span className="wins">W - L</span>
        </h1>
        <h1>
          <span className="winlose">W/L%</span>
        </h1>
        <h1>
          <span className="winlose">PS/G</span>
        </h1>
        <h1>
          <span className="winlose">PA/G</span>
        </h1>
        <h1>
          <span className="games-behind">GB</span>
        </h1>
      </div>
    )}
  </div>
);

export default TitleBar;
