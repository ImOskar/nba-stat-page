import React, { useEffect, useState } from "react";
import ScoresItem from "../scores-item/scores-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./scores-styles.scss";

const Scores = ({ scores }) => {
  const [length, setLength] = useState(0);
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setX(0);
    setLength(scores.length);
    setWidth(document.getElementsByClassName("scores-content"));
  }, [scores, width]);

  const nextSlide = () => {
    let space = totalSpace();
    if (x === space) setX(0);
    else setX(x - 142 < space ? space : x - 142);
  };

  const prevSlide = () => {
    if (x === 0) setX(totalSpace());
    else setX(x + 142 > 0 ? 0 : x + 142);
  };

  const totalSpace = () => {
    return length * -142 + width[0].clientWidth;
  };

  return (
    <div className="scores-scroll">
      <button id="left" onClick={prevSlide} className="scroll left-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
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
      <button id="right" onClick={nextSlide} className="scroll right-btn">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
export default Scores;
