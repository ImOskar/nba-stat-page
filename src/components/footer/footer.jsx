import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <span>Highlights fetched from reddit using snoowrap.</span>
    <span>All stats fetched from basketball-reference using cheerio.</span>
    <span>Site updated at 9:20 GMT every day.</span>
  </div>
);

export default Footer;
