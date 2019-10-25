import * as React from "react";
import "./style.scss";
import Markdown from "react-markdown";
import ApplyButton from "../snippets/ApplyButton";

const Description = ({ title, companyName, description, applyUrl }) => (
  <div className="desc">
    <div className="save-button-wrapper">
      <ApplyButton applyUrl={applyUrl} />
    </div>
    <div className="job-title">{title}</div>
    <div className="job-company-title">{companyName}</div>
    <Markdown source={description} className="job-description" />
    <div className="job-description"></div>
  </div>
);

export default Description;
