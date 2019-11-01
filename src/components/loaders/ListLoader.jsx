import * as React from "react";
import "./style.scss";
import "../Navigation/favicon.png";

const ListLoader = () => (
  <div className="job-loader-wrapper">
    <div className="job-loader-text">Loading job list...</div>
    <img src="favicon.png" className="job-loader" alt="loader" />
  </div>
);

export default ListLoader;
