import React from "react";
import ClipItem from "../clip-item/clip-item";
import { Highlights } from "../../pages/highlights-page/highlights-page";
import TitleBar from "../title-bar/title-bar";

import "./clips.styles.css";

type ClipProps = {
  clips: Highlights[];
};

const Clips = ({ clips }: ClipProps) => {
  return (
    <div className="clips-container">
      <TitleBar title="HIGHLIGHTS" extraClass="sticky-bar" />
      <ul className="clips">
        {clips.map((clip) => (
          <ClipItem key={clip.url} {...clip} />
        ))}
      </ul>
    </div>
  );
};

export default Clips;
