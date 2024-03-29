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
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    setX(0);
    setLength(items.length);
    setWidth(getClientWidth());
    setNeedsScroll(needsScrollBtn());
  }, [items, width]);

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
    return length * -142 + width - 40;
  };

  const getClientWidth = () => {
    return document.getElementsByClassName("scores-content")[0].clientWidth;
  };

  const needsScrollBtn = () => {
    return length * 142 > width;
  };

  return (
    <div className="scores-scroll">
      {needsScroll && (
        <button id="left" onClick={prevSlide} className="scroll left-btn">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <div className="scores-content">
        <div
          id="content"
          className={
            needsScroll ? "game-scores" : "game-scores center-game-scores"
          }
          style={{ transform: `translateX(${x}px)` }}
        >
          {items.map((score) => (
            <ScoresItem key={score.homeAbbrev} {...score} />
          ))}
        </div>
      </div>
      {needsScroll && (
        <button id="right" onClick={nextSlide} className="scroll right-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};
export default Scores;
