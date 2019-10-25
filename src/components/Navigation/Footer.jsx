import * as React from "react";
import "./style.scss";

const Footer = () => (
  <div className="footer">
    <div className="credits">
      Powered by{" "}
      <a
        href="https://graphql.jobs/docs/api"
        target="_blank"
        className="footer-link"
      >
        Graphql jobs
      </a>
    </div>
    <div className="credits">
      Made by{" "}
      <a
        href="https://github.com/syhko"
        target="_blank"
        className="footer-link"
      >
        Syhko
      </a>
    </div>
  </div>
);

export default Footer;
