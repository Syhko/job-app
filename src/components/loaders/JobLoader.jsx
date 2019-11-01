import * as React from "react";
import "./style.scss";
import "../Navigation/favicon.png";

const JobLoader = () => (
  <div className="job-loader-wrapper">
    <img src="favicon.png" className="description-loader" alt="loader" />
  </div>
);

export default JobLoader;
