import * as React from "react";
import "./style.scss";

const ListLoader = () => (
  <div className="job-loader-wrapper">
    <div className="job-loader-text">Loading job list...</div>
    <div className="job-loader"></div>
  </div>
);

export default ListLoader;
