import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Highlights } from "../../pages/highlights-page/highlights-page";
import "./clip-item.styles.css";

const ClipItem = ({ name, url }: Highlights) => (
  <li className="frame-div">
    {/*  
        <iframe 
            title='videoPlayer' 
            className='frame' 
            src={url}
            frameBorder='0' 
        ><i class="fa-solid fa-arrow-up-right-from-square"></i>
        </iframe>
        */}
    <a href={url}>
      <span className="description">
        <FontAwesomeIcon icon={faLink} /> - {name}
      </span>
    </a>
  </li>
);

export default ClipItem;
