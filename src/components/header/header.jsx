import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";

import "./header.styles.css";

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <FontAwesomeIcon className="logo" icon={faBasketballBall} />
      <span className="logo-title">B-BALL STATS</span>
    </Link>
    <nav className="options">
      <Link className="option" to="/players">
        PLAYERS
      </Link>
      <Link className="option" to="/teams">
        TEAMS
      </Link>
      <Link className="option" to="/highlights">
        HIGHLIGHTS
      </Link>
    </nav>
  </header>
);

export default Header;
