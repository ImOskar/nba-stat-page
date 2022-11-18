import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./loader.styles.css";

const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon className="fa-spin" icon={faSpinner} />
  </div>
);

export default Loader;
