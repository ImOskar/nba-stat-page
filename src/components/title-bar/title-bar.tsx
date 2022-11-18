import React from "react";
import "./title-bar.styles.css";

type TitleBarProps = {
  title: string;
  extraClass: string;
  children?: JSX.Element | JSX.Element[];
};

const TitleBar = ({ title, extraClass, children }: TitleBarProps) => (
  <div className={"title-bar " + extraClass}>
    <h1 className="title">{title.toUpperCase()}</h1>
    {children}
  </div>
);

export default TitleBar;
