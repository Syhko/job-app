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
    <p className="ticket-job-text">{title}</p>
    <p className="ticket-company-text">{companyName}</p>
  </div>
);

export default JobTicket;
