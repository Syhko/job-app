import * as React from "react";
import "./style.scss";

const JobTicket = ({
  key,
  title,
  companyName,
  jobSlug,
  companySlug,
  handleClick
}) => (
  <div className="ticket" onClick={() => handleClick(jobSlug, companySlug)}>
    <div className="ticket-job-text">{title}</div>
    <div className="ticket-company-text">{companyName}</div>
  </div>
);

export default JobTicket;
