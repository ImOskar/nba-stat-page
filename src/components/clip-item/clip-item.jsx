import React from "react";

import "./clip-item.styles.scss";

const ClipItem = ({ name, url }) => (
  <li className="frame-div">
    {/*  
        <iframe 
            title='videoPlayer' 
            className='frame' 
            src={url}
            frameBorder='0' 
        >
        </iframe>
        */}
    <a href={url}>
      <span className="description">{name}</span>
    </a>
  </li>
);

export default ClipItem;
