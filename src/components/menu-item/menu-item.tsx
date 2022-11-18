import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menu-item.styles.css";

type MenuProps = RouteComponentProps & {
  title: string;
  imageUrl: string;
  linkUrl: string;
};

const MenuItem = ({ title, imageUrl, linkUrl, history, match }: MenuProps) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
