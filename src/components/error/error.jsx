import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./error.styles.scss";

const Error = () => (
  <div className="error">
    <FontAwesomeIcon icon={faExclamationCircle} />
    <span>Error fetching data</span>
  </div>
);

export default Error;
