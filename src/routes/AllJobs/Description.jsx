import * as React from "react";
import "./style.scss";
import Markdown from "react-markdown";
import ApplyButton from "../../components/ApplyButton";

const Description = ({ title, companyName, description, applyUrl }) => (
  <div className="desc">
    <div className="apply-button-wrapper">
      <ApplyButton applyUrl={applyUrl} />
    </div>
    <div className="job-title-desc">{title}</div>
    <div className="job-company-title">{companyName}</div>
    <Markdown source={description} className="job-description" />
    <div className="job-description"></div>
  </div>
);

export default Description;
