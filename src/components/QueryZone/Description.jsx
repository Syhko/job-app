import * as React from "react";
import "./style.scss";
import Markdown from "react-markdown";

const Description = ({ title, companyName, description, applyUrl }) => (
  <div className="desc">
    <div className="job-title">{title}</div>
    <div className="job-company-title">{companyName}</div>
    <Markdown source={description} className="job-description" />
    <div className="job-description">
      Want to apply ?{" "}
      <a href={applyUrl} target="_blank">
        Here
      </a>
    </div>
  </div>
);

export default Description;
