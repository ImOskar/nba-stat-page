import React from "react";
import "./layout.styles.css";

const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;
