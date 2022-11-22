import React from "react";
import "./footer.styles.css";

const Footer = () => (
  <footer className="footer">
    <span>Highlights fetched from reddit using snoowrap.</span>
    <span>All stats fetched from basketball-reference using cheerio.</span>
    <span>
      Site updated at 9:20 GMT every day with the latest stats and highlights.
    </span>
  </footer>
);

export default Footer;
