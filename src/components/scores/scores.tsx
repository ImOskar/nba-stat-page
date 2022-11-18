import React, { useEffect, useState } from "react";
import { ScoresData } from "../../pages/homepage/homepage";
import ScoresItem from "../scores-item/scores-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./scores.styles.css";

type ScoreProps = {
  items: ScoresData[];
};

const Scores = ({ items }: ScoreProps) => {
  const [length, setLength] = useState(0);
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setX(0);
    setLength(items.length);
    const w = document.getElementsByClassName("scores-content")[0].clientWidth;
    setWidth(w);
  }, [items, width]);

  const nextSlide = () => {
    let space = totalSpace();
    if (x === space) setX(0);
    else setX(x - 141 < space ? space : x - 141);
  };

  const prevSlide = () => {
    if (x === 0) setX(totalSpace());
    else setX(x + 141 > 0 ? 0 : x + 141);
  };

  const totalSpace = () => {
    return length * -141 + width;
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
          {items.map((score) => (
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
