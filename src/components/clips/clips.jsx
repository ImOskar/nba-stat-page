import React from "react";
import ClipItem from "../clip-item/clip-item";
import TitleBar from "../title-bar/title-bar";

import "./clips.styles.scss";

const Clips = ({ clips }) => {
  return (
    <div className="clips-container">
      <TitleBar title="HIGHLIGHTS" details={false} extraClass="highlights" />
      <ul className="clips">
        {clips.map(({ i, ...otherClipsProps }) => (
          <ClipItem key={i} {...otherClipsProps} />
        ))}
      </ul>
    </div>
  );
};

export default Clips;
