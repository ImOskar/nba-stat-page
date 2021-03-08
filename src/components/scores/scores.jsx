import React, { useEffect, useState } from "react";

import ScoresItem from "../scores-item/scores-item";
import TitleBar from "../title-bar/title-bar";

import "./scores-styles.scss";

const Scores = ({ scores }) => {
  const [length, setLength] = useState("");
  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setCurrent(0);
    setX(0);
    setLength(scores.length);
    let visibleContent = document.getElementsByClassName("scores-content");
    setWidth(visibleContent[0].clientWidth);
    console.log(scores.length * -142 + width);
  }, [scores, width]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    //setX(current === length - 1 ? 0 : x - 142);
    setX(x <= length * -142 + width ? 0 : x - 142);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setX(current === 0 ? (length - 1) * -142 : x + 142);
  };

  return (
    <div className="scores-container">
      <TitleBar title="YESTERDAYS SCORES" extraClass="scores" />
      <div className="scores-scroll">
        <button
          id="left"
          onClick={prevSlide}
          className="scroll left-btn"
        ></button>
        <div className="scores-content">
          <div
            id="content"
            className="game-scores"
            style={{ transform: `translateX(${x}px)` }}
          >
            {scores.map((score) => (
              <ScoresItem key={score.homeAbbrev} {...score} />
            ))}
          </div>
        </div>
        <button
          id="right"
          onClick={nextSlide}
          className="scroll right-btn"
        ></button>
      </div>
    </div>
  );
};
export default Scores;
